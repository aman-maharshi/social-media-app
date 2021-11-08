import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import HomePage from "./components/HomePage"
import NotFound from "./components/NotFound"

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
                    <Switch>
                        <Route exact path="/">
                            <LoginPage setLoginResponse={setLoginResponse} />
                        </Route>
                        <Route path="/user/:id">
                            <HomePage loginResponse={loginResponse} setLoginResponse={setLoginResponse} />
                        </Route>
                        <Route>
                            <NotFound />
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
