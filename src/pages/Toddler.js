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
                                                <th>8:10 - 8:15</th>
                                                <td> Get ready for breakfast</td>
                                            </tr>
                                            <tr>
                                                <th>8:15 - 8:45</th>
                                                <td>Breakfast time</td>

                                            </tr>
                                            <tr>
                                                <th> 8:45 - 9:00</th>
                                                <td>Diaper changes</td>
                                            </tr>
                                            <tr>
                                                <th>9:00 - 9:10</th>
                                                <td>Circle time</td>
                                            </tr>
                                            <tr>
                                                <th>9:10 - 9:25</th>
                                                <td>Art time</td>
                                            </tr>
                                            <tr>
                                                <th>9:25 - 9:45</th>
                                                <td>Get ready to go outside</td>
                                            </tr>
                                            <tr>
                                                <th>9:45 - 10:45</th>
                                                <td>Outside time</td>
                                            </tr>
                                            <tr>
                                                <th>10:45 - 11:10</th>
                                                <td>Diaper changes</td>
                                            </tr>
                                            <tr>
                                                <th>11:10 - 11:15</th>
                                                <td>Get ready for lunch</td>
                                            </tr>
                                            <tr>
                                                <th>11:15 - 11:45</th>
                                                <td>Lunch time</td>
                                            </tr>
                                            <tr>
                                                <th>11:50 - 12:05</th>
                                                <td>Diaper changes</td>
                                            </tr>
                                            <tr>
                                                <th>12:10 - 12:15 </th>
                                                <td>Get ready for nap</td>
                                            </tr>
                                            <tr>
                                                <th>12:15 - 2:15</th>
                                                <td> Nap time</td>
                                            </tr>
                                            <tr>
                                                <th>2:20 - 2:35</th>
                                                <td>Diaper changes</td>

                                            </tr>
                                            <tr>
                                                <th> 2:40 - 2:50</th>
                                                <td>Get snack ready</td>
                                            </tr>
                                            <tr>
                                                <th>2:50 - 3:10</th>
                                                <td>Snack time</td>
                                            </tr>
                                            <tr>
                                                <th>3:10 - 3:20 </th>
                                                <td>Get ready for outside</td>
                                            </tr>
                                            <tr>
                                                <th>3:20 - 4:00</th>
                                                <td>Outside time</td>
                                            </tr>
                                            <tr>
                                                <th>4:00 - 4:15</th>
                                                <td>Diaper changes</td>
                                            </tr>
                                            <tr>
                                                <th>4:15 - 5:30</th>
                                                <td>Waiting to go home (free play)</td>
                                            </tr>
                                            <tr>
                                                <th>5:30</th>
                                                <td>Get Shoes on to go home!!</td>
                                            </tr>
                                        </body>


                                    </table> 
                                    </div>
                            </span>{" "}
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
