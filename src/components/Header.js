import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import UserContext from "../UserContext"
import { Link } from "react-router-dom"

function Header({ setLoginResponse }) {
    const [loginDetails, setLoginDetails] = useState({ username: "", password: "" })
    const { setFlashMessage, loginResponse } = useContext(UserContext)

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
                    setFlashMessage("Incorrect username / password")
                    setLoginDetails({ username: "", password: "" })
                }
            } catch (e) {
                setFlashMessage("Unable to login")
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
                    <Link to={`/user/${loginResponse.username}`} className="profileLink profileLink--feed">
                        <h3 className="username">Feed</h3>
                    </Link>

                    <Link to={`/profile/${loginResponse.username}`} className="profileLink">
                        <div className="avatar">
                            <img src={loginResponse.avatar} alt="user-avatar" />
                        </div>
                        <h3 className="username">{loginResponse.username}</h3>
                    </Link>
                    <button onClick={handleLogout} className="logoutBtn">
                        <h3>Logout</h3>
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
