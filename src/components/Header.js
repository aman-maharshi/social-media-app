import { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"

function Header({ loginResponse, setLoginResponse, setFlashMessage }) {
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
                const response = await axios.post("/login", loginDetails)
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
        } else {
            setFlashMessage("Invalid login credentials")
        }
    }

    const handleLogout = () => {
        setLoginResponse(null)
        history.push("/")
    }

    return (
        <>
            {loginResponse ? (
                <div className="home__card">
                    <div className="avatar">
                        <img src={loginResponse.avatar} alt="user-avatar" />
                    </div>
                    <h3 className="username">{loginResponse.username}</h3>
                    <button onClick={handleLogout} className="secondary">
                        Logout
                    </button>
                </div>
            ) : (
                <form className="signin__form" onSubmit={handleFormSubmit}>
                    <input value={loginDetails.username} onChange={handleInputChange} name="username" type="text" placeholder="username" />
                    <input value={loginDetails.password} onChange={handleInputChange} name="password" type="password" placeholder="password" />
                    <button type="submit">Login</button>
                </form>
            )}
        </>
    )
}

export default Header
