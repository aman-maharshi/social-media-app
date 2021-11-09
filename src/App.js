import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import LoginPage from "./components/LoginPage"
import HomePage from "./components/HomePage"
import NotFoundPage from "./components/NotFoundPage"
import Header from "./components/Header"

import axios from "axios"
axios.defaults.baseURL = "http://localhost:8080"

function App() {
    const lsLoginResponse = JSON.parse(localStorage.getItem("loginResponse"))
    const [loginResponse, setLoginResponse] = useState(lsLoginResponse ? lsLoginResponse : null)

    useEffect(() => {
        localStorage.setItem("loginResponse", JSON.stringify(loginResponse))
    }, [loginResponse])

    return (
        <>
            <div className="appWrapper">
                <Router>
                    <header className="header">
                        <Header loginResponse={loginResponse} setLoginResponse={setLoginResponse} />
                    </header>
                    <Switch>
                        <Route exact path="/">
                            <LoginPage setLoginResponse={setLoginResponse} />
                        </Route>
                        <Route path="/user/:userId">
                            <HomePage loginResponse={loginResponse} setLoginResponse={setLoginResponse} />
                        </Route>
                        <Route>
                            <NotFoundPage title="Page not found" />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <footer className="footer">
                <p>
                    Designed and Coded by <a href="https://amanmaharshi.com">Aman Maharshi</a>
                </p>
            </footer>
        </>
    )
}

export default App
