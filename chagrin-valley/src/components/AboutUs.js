import React, { Component } from "react";
import AboutUsPhoto from "../images/schoolage.jpg";

export default class AboutUs extends Component {
    constructor() {
        super();
        this.state = {
            header: document.getElementById("headerAboutUs"),
            parargaf: document.getElementById("parargafAboutUs"),
        };
        this.changeText1 = this.changeText1.bind(this);
        this.changeText2 = this.changeText2.bind(this);
        this.changeText3 = this.changeText3.bind(this);
        this.changeText4 = this.changeText4.bind(this);
    }
    //About us section
    componentDidMount() {
        this.setState({
            header: "Your Kids is Our Future ",
            parargaf:
                "Cleveries envisions a diverse community in which kids are respected and heard by a collaborative support system of organized and trained adults, who are teachers and friends at the same time and help kids realize their potential.",
        });
    }
    changeText1 = () => {
        this.setState({
            header: "A-Your Kids is Our Future ",
            parargaf:
                "Cleveries envisions a diverse community in which kids are respected and heard by a collaborative support system of organized and trained adults, who are teachers and friends at the same time and help kids realize their potential.",
        });
    };

    changeText2 = () => {
        this.setState({
            header: "1-Your Kids is Our Future ",
            parargaf:
                "1-Cleveries envisions a diverse community in which kids are respected and heard by a collaborative support system of organized and trained adults, who are teachers and friends at the same time and help kids realize their potential.",
        });
    };

    changeText3 = () => {
        this.setState({
            header: "2-Your Kids is Our Future ",
            parargaf:
                "2-Cleveries envisions a diverse community in which kids are respected and heard by a collaborative support system of organized and trained adults, who are teachers and friends at the same time and help kids realize their potential.",
        });
    };
    changeText4 = () => {
        this.setState({
            header: "3-Your Kids is Our Future ",
            parargaf:
                "3-Cleveries envisions a diverse community in which kids are respected and heard by a collaborative support system of organized and trained adults, who are teachers and friends at the same time and help kids realize their potential.",
        });
    };
    render() {
        return (
            <div>
                <div className="aboutUs">
                    <p className="sectionHeader">Little More About Us</p>
                    <div className="aboutLink">
                        <ul>
                            <li
                                className="aboutUsLink"
                                onClick={this.changeText1}>
                                MISSION
                            </li>
                            <li
                                className="aboutUsLink"
                                onClick={this.changeText2}>
                                VISION
                            </li>
                            <li
                                className="aboutUsLink"
                                onClick={this.changeText3}>
                                GOALS
                            </li>
                            <li
                                className="aboutUsLink"
                                onClick={this.changeText4}>
                                BELIEFS
                            </li>
                        </ul>
                    </div>
                    <div id="aboutUsInfo">
                        <div className="aboutUsInfoParargaf">
                            <h2 id="headerAboutUs">{this.state.header}</h2>
                            <p id="parargafAboutUs">{this.state.parargaf}</p>
                            <button className="learnMoreButton2">
                                LEARN MORE
                            </button>
                        </div>
                        <div className="aboutUsInfoPicture">
                            <img id="aboutUsInfoPhotos" src={AboutUsPhoto} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
