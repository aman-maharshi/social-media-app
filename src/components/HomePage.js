import { Link, useParams } from "react-router-dom"
import CreatePost from "./CreatePost"

function HomePage({ loginResponse, setLoginResponse }) {
    let { userId } = useParams()

    return (
        <>
            {loginResponse && userId === loginResponse.username ? (
                <div className="home">
                    <CreatePost loginResponse={loginResponse} />
                    <div className="pageContent">
                        <h2>Hello {loginResponse.username}, your feed is empty</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nesciunt expedita mollitia adipisci dolorum optio aperiam quod, quo eum, dolores delectus voluptates aspernatur alias! Deserunt aspernatur nihil minima rerum ducimus.</p>
                    </div>
                </div>
            ) : (
                <div className="pageContent">
                    <div className="notLoggedIn">
                        <p>Login to view this page</p>
                        <button>
                            <Link to="/">← Home</Link>
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default HomePage
