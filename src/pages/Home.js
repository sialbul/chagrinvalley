import React, { Component } from "react";
import InfantPhoto from "../assets/photo-gallery/infant.jpg";
import MainPhoto from "../assets/photo-gallery/Perfect.png";
import Photo1 from "../assets/photo-gallery/playdogh.jpg";
import Photo2 from "../assets/photo-gallery/infants.png";
import Photo3 from "../assets/photo-gallery/toddlers.png";
import Photo4 from "../assets/photo-gallery/preschool.png";
import Photo5 from "../assets/photo-gallery/schoolage.png";
import Toddler from "../assets/photo-gallery/toddler1.jpg";
import AOS from "aos";
import { NavLink } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import EventGallery from "../components/EventGallery";

import "aos/dist/aos.css";
import Equal from "../components/Equal";

AOS.init();

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="topPicture">
          <img className="mainphoto" src={InfantPhoto} alt="Reading a book" />
          <img
            className="perfectphoto"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-delay="150"
            src={MainPhoto}
            alt="Perfect Start for your child"
          />
        </div>
        <AboutUs />
        <div className="ourActivities">
          <p className="sectionHeader">Our Programs</p>
          <div className="ourActivitiesInfo">
            <div>
              <h2>
                Chagrin Valley Early Learning Center offers a variety of child
                care programs to meet your child care needs and we are committed
                to the development of well-rounded children.{" "}
              </h2>
              <br />
              <h2>
                Which Program Are You Interested in? Click the image for
                details.
              </h2>
            </div>
            {/* <img id="ourActivitiesPhoto" src={Photo1} alt="Activity Photo" /> */}
            <div className="ourActivitiesLink">
              <NavLink to="/infants">
                <img
                  data-aos="fade-down"
                  data-aos-delay="50"
                  src={Photo2}
                  alt="Infants"
                />
              </NavLink>
              <NavLink to="/toddler">
                <img
                  data-aos="fade-down"
                  data-aos-delay="100"
                  src={Photo3}
                  alt="Toodler"
                />
              </NavLink>
              <NavLink to="/preschool">
                <img
                  data-aos="fade-down"
                  data-aos-delay="150"
                  src={Photo4}
                  alt="Preschool"
                />
              </NavLink>
              <NavLink to="/schoolage">
                <img
                  data-aos="fade-down"
                  data-aos-delay="200"
                  src={Photo5}
                  alt="School Age"
                />
              </NavLink>
            </div>
          </div>
        </div>
        <EventGallery />

        <div className="parentSection">
          <p className="sectionHeader">What Parents Says</p>
          <div className="parentSectionInfo">
            <div className="parentSectionPhoto">
              <img
                src={Toddler}
                className="circular--square"
                alt="Toddler activities"
              />
            </div>
            <div className="parentSectionText">
              <h2>
                Chagrin Valley Early Learning Center is great! The rooms are
                bright and clean. They offer excellent activities for the kids
                and the outdoor space is huge! All of the teachers are kind and
                really care about the children. My kids look forward to going to
                Chagrin Valley Early Center everyday and I know they are well
                taken care of and learn a lot while they are there. <br />
                <br />
                Tara Klevay
                <br />
                Mother{" "}
              </h2>
            </div>

          </div>

        </div>
        <div>
          <Equal />
        </div>
      </div>
    );
  }
}
