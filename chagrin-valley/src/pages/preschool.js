import React from "react";
import PreschoolPhoto from "../images/preschool.png";
import PreschoolPhoto2 from "../images/paintkid.jpg";
import PreschoolPhoto3 from "../images/outside.jpg";

export default function Preschool() {
    return (
        <div>
            <container>
                <div id="infantContainer">
                    <p class="infantHeaderSchool"> Pre-School </p>
                    <div id="infantContainer2">
                        <div id="infantFirstPart">
                            <img
                                id="infantBaby3"
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
                                id="infantBaby3"
                                src={PreschoolPhoto3}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                            />
                        </div>
                        <div>
                            <img
                                id="infantBaby2"
                                src={PreschoolPhoto}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                            />
                        </div>
                        <div>
                            <p data-aos="fade-down" data-aos-duration="2000">
                                <span id="headSmall">
                                    <i
                                        class="fa fa-clock-o"
                                        aria-hidden="true"
                                        fa-lg></i>
                                    Sample of the Daily Schedule
                                </span>
                                <br />
                                <div id="schedule">
                                    6-7 Quiet play
                                    <br />
                                    7-8:30 Breakfast/Quiet Free Play
                                    <br />
                                    8:30-9:35 Centers- choice time
                                    <br />
                                    9:35-9:55 Snack
                                    <br />
                                    9:55-10:20 Circle Time Activities- including
                                    music & movement
                                    <br />
                                    10:20-11 Centers- choice time & small groups
                                    <br />
                                    11-11:45 Outside / Gross Motor
                                    <br />
                                    11:45-12:15 Lunch
                                    <br />
                                    12:15-2:30 Quiet Cot Play/Rest time
                                    <br />
                                    2:30-3 Wake up/Quiet play
                                    <br />
                                    3-4 Centers-choice time / snack
                                    <br />
                                    4-4:45 Outside / Gross Motor
                                    <br />
                                    4:45-5:15 Story time
                                    <br />
                                    5:15-6:15 Centers-choice time
                                    <br />
                                    6:15-6:45 Table toys/Get ready to go home
                                </div>
                            </p>{" "}
                        </div>
                    </div>
                </div>
            </container>
        </div>
    );
}
