import { useContext, useState, useEffect } from "react"
import UserContext from "../UserContext"
import { useParams } from "react-router-dom"
import axios from "axios"

import CreatePost from "./CreatePost"
import NotFoundPage from "./NotFoundPage"
import ProfilePosts from "./ProfilePosts"

const Profile = () => {
    let { username } = useParams()
    const { setFlashMessage, loginResponse } = useContext(UserContext)
    const [profileInfo, setProfileInfo] = useState({
        counts: { postCount: 0, followerCount: 0, followingCount: 0 },
        isFollowing: false,
        profileAvatar: "",
        profileUsername: ""
    })

    useEffect(() => {
        getProfileInfo()
    }, [])

    const getProfileInfo = async () => {
        try {
            const response = await axios.post(`/profile/${username}`, { token: loginResponse.token })
            setProfileInfo(response.data)
            console.log("run: profileInfo")
        } catch (e) {
            console.log("Unable to get profile info")
        }
    }

    if (!loginResponse) return <NotFoundPage title="Login to view this page." />

    return (
        <div className="main">
            <CreatePost loginResponse={loginResponse} setFlashMessage={setFlashMessage} />
            <div className="contentWrapper contentWrapper--noBg">
                <div className="profileTitleRow">
                    <div className="avatar">
                        <img src={loginResponse.avatar} alt="user-avatar" />
                    </div>
                    <h3 className="username">{loginResponse.username}</h3>
                    <button>Follow</button>
                </div>
            </div>
            <div className="contentWrapper">
                <div className="profileNav">
                    <button>Posts ({profileInfo.counts.postCount})</button>
                    <button>Followers ({profileInfo.counts.followerCount})</button>
                    <button>Following ({profileInfo.counts.followingCount})</button>
                </div>

                <ProfilePosts />
            </div>
        </div>
    )
}

export default Profile
