import React from "react";
import PreschoolPhoto from "../assets/photo-gallery/preschool.png";
import PreschoolPhoto2 from "../assets/photo-gallery/paintkid.jpg";
import PreschoolPhoto3 from "../assets/photo-gallery/outside.jpg";
import { NavLink } from "react-router-dom";

export default function Preschool() {
    return (
        <div>
            <container>
                <div id="infantContainer">
                    <p className="infantHeaderSchool"> Pre-School </p>
                    <div id="infantContainer2">
                        <div id="infantFirstPart">
                            <img
                                id="programsPagePhoto3"
                                src={PreschoolPhoto2}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                            />
                        </div>
                        <div>
                            <p data-aos="fade-down" data-aos-duration="2000">
                                <span id="headSmall">Pre-School </span> <br />
                                Your child is changing and growing so quickly
                                and is now getting ready for reading, writing,
                                math, language and much more. Our program
                                prepares your child for school through fun and
                                creative activities.
                                <br /> Our daily curriculum introduces your
                                child to learning through science experiments,
                                art projects and many more hands-on activities.
                                We at Chagrin Valley ELC not only prepares your
                                child academically but also socially and
                                emotionally through the development of self-help
                                skills and creative play.
                            </p>{" "}
                        </div>

                        <div>
                            <p data-aos="fade-down" data-aos-duration="2000">
                                <span id="headSmall">Pre-Kindergarten</span>
                                <br />
                                Reading readiness, mathematical concepts,
                                science and nature study, and art projects are
                                just some of the activities that go on in the
                                daily school lives of our pre-kindergarteners.
                                <br />
                                Pre-K children also enjoy learning self help
                                skills such as housekeeping and dress up through
                                play.
                            </p>{" "}
                        </div>
                        <div id="infantFirstPart">
                            <img
                                id="programsPagePhoto1"
                                src={PreschoolPhoto3}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                            />
                        </div>
                        <div id="infantFirstPart">
                            <img
                                id="programsPagePhoto2"
                                src={PreschoolPhoto}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                            />
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
                                    6-7 Arrival, quiet play free choice
                                    activities
                                    <br />
                                    7-8:30 Breakfast/ Quiet Free Play
                                    <br />
                                    8:30-9:00 Table toys/ Partner play
                                    <br />
                                    9:00-9:15 Circle/ Group time activities
                                    including calendar, attendance
                                    <br />
                                    9:15-10:45 Center: Choice time/ small group
                                    activities/ arts & crafts
                                    <br />
                                    10:45-11 Group time/ potty time/ books
                                    <br />
                                    11-11:55 Outside/ Gross Motor
                                    <br />
                                    11:55-12:30 Handwashing & Lunch
                                    <br />
                                    12:30-2:45 Potty/ Quiet Cot Play/ Rest time
                                    <br />
                                    2:45-3:15 Wake up/ Afternoon readiness
                                    activity
                                    <br />
                                    3:15-3:35 Handwashing & snack
                                    <br />
                                    3:35-4:00 Puzzles / Group time
                                    <br />
                                    4:00-4:30 Outside / Gross motor
                                    <br />
                                    4:30-5:15 Centers-choice time
                                    <br />
                                    5:15-5:45 Table toys/ Coloring
                                    <br />
                                    6:15-6:45 Table toys/ Get ready to go home
                                </div>
                            </p>{" "}
                        </div>
                    </div>
                    <div>
                        <p className="sectionHeaderPrograms">
                            <NavLink to="/schoolage">
                                {" "}
                                School Age
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
