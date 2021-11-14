import { useContext, useState, useEffect } from "react"
import UserContext from "../UserContext"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

import NotFoundPage from "./NotFoundPage"

const Profile = () => {
    let { username } = useParams()
    const { setFlashMessage, loginResponse } = useContext(UserContext)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const response = await axios.get(`/profile/${username}/posts`)
                setPosts(response.data)
            } catch (e) {
                console.log("Unable to get posts.")
            }
        }
        loadPosts()
    }, [username])

    return (
        <>
            {loginResponse && username === loginResponse.username ? (
                <div className="main">
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
                        <h2>Posts</h2>
                        <div className="posts">
                            <ul>
                                {posts.length ? (
                                    posts.map(item => {
                                        return (
                                            <li key={item._id}>
                                                <Link to={`/post/${item._id}`}>{item.title}</Link>
                                            </li>
                                        )
                                    })
                                ) : (
                                    <li>Loading...</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <NotFoundPage title="Login to view this page." />
            )}
        </>
    )
}

export default Profile
