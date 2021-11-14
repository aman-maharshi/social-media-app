import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UserContext from "./UserContext"

// Components
import LoginPage from "./components/LoginPage"
import HomePage from "./components/HomePage"
import NotFoundPage from "./components/NotFoundPage"
import Header from "./components/Header"
import FlashMessage from "./components/FlashMessage"
import SinglePost from "./components/SinglePost"
import Profile from "./components/Profile"

import axios from "axios"
axios.defaults.baseURL = "http://localhost:8080"

function App() {
    const lsLoginResponse = JSON.parse(localStorage.getItem("loginResponse"))
    const [loginResponse, setLoginResponse] = useState(lsLoginResponse ? lsLoginResponse : null)
    const [flashMessage, setFlashMessage] = useState(null)

    useEffect(() => {
        localStorage.setItem("loginResponse", JSON.stringify(loginResponse))
    }, [loginResponse])

    const contextObject = { setFlashMessage, loginResponse }

    return (
        <>
            <UserContext.Provider value={contextObject}>
                <div className="appWrapper">
                    <Router>
                        <header className="header">
                            <Header setLoginResponse={setLoginResponse} />
                        </header>
                        <Switch>
                            <Route exact path="/">
                                <LoginPage />
                            </Route>
                            <Route path="/user/:userId">
                                <HomePage />
                            </Route>
                            <Route path="/profile/:username">
                                <Profile />
                            </Route>
                            <Route path="/post/:postId">
                                <SinglePost />
                            </Route>
                            <Route>
                                <NotFoundPage title="Page not found" />
                            </Route>
                        </Switch>
                    </Router>
                </div>
                <footer className="footer">
                    <FlashMessage flashMessage={flashMessage} />
                    <p>
                        Designed and Coded by <a href="https://amanmaharshi.com">Aman Maharshi</a>
                    </p>
                </footer>
            </UserContext.Provider>
        </>
    )
}

export default App
