import { useContext } from "react"
import NotFoundPage from "./NotFoundPage"
import UserContext from "../UserContext"

function SinglePost() {
    const { loginResponse } = useContext(UserContext)
    return (
        <>
            {loginResponse ? (
                <main className="main">
                    <div className="contentWrapper">
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate expedita, corporis et a porro repellat quod. Dolorem, minima provident.</p>
                    </div>
                </main>
            ) : (
                <NotFoundPage title="Login to view this page." />
            )}
        </>
    )
}

export default SinglePost
