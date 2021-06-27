import React, { Component } from "react";
import InfantPhoto from "../images/infant.jpg";
import MainPhoto from "../images/Perfect.png";
import Photo1 from "../images/schoolage3.jpg";
import Photo2 from "../images/infants.png";
import Photo3 from "../images/toddlers.png";
import Photo4 from "../images/preschool.png";
import Photo5 from "../images/schoolage.png";
import Art from "../images/art.jpg";
import Toddler from "../images/toddler.jpg";
import AOS from "aos";
import { NavLink } from "react-router-dom";
import AboutUs from "../components/AboutUs";

import "aos/dist/aos.css";

AOS.init();

export default class Home extends Component {
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
                <AboutUs />
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
                            <img
                                src={Toddler}
                                class="circular--square"
                                alt=""
                            />
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
