import { useState } from "react"
import SignUp from "./SignUp"
import { useHistory } from "react-router-dom"
import axios from "axios"

function LoginPage({ setLoginResponse }) {
    const [loginDetails, setLoginDetails] = useState({ username: "", password: "" })
    let history = useHistory()

    const handleInputChange = e => {
        setLoginDetails({
            ...loginDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = async e => {
        e.preventDefault()
        if (loginDetails.username && loginDetails.password) {
            try {
                const response = await axios.post("http://localhost:8080/login", loginDetails)
                if (response.data) {
                    setLoginResponse(response.data)
                    setLoginDetails({ username: "", password: "" })
                    history.push(`user/${loginDetails.username}`)
                } else {
                    console.log("Incorrect username / password")
                    setLoginDetails({ username: "", password: "" })
                }
            } catch (e) {
                console.log("Unable to login")
                setLoginDetails({ username: "", password: "" })
            }
        }
    }

    return (
        <div className="login">
            <header className="header">
                <form className="signin__form" onSubmit={handleFormSubmit}>
                    <input value={loginDetails.username} onChange={handleInputChange} name="username" type="text" placeholder="username" />
                    <input value={loginDetails.password} onChange={handleInputChange} name="password" type="password" placeholder="password" />
                    <button type="submit">Login</button>
                </form>
            </header>

            <div className="pageContent">
                <SignUp />
            </div>
        </div>
    )
}

export default LoginPage
