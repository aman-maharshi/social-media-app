import { useContext } from "react"
import { Link } from "react-router-dom"
import CreatePost from "./CreatePost"
import NotFoundPage from "./NotFoundPage"
import UserContext from "../UserContext"

function AllPosts() {
    const { setFlashMessage, loginResponse } = useContext(UserContext)

    return (
        <>
            {loginResponse ? (
                <main className="main">
                    <div className="contentWrapper contentWrapper--noBg">
                        <div className="button-wrapper-left">
                            <button className="link">
                                <Link to={`/user/${loginResponse.username}`}>Feed</Link>
                            </button>
                            <button className="link">
                                <Link to="/myposts">My Posts</Link>
                            </button>
                        </div>
                    </div>
                    <CreatePost loginResponse={loginResponse} setFlashMessage={setFlashMessage} />
                    <div className="contentWrapper">
                        <Link to="/post/hjsahfk">
                            <h3>Lorem, ipsum dolor.</h3>
                        </Link>
                        <Link to="/post/hjsahfk">
                            <h3>Lorem, ipsum dolor.</h3>
                        </Link>
                        <Link to="/post/hjsahfk">
                            <h3>Lorem, ipsum dolor.</h3>
                        </Link>
                        <Link to="/post/hjsahfk">
                            <h3>Lorem, ipsum dolor.</h3>
                        </Link>
                        <Link to="/post/hjsahfk">
                            <h3>Lorem, ipsum dolor.</h3>
                        </Link>
                    </div>
                </main>
            ) : (
                <NotFoundPage title="Login to view this page." />
            )}
        </>
    )
}

export default AllPosts
