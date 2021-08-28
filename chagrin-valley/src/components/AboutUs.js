import React, { Component } from "react";
import AboutUsPhoto from "../assets/photo-gallery/schoolage.jpg";
import { NavLink } from "react-router-dom";

export default class AboutUs extends Component {
    constructor() {
        super();
        this.state = {
            header: document.getElementById("headerAboutUs"),
            parargaf: document.getElementById("parargafAboutUs")
        };
        this.changeText1 = this.changeText1.bind(this);
        this.changeText2 = this.changeText2.bind(this);
        this.changeText3 = this.changeText3.bind(this);
        this.changeText4 = this.changeText4.bind(this);
    }
    //About us section
    componentDidMount() {
        this.setState({
            header: "Your Kids is Our Future",
            parargaf:
                "Chagrin Valley Early Learning Center envisions a diverse community in which kids are respected and heard by a collaborative support system of organized and trained adults, who are teachers and friends at the same time and help kids realize their potential."
        });
    }
    changeText1 = () => {
        this.setState({
            header: "Encouraging Educational Experience",
            parargaf:
                "The mission of CVELC is to provide a safe, stimulating, and caring environment for children ages six weeks to 12 years. Our focus is to provide an encouraging educational experience, promoting social, emotional, physical, and cognitive development. Committed to the families we serve, we strive to give parents complete peace of mind, while being seen as a shining example of what a quality childcare center should be."
        });
    };

    changeText2 = () => {
        this.setState({
            header: "Safe, Engaged, Educated, and Smiling",
            parargaf:
                "The ultimate vision we have for our facility is twofold, and rooted in both the present and the future. For the present, our goal is for parents to feel good about their childcare choice, and that the children are safe, engaged, educated, and smiling. And for the future, we want these children to warmly look back at their experience with us, and see it as a cherished part of their childhood."
        });
    };

    changeText3 = () => {
        this.setState({
            header: "The Different Areas of Children’s Development ",
            parargaf:
                "The goal of Chagrin Valley Early Center is to provide all children enrolled with a developmentally appropriate program that emphasizes the different areas of children’s development, which are physical, cognitive, emotional, and social. Our classrooms are set up with a “hands-on” approach and provide opportunities for both self-directed and teacher directed activities. Children are given choices as to the activities they participate in. Teachers use observations, interest, and abilities of children as well as individual needs to determine curriculum."
        });
    };
    changeText4 = () => {
        this.setState({
            header: "Individual Learning Experiences",
            parargaf:
                "At Chagrin Valley Early Learning Center, we believe that parents, as first educators of their children, lay the foundation for future learning.  Early childhood education is an extension of such foundations and therefore we aim to provide an environment which fosters the cognitive, physical, social, and emotional development of the individual child.  Through practice, we aim to promote equitable learning outcomes for children, based on these stages of development and learning.Through regular communication and consultation with families, we aim to develop individual learning experiences that incorporate the strengths and interests of the children, in an environment that promotes active learning and development.  Learning is achieved through play, and it provides children with opportunities to see and understand the world through their eyes and experiences. "
        });
    };
    render() {
        return (
            <div>
                <div className="aboutUs">
                    <p className="sectionHeader"> Little More About Us </p>{" "}
                    <div className="aboutLink">
                        <ul>
                            <li
                                className="aboutUsLink"
                                onClick={this.changeText1}>
                                MISSION{" "}
                            </li>{" "}
                            <li
                                className="aboutUsLink"
                                onClick={this.changeText2}>
                                VISION{" "}
                            </li>{" "}
                            <li
                                className="aboutUsLink"
                                onClick={this.changeText3}>
                                GOALS{" "}
                            </li>{" "}
                            <li
                                className="aboutUsLink"
                                onClick={this.changeText4}>
                                BELIEFS{" "}
                            </li>{" "}
                        </ul>{" "}
                    </div>{" "}
                    <div id="aboutUsInfo">
                        <div className="aboutUsInfoParargaf">
                            <h2 id="headerAboutUs"> {this.state.header} </h2>{" "}
                            <p id="parargafAboutUs"> {this.state.parargaf} </p>{" "}
                            <button className="learnMoreButton2">
                                <NavLink to="/howtoenroll">LEARN MORE </NavLink>
                            </button>{" "}
                        </div>{" "}
                        <div className="aboutUsInfoPicture">
                            <img id="aboutUsInfoPhotos" src={AboutUsPhoto} />{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
            </div>
        );
    }
}
