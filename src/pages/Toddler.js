import React from "react";
import ToddlerPhoto from "../assets/photo-gallery/books.jpg";
import ToddlerPhoto2 from "../assets/photo-gallery/toddlers.png";
import { NavLink } from "react-router-dom";

export default function Toddler() {
    return (
        <div>
            <container>
                <div id="infantContainer">
                    <p className="infantHeaderToddler"> Toddler </p>
                    <div id="infantContainer2">
                        <div id="infantFirstPart">
                            <img
                                id="programsPagePhoto1"
                                src={ToddlerPhoto}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                            />
                        </div>
                        <div>
                            <p data-aos="fade-down" data-aos-duration="2000">
                                <span id="headSmall">TODDLER I & II</span>
                                <br />
                                Toddlers, with their new found independence, are
                                ready for a more structured learning
                                environment. At this age, toddlers use all of
                                their senses to explore their world. <br />
                                We at Chagrin Valley ELC build a learning
                                environment with your child that gives them the
                                tools necessary to further their independence.
                                With loving guidance, stimulating activities and
                                a structured curriculum, our program encourages
                                toddlers to use their energy in a positive and
                                productive manners.
                            </p>{" "}
                        </div>
                        <div>
                            <p data-aos="fade-down" data-aos-duration="2000">
                                <span id="headSmall">
                                    <i
                                        className="fa fa-clock-o"
                                        aria-hidden="true"
                                        fa-lg></i>
                                    Sample of the Daily Schedule
                                </span>
                                <br />
                                <div id="schedule">
                                    8:10 - 8:15 Get ready for breakfast
                                    <br />
                                    8:15 - 8:45 Breakfast time
                                    <br />
                                    8:45 - 9:00 Diaper changes
                                    <br />
                                    9:00 - 9:10 Circle time
                                    <br />
                                    9:10 - 9:25 Art time
                                    <br />
                                    9:25 - 9:45 Get ready to go outside
                                    <br />
                                    9:45 - 10:45 Outside time
                                    <br />
                                    10:45 -11:10 Diaper changes
                                    <br />
                                    11:10 - 11:15 Get ready for lunch
                                    <br />
                                    11:15 - 11:45 Lunch time
                                    <br />
                                    3:30-4:30 Indoor Play
                                    <br />
                                    11:50 - 12:05 Diaper changes
                                    <br />
                                    12:10 - 12:15 Get ready for nap
                                    <br />
                                    12:15 - 2:15 Nap time
                                    <br />
                                    2:20 - 2:35 Diaper changes
                                    <br />
                                    2:40 - 2:50 Get snack ready
                                    <br />
                                    2:50 - 3:10 Snack time
                                    <br />
                                    3:10 - 3:20 Get ready for outside
                                    <br />
                                    3:20 - 4:00 Outside time
                                    <br />
                                    4:00 - 4:15 Diaper changes
                                    <br />
                                    4:15 - 5:30 Waiting to go home (free play)
                                    <br />
                                    5:30 Get Shoes on to go home!!
                                </div>
                            </p>{" "}
                        </div>
                        <div id="infantFirstPart">
                            <img
                                id="programsPagePhoto2"
                                src={ToddlerPhoto2}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="sectionHeaderPrograms">
                            <NavLink to="/preschool">
                                {" "}
                                Pre-School
                                <i
                                    className="fa fa-angle-double-right"
                                    aria-hidden="true"></i>
                            </NavLink>
                        </p>
                    </div>
                </div>
            </container>
        </div>
    );
}
