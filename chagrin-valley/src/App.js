import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Navbar />
            <Home />
            {/* <div className="container">
                <Switch>
                    <Route exact path="/" component={home} />
                    <AuthRoute exact path="/login" component={login} />
                    <AuthRoute exact path="/signup" component={signup} />
                    <Route exact path="/users/:handle" component={user} />
                    <Route
                        exact
                        path="/users/:handle/scream/:screamId"
                        component={user}
                    />
                </Switch>
            </div> */}
        </Router>
    );
}

export default App;
