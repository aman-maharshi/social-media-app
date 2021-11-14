import { useContext } from "react"
import { useParams } from "react-router-dom"
import CreatePost from "./CreatePost"
import NotFoundPage from "./NotFoundPage"
import UserContext from "../UserContext"

function HomePage() {
    let { userId } = useParams()
    const { setFlashMessage, loginResponse } = useContext(UserContext)

    return (
        <>
            {loginResponse && userId === loginResponse.username ? (
                <main className="main">
                    <CreatePost loginResponse={loginResponse} setFlashMessage={setFlashMessage} />
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
