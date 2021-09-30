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
                            <span data-aos="fade-down" data-aos-duration="2000">
                                <span id="headSmall">
                                    <i
                                        className="fa fa-clock-o"
                                        aria-hidden="true"
                                        fa-lg></i>
                                    Sample of the Daily Schedule
                                </span>
                                <br />
                                <div>
                                    <table id="pageTable">
                                        <body>
                                            <tr>
                                                <th>6:00 - 7:00</th>
                                                <td> Arrival, quiet play free choice
                                                    activities </td>
                                            </tr>

                                            <tr>
                                                <th>7:00 - 8:30</th>
                                                <td>Breakfast/ Quiet Free Play</td>
                                            </tr>
                                            <tr>
                                                <th>8:30 - 9:00</th>
                                                <td>Table toys/ Partner play</td>
                                            </tr>
                                            <tr>
                                                <th>9:00 - 9:15</th>
                                                <td>Circle/ Group time activities including<br/> calendar, attendance</td>
                                            </tr>
                                            <tr>
                                                <th>9:15 - 10:45</th>
                                                <td>Center: Choice time/ small group activities/<br/> arts & crafts</td>
                                            </tr>
                                            <tr>
                                                <th>10:45 - 11:00   </th>
                                                <td>Group time/ potty time/ books</td>
                                            </tr>
                                            <tr>
                                                <th>11:00 - 11:55 </th>
                                                <td>Outside/ Gross Motor</td>
                                            </tr>
                                            <tr>
                                                <th>11:55 - 12:30</th>
                                                <td> Handwashing & Lunch</td>
                                            </tr>
                                            <tr>
                                                <th>12:30 - 2:45</th>
                                                <td>Potty/ Quiet Cot Play/ Rest time</td>
                                            </tr>
                                            <tr>
                                                <th>2:45 - 3:15</th>
                                                <td>Wake up/ Afternoon readiness activity</td>
                                            </tr>
                                            <tr>
                                                <th>3:15 - 3:35 </th>
                                                <td>Handwashing & snack</td>
                                            </tr>
                                            <tr>
                                                <th>3:35 - 4:00</th>
                                                <td>Puzzles / Group time</td>
                                            </tr>
                                            <tr>
                                                <th>4:00 - 4:30</th>
                                                <td>Outside / Gross motor</td>
                                            </tr>
                                            <tr>
                                                <th>4:30 - 5:15</th>
                                                <td>Centers-choice time</td>
                                            </tr>
                                            <tr>
                                                <th>5:15 - 5:45</th>
                                                <td>Table toys/ Coloring</td>
                                            </tr>
                                            <tr>
                                                <th>6:15 - 6:45</th>
                                                <td>Table toys/ Get ready to go home</td>
                                            </tr>
                                        </body>
                                    </table>
                                     </div>
                            </span>{" "}
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
