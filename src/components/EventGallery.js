import React from "react";

import Donuts from "../assets/photo-gallery/donuts.jpg";
import Garden from "../assets/photo-gallery/garden.jpg";
import Graduation from "../assets/photo-gallery/graduation.jpg";
import Muffins from "../assets/photo-gallery/muffins.jpg";
import Stem from "../assets/photo-gallery/stem.jpg";
import Thanksgiving from "../assets/photo-gallery/thanksgiving.jpg";
import Halloween from "../assets/photo-gallery/halloween.jpg";
import Lego from "../assets/photo-gallery/puzzle.jpg";

export default function EventGallery() {
    return (
        <div>
            <div className="ourEventGallery">
                <p className="sectionHeader">Our Event Gallery</p>
                <div className="eventGalleryCards">
                   
                    <div className="cardEvent">
                        <img className="eventGallery" src={Garden} alt="Garden Party" />
                        <h2>Garden Party</h2>
                    </div>
                    <div className="cardEvent">
                        <img className="eventGallery" src={Graduation} alt="Graduation" />
                        <h2>Graduation</h2>
                    </div>

                    <div className="cardEvent">
                        <img className="eventGallery" src={Stem} alt="Stem Festival" />
                        <h2>Stem Festival</h2>
                    </div>
                    <div className="cardEvent">
                        <img
                            className="eventGallery"
                            src={Thanksgiving}
                            alt="Thanksgiving"
                        />
                        <h2>Thanksgiving Feast</h2>
                    </div>
                    <div className="cardEvent">
                        <img className="eventGallery" src={Halloween} alt="Holidays" />
                        <h2>Holidays</h2>
                    </div>
                    <div className="cardEvent">
                        <img className="eventGallery" src={Lego} alt="Lego Robotics" />
                        <h2>Lego Robotics</h2>
                    </div> 
                    <div className="cardEvent">
                        <img className="eventGallery" src={Donuts} alt="Muffins with Dad" />
                        <h2>Muffins with Dad</h2>
                    </div>
                    <div className="cardEvent">
                        <img className="eventGallery" src={Muffins} alt="Donuts with Mom" />
                        <h2>Donuts with Mom</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
