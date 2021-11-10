import { useState } from "react"
import axios from "axios"

function LoginPage({ setFlashMessage }) {
    const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "" })
    const [loading, setLoading] = useState(false)

    const handleInputChange = e => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = async e => {
        e.preventDefault()
        if (userDetails.username && userDetails.email && userDetails.password) {
            setLoading(true)
            try {
                await axios.post("/register", userDetails)
                setFlashMessage("SignUp Successful")
                setLoading(false)
            } catch (e) {
                if (e.response) {
                    setFlashMessage(e.response.data.join(" "))
                }
                setLoading(false)
            }
        } else {
            setFlashMessage("All fields are required")
        }

        setUserDetails({ username: "", email: "", password: "" })
    }

    return (
        <main className="main">
            <div className="contentWrapper">
                <form className="signup__form" onSubmit={handleFormSubmit}>
                    <input value={userDetails.username} onChange={handleInputChange} type="text" name="username" placeholder="username" />
                    <input value={userDetails.email} onChange={handleInputChange} type="email" name="email" placeholder="email" />
                    <input value={userDetails.password} onChange={handleInputChange} type="password" name="password" placeholder="password" />
                    <button type="submit">Sign Up {loading && <img src="/spinner.gif" alt="spinner" />}</button>
                </form>
            </div>
        </main>
    )
}

export default LoginPage
