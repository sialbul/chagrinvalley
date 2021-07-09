import React from "react";
import July from "../assets/photo-gallery/4thofjuly.png";
import Labor from "../assets/photo-gallery/labor.png";
import Thanks from "../assets/photo-gallery/turkey.png";
import Thanks2 from "../assets/photo-gallery/turkey1.png";
import Santa from "../assets/photo-gallery/santaclaus.png";
import Christmas from "../assets/photo-gallery/christmas.png";
import Newyear from "../assets/photo-gallery/newyear.png";
import Flag from "../assets/photo-gallery/usa-flag.png";
import { NavLink } from "react-router-dom";

export default function CenterClosure() {
    return (
        <div id="galleryContainer">
            <p className="sectionHeader">Center Closure</p>
            <br />
            <br />
            <h2> The Center will be closed for the following Holidays:</h2>
            <br />
            <div id="centerClosureList">
                <img src={Newyear} className="icon" />
                New Year’s Day
                <br />
                <img src={Flag} className="icon" />
                Memorial Day
                <br />
                <img src={July} className="icon" />
                4th of July
                <br />
                <img src={Labor} className="icon" />
                Labor Day
                <br />
                <img src={Thanks} className="icon" />
                Thanksgiving Day
                <br />
                <img src={Thanks2} className="icon" />
                Day after Thanksgiving
                <br />
                <img src={Santa} className="icon" />
                Close early Christmas Eve
                <br />
                <img src={Christmas} className="icon" />
                Christmas Day <br />
                Inclement weather closures will be announced through the REMIND
                app and also posted on FOX 8 News.
            </div>
            <div>
                <p className="sectionHeaderPrograms">
                    <NavLink to="/gallery">
                        {" "}
                        Gallery{" "}
                        <i
                            class="fa fa-angle-double-right"
                            aria-hidden="true"></i>
                    </NavLink>
                </p>
            </div>
        </div>
    );
}
