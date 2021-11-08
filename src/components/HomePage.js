import { Link, useParams, useHistory } from "react-router-dom"
import CreatePost from "./CreatePost"

function HomePage({ loginResponse, setLoginResponse }) {
    let { id } = useParams()
    let history = useHistory()

    const handleLogout = () => {
        setLoginResponse(null)
        history.push("/")
    }

    return (
        <>
            {loginResponse && id === loginResponse.username ? (
                <div className="home">
                    <header className="header">
                        <div className="home__card">
                            <div className="avatar">
                                <img src={loginResponse.avatar} alt="user-avatar" />
                            </div>
                            <h3 className="username">{loginResponse.username}</h3>
                            <button onClick={handleLogout} className="secondary">
                                Logout
                            </button>
                        </div>
                    </header>
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
