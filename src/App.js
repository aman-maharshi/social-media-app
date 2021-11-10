import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import LoginPage from "./components/LoginPage"
import HomePage from "./components/HomePage"
import NotFoundPage from "./components/NotFoundPage"
import Header from "./components/Header"
import FlashMessage from "./components/FlashMessage"
import AllPosts from "./components/AllPosts"

import axios from "axios"
axios.defaults.baseURL = "http://localhost:8080"

function App() {
    const lsLoginResponse = JSON.parse(localStorage.getItem("loginResponse"))
    const [loginResponse, setLoginResponse] = useState(lsLoginResponse ? lsLoginResponse : null)
    const [flashMessage, setFlashMessage] = useState(null)

    useEffect(() => {
        localStorage.setItem("loginResponse", JSON.stringify(loginResponse))
    }, [loginResponse])

    return (
        <>
            <div className="appWrapper">
                <Router>
                    <header className="header">
                        <Header loginResponse={loginResponse} setLoginResponse={setLoginResponse} setFlashMessage={setFlashMessage} />
                    </header>
                    <Switch>
                        <Route exact path="/">
                            <LoginPage setFlashMessage={setFlashMessage} />
                        </Route>
                        <Route path="/user/:userId">
                            <HomePage loginResponse={loginResponse} setFlashMessage={setFlashMessage} />
                        </Route>
                        <Route path="/myposts">
                            <AllPosts loginResponse={loginResponse} setFlashMessage={setFlashMessage} />
                        </Route>
                        <Route>
                            <NotFoundPage title="Page not found" />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <footer className="footer">
                <FlashMessage flashMessage={flashMessage} setFlashMessage={setFlashMessage} />
                <p>
                    Designed and Coded by <a href="https://amanmaharshi.com">Aman Maharshi</a>
                </p>
            </footer>
        </>
    )
}

export default App
