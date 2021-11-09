import React from "react"
import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
        <div className="pageContent">
            <div className="notLoggedIn">
                <p>Page not found</p>
                <button>
                    <Link to="/">← Home</Link>
                </button>
            </div>
        </div>
    )
}

export default NotFoundPage
