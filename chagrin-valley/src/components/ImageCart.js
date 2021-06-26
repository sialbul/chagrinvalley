import React, { Component } from "react";
import IceSkate from "./../assets/photo-gallery/iceskate.JPG";
import Infant1 from "./../assets/photo-gallery/infant-1.jpeg";
import Infant2 from "./../assets/photo-gallery/infant-2.jpeg";
import Infant3 from "./../assets/photo-gallery/infant-3.jpg";
import Outside1 from "./../assets/photo-gallery/outside.jpeg";
import Outside2 from "./../assets/photo-gallery/outside-2.jpeg";
import Outside3 from "./../assets/photo-gallery/outside3.jpeg";
const imgUrls = [
    { title: "Infant1", id: "1" },
    { title: "Infant2", id: "2" },
    { title: "Infant3", id: "3" },
    { title: "IceSkate", id: "4" },
    { title: "Outside1", id: "5" },
    { title: "Outside2", id: "6" },
    { title: "Outside3", id: "7" },
];

export default class ImageCart extends Component {
    render() {
        return (
            <div className="gallery-container">
                <div className="projects-header">My Projects</div>
                {imgUrls.map({ id, title })}
            </div>
        );
    }
}
