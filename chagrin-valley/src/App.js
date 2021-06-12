import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import Navbar from "../src/pages/Navbar";
import Home from "../src/pages/Home";
import Footer from "../src/pages/Footer";
import BuildingBridges from "../src/pages/BuildingBridges";
import CenterClosure from "../src/pages/CenterClosure";
import ChildCare from "../src/pages/ChildCare";
import Community from "../src/pages/Community";
import Curriculum from "../src/pages/Curriculum";
import Food from "../src/pages/Food";
import Gallery from "../src/pages/Gallery";
import HowToEnroll from "../src/pages/HowToEnroll";
import Infants from "../src/pages/Infants";
import OurApproach from "../src/pages/OurApproach";
import Preschool from "../src/pages/Preschool";
import Schoolage from "../src/pages/Schoolage";
import TeacherParent from "../src/pages/TeacherParent";
import Toddler from "../src/pages/Toddler";
import Tuition from "../src/pages/Tuition";
import UpdateAgreement from "../src/pages/UpdateAgreement";
import VirtualTour from "../src/pages/VirtualTour";
import ScrollUpButton from "react-scroll-up-button";
export default function App() {
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
