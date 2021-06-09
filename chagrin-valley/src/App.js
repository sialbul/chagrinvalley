import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import BuildingBridges from "./pages/BuildingBridges";
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
            <div>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route
                        path="/buildingbridges"
                        component={BuildingBridges}
                    />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
