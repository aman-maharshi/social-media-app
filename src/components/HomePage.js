import { Link, useParams } from "react-router-dom"
import CreatePost from "./CreatePost"
import NotFoundPage from "./NotFoundPage"

function HomePage({ loginResponse, setLoginResponse }) {
    let { userId } = useParams()

    return (
        <>
            {loginResponse && userId === loginResponse.username ? (
                <main className="main">
                    <div className="contentWrapper contentWrapper--noBg">
                        <div className="button-wrapper-left">
                            <button className="link">
                                <Link to={`/user/${loginResponse.username}`}>Feed</Link>
                            </button>
                            <button className="link">My Posts</button>
                        </div>
                    </div>
                    <CreatePost loginResponse={loginResponse} />
                    <div className="contentWrapper">
                        <h2>Hello {loginResponse.username}, your feed is empty</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nesciunt expedita mollitia adipisci dolorum optio aperiam quod, quo eum, dolores delectus voluptates aspernatur alias! Deserunt aspernatur nihil minima rerum ducimus.</p>
                    </div>
                </main>
            ) : (
                <NotFoundPage title="Login to view this page." />
            )}
        </>
    )
}

export default HomePage
