import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

const ProfilePosts = () => {
    let { username } = useParams()
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        loadPosts()
    }, [])

    const loadPosts = async () => {
        try {
            const response = await axios.get(`/profile/${username}/posts`)
            setPosts(response.data)
            console.log("run: loadPosts")
            setLoading(false)
        } catch (e) {
            console.log("Unable to get posts")
        }
    }

    if (loading) return <p>Loading...</p>

    return (
        <div className="posts">
            <ul>
                {posts.map(item => {
                    return (
                        <li key={item._id}>
                            <Link to={`/post/${item._id}`}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ProfilePosts
