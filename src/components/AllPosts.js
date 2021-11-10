import React from "react"
import { Link } from "react-router-dom"
import CreatePost from "./CreatePost"
import NotFoundPage from "./NotFoundPage"

function AllPosts({ loginResponse, setFlashMessage }) {
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

export default AllPosts
