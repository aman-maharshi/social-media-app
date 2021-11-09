import { useState, useEffect } from "react"
import axios from "axios"

function CreatePost({ loginResponse }) {
    const [showCreatePost, setShowCreatePost] = useState(false)
    const [postTitle, setPostTitle] = useState("")
    const [postBody, setPostBody] = useState("")
    const [message, setMessage] = useState("")
    // const [postId, setPostId] = useState("")

    useEffect(() => {
        let hideMessage = setTimeout(() => setMessage(""), 2500)

        return () => {
            clearTimeout(hideMessage)
        }
    }, [message])

    const toggleShowCreatePost = () => {
        setShowCreatePost(!showCreatePost)
    }

    const handleFormSubmit = async e => {
        e.preventDefault()
        const newPostData = {
            title: postTitle,
            body: postBody,
            token: loginResponse.token
        }

        try {
            const response = await axios.post("/create-post", newPostData)
            if (Array.isArray(response.data)) {
                setMessage(response.data.join(" "))
            } else {
                // setPostId(response.data)
                setMessage("Post created successfully")
            }
        } catch (e) {
            setMessage("Unable to create new post")
        }

        setPostTitle("")
        setPostBody("")
    }
    return (
        <>
            {showCreatePost ? (
                <div className="pageContent">
                    <div className="button-wrapper-right">
                        <button onClick={toggleShowCreatePost} className="close">
                            ✕
                        </button>
                    </div>
                    <form className="signup__form" onSubmit={handleFormSubmit}>
                        <input autoFocus value={postTitle} onChange={e => setPostTitle(e.target.value)} type="text" name="username" placeholder="Post Title" />
                        <textarea value={postBody} onChange={e => setPostBody(e.target.value)} name="post" rows="7" placeholder="Post Description"></textarea>
                        <button type="submit">Create Post</button>
                        <p className="message">{message}</p>
                    </form>
                </div>
            ) : (
                <div className="pageContent pageContent--noBg">
                    <div className="button-wrapper-right">
                        <button onClick={toggleShowCreatePost}>Create Post</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default CreatePost
