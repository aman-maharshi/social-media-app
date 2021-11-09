import React from "react"
import { Link } from "react-router-dom"

function NotFoundPage({ title }) {
    return (
        <main className="main">
            <div className="contentWrapper contentWrapper--center">
                <p>{title}</p>
                <button>
                    <Link to="/">← Home</Link>
                </button>
            </div>
        </main>
    )
}

export default NotFoundPage
