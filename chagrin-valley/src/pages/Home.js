import React, { Component } from "react";
import InfantPhoto from "../images/infant.jpg";
import MainPhoto from "../images/Perfect.png";
import AboutUsPhoto from "../images/schoolage.jpg";
import Photo1 from "../images/schoolage3.jpg";
import Photo2 from "../images/infants.png";
import Photo3 from "../images/toddlers.png";
import Photo4 from "../images/preschool.png";
import Photo5 from "../images/schoolage.png";
import Art from "../images/art.jpg";
import Toddler from "../images/toddler.jpg";
import AOS from "aos";
import { NavLink } from "react-router-dom";

import "aos/dist/aos.css";

AOS.init();

export default class Home extends Component {
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
                <div className="topPicture">
                    <img className="mainphoto" src={InfantPhoto} />
                    <img
                        className="perfectphoto"
                        data-aos="zoom-in-left"
                        data-aos-duration="1000"
                        data-aos-delay="150"
                        src={MainPhoto}
                    />
                </div>
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
                <div className="ourActivities">
                    <p className="sectionHeader">Our Programs</p>
                    <div className="ourActivitiesInfo">
                        <img id="ourActivitiesPhoto" src={Photo1} alt="" />
                        <div className="ourActivitiesLink">
                            <NavLink to="/infants">
                                <img
                                    data-aos="fade-down"
                                    data-aos-delay="50"
                                    src={Photo2}
                                    alt=""
                                />
                            </NavLink>
                            <NavLink to="/toddler">
                                <img
                                    data-aos="fade-down"
                                    data-aos-delay="100"
                                    src={Photo3}
                                    alt=""
                                />
                            </NavLink>
                            <NavLink to="/preschool">
                                <img
                                    data-aos="fade-down"
                                    data-aos-delay="150"
                                    src={Photo4}
                                    alt=""
                                />
                            </NavLink>
                            <NavLink to="/schoolage">
                                <img
                                    data-aos="fade-down"
                                    data-aos-delay="200"
                                    src={Photo5}
                                    alt=""
                                />
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="ourEventGallery">
                    <p className="sectionHeader">Our Event Gallery</p>
                    <div className="eventGalleryCards">
                        <img className="eventGallery" src={Art} alt="" />
                        <img className="eventGallery" src={Art} alt="" />
                        <img className="eventGallery" src={Art} alt="" />
                        <img className="eventGallery" src={Art} alt="" />
                        <img className="eventGallery" src={Art} alt="" />
                        <img className="eventGallery" src={Art} alt="" />
                    </div>
                </div>

                <div className="parentSection">
                    <p className="sectionHeader">What Parents Says</p>
                    <div className="parentSectionInfo">
                        <div className="parentSectionPhoto">
                            <img src={Toddler} alt="" />
                        </div>
                        <div className="parentSectionText">
                            <p>
                                Cleveries has everything for making productive
                                and interesting educational environment for
                                kids. The school follows innovational approaches
                                in education. High-quality books and classroom
                                equipment promote effective work of pupils.
                                Teachers are very kind and careful. <br />
                                <br />
                                KIM ADAMS <br />
                                Mother{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
