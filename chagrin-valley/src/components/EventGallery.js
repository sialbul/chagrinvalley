import React from "react";
import Art from "../images/art.jpg";

export default function EventGallery() {
    return (
        <div>
            <div className="ourEventGallery">
                <p className="sectionHeader">Our Event Gallery</p>
                <div className="eventGalleryCards">
                    <div className="card">
                        <img className="eventGallery" src={Art} alt="" />
                        <h2>Event1</h2>
                    </div>
                    <div className="card">
                        <img className="eventGallery" src={Art} alt="" />
                        <h2>Event2</h2>
                    </div>
                    <div className="card">
                        <img className="eventGallery" src={Art} alt="" />
                        <h2>Event3</h2>
                    </div>
                    <div className="card">
                        <img className="eventGallery" src={Art} alt="" />
                        <h2>Event4</h2>
                    </div>
                    <div className="card">
                        <img className="eventGallery" src={Art} alt="" />
                        <h2>Event5</h2>
                    </div>
                    <div className="card">
                        <img className="eventGallery" src={Art} alt="" />
                        <h2>Event6</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
