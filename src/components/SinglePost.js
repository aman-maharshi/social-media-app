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
    }, [postId])

    const loadPosts = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/post/${postId}`)
            setPost(response.data)
        } catch (e) {
            console.log("Unable to get post.")
        }
    }

    return (
        <>
            {loginResponse ? (
                <main className="main">
                    <div className="contentWrapper">
                        {post ? (
                            <div>
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                                <p>{post.createdDate}</p>
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
