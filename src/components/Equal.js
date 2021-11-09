import React from "react";
import equalImage from '../assets/photo-gallery/equal.jpeg';
export default function Equal() {
    return (
        <div className="equal">
            <img id="equalImage" src={equalImage} />
            <h2>
                This institution is an equal opportunity provider!
                <a href="//www.fns.usda.gov/civil-rights/usda-nondiscrimination-statement-other-fns-programs           
            " target="_blank">  to read more...</a>
            </h2>
        </div>
    )
};
