import React from "react";
import PreschoolPhoto3 from "../assets/photo-gallery/letters.jpg";
import PreschoolPhoto2 from "../assets/photo-gallery/crayon.jpg";
import PreschoolPhoto4 from "../assets/photo-gallery/schoolage.jpg";
import PreschoolPhoto5 from "../assets/photo-gallery/schoolage.png";
import SummerFlyer from "../assets/photo-gallery/summerFlyer.pdf";
import { NavLink } from "react-router-dom";

export default function Schoolage() {
    return (
        <div>
            <container>
                <div id="infantContainer">
                    <p className="infantHeaderSchoolAge"> School Age </p>
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
                                <h3 className="schoolAgeHeader">
                                    Before & After School Care
                                </h3>
                                <br />
                                At CV Early Learning Centers, we have Before and
                                After School Care. West Geauga, Kenston and
                                Chagrin Falls schools all provide transportation
                                to & from our center. You can drop your child in
                                the morning and pick up in the afternoon with
                                affordable rates.
                                <br />
                                Chagrin Valley offers school agers a calm and
                                safe place after school. There are plenty of
                                activities to help them expel some of their
                                excess energy. There are also trained teachers
                                available for plenty of tutoring or homework
                                help. This is no ordinary after school program.
                            </p>{" "}
                        </div>
                    </div>
                    <div id="infantContainer2">
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
                                <h3 className="schoolAgeHeader">Before</h3>
                                <div>
                                    <table id="pageTable">
                                        <body>
                                            <tr>
                                                <th>6:00 - 7:00</th>
                                                <td>Quiet play </td>
                                            </tr>
                                            <tr>
                                                <th>7:00 - 7:30</th>
                                                <td>Breakfast/ Free Play </td>
                                            </tr>
                                            <tr>
                                                <th>7:30 - 8:15</th>
                                                <td>Centers- Choice time/ <br /> Busses</td>
                                            </tr>



                                        </body>
                                    </table>

                                </div>
                                <h3 className="schoolAgeHeader">After</h3>

                                <div>
                                    <table id="pageTable">
                                        <body>
                                            <tr>
                                                <th>3:20 - 3:50</th>
                                                <td>Arrival / Centers / Choice time</td>
                                            </tr>
                                            <tr>
                                                <th>3:50 - 4:00</th>
                                                <td>Handwashing</td>
                                            </tr>
                                            <tr>
                                                <th>4:00 - 4:20</th>
                                                <td>Snack & Chat</td>
                                            </tr>
                                            <tr>
                                                <th>4:20 - 4:50</th>
                                                <td>Homework/Quite Time/Books<br />
                                                    Puzzles, Drawing</td>
                                            </tr>
                                            <tr>
                                                <th>4:50 - 5:30</th>
                                                <td>Outside / Gross Motor</td>
                                            </tr>
                                            <tr>
                                                <th>5:30 - 6:00</th>
                                                <td>Group Activities</td>
                                            </tr>
                                            <tr>
                                                <th>6:00 - 6:45</th>
                                                <td>Table Toys/Clean up/
                                                    <br />Get ready to
                                                    go home</td>
                                            </tr>

                                        </body>
                                    </table>


                                </div>
                            </span>{" "}
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
                    <div id="infantContainer2">
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
                                    To Get Summer Programs Flyer
                                </a>
                            </button>
                        </div>
                    </div>
                    <div id="infantContainer2">
                        <div>
                            <span data-aos="fade-down" data-aos-duration="2000">
                                <span id="headSmall">
                                    <i
                                        className="fa fa-clock-o"
                                        aria-hidden="true"
                                        fa-lg></i>
                                    Sample of the Daily Summer<br/> School Schedule
                                </span>
                                <br />
                                <div>
                                    <table id="pageTable">
                                        <body>
                                            <tr>
                                                <th>6:00 - 8:15</th>
                                                <td>Quiet play</td>
                                            </tr>
                                            <tr>
                                                <th>8:15 - 8:45</th>
                                                <td>Breakfast/ Quiet Free Play</td>
                                            </tr>
                                            <tr>
                                                <th>8:45 - 9:00</th>
                                                <td>Free choice</td>
                                            </tr>
                                            <tr>
                                                <th>9:00 - 9:10</th>
                                                <td>Morning meeting</td>
                                            </tr>
                                            <tr>
                                                <th>9:10 - 9:45</th>
                                                <td>Arts & Crafts</td>
                                            </tr>
                                            <tr>
                                                <th>9:45 - 10:15</th>
                                                <td>Science activities & Experiments</td>
                                            </tr>
                                            <tr>
                                                <th>10:15 - 11:30</th>
                                                <td>Outside/ Large motor*</td>
                                            </tr>
                                            <tr>
                                                <th>11:30 - 12:15</th>
                                                <td>Centers/small groups-CINCY
                                                    ACTIVITIES</td>
                                            </tr>
                                            <tr>
                                                <th>12:15 - 1:00</th>
                                                <td>Story time read aloud</td>
                                            </tr>
                                            <tr>
                                                <th>1:00 - 1:15</th>
                                                <td>Story time read aloud</td>
                                            </tr>
                                            <tr>
                                                <th>1:15 - 2:30</th>
                                                <td>Outside*</td>
                                            </tr>
                                            <tr>
                                                <th>2:30 - 3:30</th>
                                                <td>Homework/ Quiet Play / Group
                                                    Activities</td>
                                            </tr>
                                            <tr>
                                                <th>3:30 - 3:45</th>
                                                <td>Afternoon Meeting</td>
                                            </tr>
                                            <tr>
                                                <th>3:45 - 4:15</th>
                                                <td>Afternoon Snack & Chat</td>
                                            </tr>
                                            <tr>
                                                <th>4:15 - 4:40</th>
                                                <td>Book Time/ Puzzle Time</td>
                                            </tr>
                                            <tr>
                                                <th>4:40 - 5:15</th>
                                                <td>Outside*</td>
                                            </tr>
                                            <tr>
                                                <th>5:15 - 5:45</th>
                                                <td>Table toys</td>
                                            </tr>
                                            <tr>
                                                <th>5:45 - 6:30</th>
                                                <td>Limited Centers</td>
                                            </tr>
                                            <tr>
                                                <th>6:30 - 6:45</th>
                                                <td>Clean up/Get ready to go home</td>
                                            </tr>
                                            <br />
                                            *times can change according to weather
                                        </body>
                                    </table>
                                </div>
                            </span>{" "}
                        </div>
                        <div id="infantFirstPart">
                            <img
                                id="programsPagePhoto2"
                                src={PreschoolPhoto5}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="sectionHeaderPrograms">
                        <NavLink to="/curriculum">
                            {" "}
                            Creative Curriculum
                            <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"></i>
                            <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"></i>
                        </NavLink>
                    </p>
                </div>
            </container>
        </div>
    );
}
