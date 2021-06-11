import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import BuildingBridges from "./pages/BuildingBridges";
import CenterClosure from "./pages/CenterClosure";
import ChildCare from "./pages/ChildCare";
import Community from "./pages/Community";
import Curriculum from "./pages/Curriculum";
import Food from "./pages/Food";
import Gallery from "./pages/Gallery";
import HowToEnroll from "./pages/HowToEnroll";
import Infants from "./pages/Infants";
import OurApproach from "./pages/OurApproach";
import Preschool from "./pages/Preschool";
import Schoolage from "./pages/Schoolage";
import TeacherParent from "./pages/TeacherParent";
import Toddler from "./pages/Toddler";
import Tuition from "./pages/Tuition";
import UpdateAgreement from "./pages/UpdateAgreement";
import VirtualTour from "./pages/VirtualTour";
import ScrollUpButton from "react-scroll-up-button";

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};
function App() {
    return (
        <Router>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path="/buildingbridges"
                        component={BuildingBridges}
                    />
                    <Route
                        exact
                        path="/centerclosure"
                        component={CenterClosure}
                    />
                    <Route exact path="/childcare" component={ChildCare} />
                    <Route exact path="/community" component={Community} />
                    <Route exact path="/curriculum" component={Curriculum} />
                    <Route exact path="/food" component={Food} />
                    <Route exact path="/footer" component={Footer} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/howtoenroll" component={HowToEnroll} />
                    <Route exact path="/infants" component={Infants} />
                    <Route exact path="/ourapproach" component={OurApproach} />
                    <Route exact path="/preschool" component={Preschool} />
                    <Route exact path="/schoolage" component={Schoolage} />
                    <Route
                        exact
                        path="/teacherparent"
                        component={TeacherParent}
                    />
                    <Route exact path="/toddler" component={Toddler} />
                    <Route exact path="/tuition" component={Tuition} />
                    <Route
                        exact
                        path="/updateagreement"
                        component={UpdateAgreement}
                    />
                    <Route exact path="/virtualtour" component={VirtualTour} />
                </Switch>
            </div>
            <Footer />
            <ScrollUpButton />
        </Router>
    );
}

export default App;
