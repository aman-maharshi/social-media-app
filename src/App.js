import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login"
import Home from "./components/Home"
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
                            <Login setLoginResponse={setLoginResponse} />
                        </Route>
                        <Route path="/user/:id">
                            <Home loginResponse={loginResponse} setLoginResponse={setLoginResponse} />
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
