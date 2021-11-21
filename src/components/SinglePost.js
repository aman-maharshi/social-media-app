import { useContext, useState, useEffect } from "react"
import NotFoundPage from "./NotFoundPage"
import UserContext from "../UserContext"
import { useParams } from "react-router-dom"

import axios from "axios"

function SinglePost() {
    const { postId } = useParams()
    const { loginResponse } = useContext(UserContext)
    const [post, setPost] = useState(null)

    useEffect(() => {
        loadPosts()
    }, [])

    const loadPosts = async () => {
        try {
            const response = await axios.get(`/post/${postId}`)
            setPost(response.data)
        } catch (e) {
            console.log("Unable to get post.")
        }
    }

    const formatDate = inputDate => {
        const date = new Date(inputDate)
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        return formattedDate
    }

    return (
        <>
            {loginResponse ? (
                <main className="main">
                    <div className="contentWrapper">
                        {post ? (
                            <div>
                                <h2>{post.title}</h2>
                                <p>{formatDate(post.createdDate)}</p>
                                <p>{post.body}</p>
                                <p>{post.author.username}</p>
                            </div>
                        ) : (
                            <p>Loading ...</p>
                        )}
                    </div>
                </main>
            ) : (
                <NotFoundPage title="Login to view this page." />
            )}
        </>
    )
}

export default SinglePost
