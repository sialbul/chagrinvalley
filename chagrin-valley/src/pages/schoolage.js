import React from "react";
import PreschoolPhoto3 from "../images/letters.jpg";
import PreschoolPhoto2 from "../images/crayon.jpg";
import PreschoolPhoto4 from "../images/schoolage.jpg";
import SummerFlyer from "../images/summerFlyer.pdf";
import { NavLink } from "react-router-dom";

export default function Schoolage() {
    return (
        <div>
            <container>
                <div id="infantContainer">
                    <p class="infantHeaderSchoolAge"> School Age </p>
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
                                <span id="headSmall">School Age</span> <br />
                                <h3 className="schoolAgeHeader">
                                    Before & After School Care
                                </h3>
                                <br /> Your child will practice how to write
                                their name and you’ll start to see it all over
                                their artwork! We’ll also work on our ABCs,
                                using letters and drawings.
                                <br />
                                At CV Early Learning Centers, we have Before and
                                After School Care. We provide transportation for
                                most of the schools ( What Geauga, Kenston,
                                Chagrin Falls). You can drop your child in the
                                morning and pick up in the afternoon with
                                affordable rates. need a chance to wind down
                                after school.
                                <br />
                                Chagrin Valley offers school agers a calm and
                                safe place after school. There are plenty of
                                activities to help them expel some of their
                                excess energy. There are also trained teachers
                                available for plenty of tutoring or homework
                                help. This is no ordinary after school program.
                            </p>{" "}
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
                                <h3 className="schoolAgeHeader">Before</h3>
                                <div id="schedule">
                                    6-7 Quiet play
                                    <br />
                                    7-7:30 Breakfast/ Free Play
                                    <br />
                                    7:30-8:15 Centers- Choice time /Busses
                                    <br />
                                </div>
                                <h3 className="schoolAgeHeader">After</h3>

                                <div id="schedule">
                                    3:20-3:50 Arrival / Centers / Choice time
                                    <br />
                                    3:50-4:00 Handwashing
                                    <br />
                                    4:00-4:20 Snack & Chat
                                    <br />
                                    4:20-4:50 Homework/Quite Time/Books,
                                    Puzzles, Drawing
                                    <br />
                                    4:50-5:30 Outside / Gross Motor
                                    <br />
                                    5:30-6:00 Group Activities
                                    <br />
                                    6:00-6:45 Table Toys/Clean up/Get ready to
                                    go home
                                </div>
                            </p>{" "}
                        </div>
                        <div id="infantFirstPart">
                            <img
                                id="programsPagePhoto2"
                                src={PreschoolPhoto4}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                            />
                        </div>
                        <div id="infantFirstPart">
                            <img
                                id="programsPagePhoto1"
                                src={PreschoolPhoto3}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                            />
                        </div>
                        <div>
                            <p data-aos="fade-down" data-aos-duration="2000">
                                <span id="headSmall">Summer Programs</span>
                                <br />
                                CVELC’s Summer Program provides a camp
                                atmosphere for all ages through the summer
                                months. All campers will enjoy going on weekly
                                field trips that are related to our weekly
                                themes and enjoy in-house field trips such as
                                Jungle Terry, Balloon man, Face painting and
                                picnics. Whether they are learning or playing,
                                we guarantee that we will have a lot of fun!
                            </p>{" "}
                            <button id="SummerFlyer">
                                <a href={SummerFlyer} target="_blank">
                                    {" "}
                                    To Get Summer Programs Flyer
                                </a>
                            </button>
                        </div>
                        <div>
                            <p data-aos="fade-down" data-aos-duration="2000">
                                <span id="headSmall">
                                    <i
                                        class="fa fa-clock-o"
                                        aria-hidden="true"
                                        fa-lg></i>
                                    Sample of the Daily Summer School Schedule
                                </span>
                                <br />
                                <div id="schedule">
                                    6:00-8:15 Quiet play
                                    <br />
                                    8:15-8:45 Breakfast/ Quiet Free Play
                                    <br />
                                    8:15-9:00 Free choice
                                    <br />
                                    9:00-9:10 Morning meeting
                                    <br />
                                    9:10-9:45 Arts & Crafts
                                    <br />
                                    9:45-10:15 Science activities & Experiments
                                    <br />
                                    10:15-11:30 Outside/ Large motor*
                                    <br />
                                    11:30-12:15 Centers/small groups-CINCY
                                    ACTIVITIES
                                    <br />
                                    12:15-1:00 Lunch
                                    <br />
                                    1:00-1:15 Story time read aloud
                                    <br />
                                    1:15-2:30 Outside*
                                    <br />
                                    2:30-3:30 Homework/ Quiet Play / Group
                                    Activities
                                    <br />
                                    3:30-3:45 Afternoon Meeting
                                    <br />
                                    3:45-4:15 Afternoon Snack & Chat
                                    <br />
                                    4:15-4:40 Book Time/ Puzzle Time
                                    <br />
                                    4:40-5:15 Outside*
                                    <br />
                                    5:15-5:45 Table toys
                                    <br />
                                    5:45-6:30 Limited Centers
                                    <br />
                                    6:30-6:45 Clean up/Get ready to go home
                                    <br />
                                    *times can change according to weather
                                </div>
                            </p>{" "}
                        </div>
                        <div id="infantFirstPart">
                            <img
                                id="programsPagePhoto2"
                                src={PreschoolPhoto4}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="sectionHeaderPrograms">
                            <NavLink to="/curriculum">
                                {" "}
                                Creative Curriculum
                                <i
                                    class="fa fa-angle-double-right"
                                    aria-hidden="true"></i>
                            </NavLink>
                        </p>
                    </div>
                </div>
            </container>
        </div>
    );
}
