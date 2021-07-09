import React from "react";
import { NavLink } from "react-router-dom";

export default function ChildCare() {
    return (
        <div>
            <div id="pageContainer">
                <span class="sectionHeader"> Tuition and Fees </span>
                <table role="table">
                    <thead role="rowgroup">
                        <tr role="row">
                            <th role="columnheader"></th>
                            <th role="columnheader">1st Child</th>
                            <th role="columnheader">2nd Child</th>
                            <th role="columnheader">3rd Child</th>
                            <th role="columnheader">Part Time</th>
                            <th role="columnheader">Daily</th>
                            <th role="columnheader">12.5hr a week</th>
                        </tr>
                    </thead>
                    <tbody role="rowgroup">
                        <tr>
                            <td role="cell">
                                INFANTS
                                <br />6 weeks- 21months
                            </td>
                            <td role="cell">232.00</td>
                            <td role="cell">208.80 </td>
                            <td role="cell">185.60</td>
                            <td role="cell">168.00</td>
                            <td role="cell">56.00</td>
                            <td role="cell"></td>
                        </tr>
                        <tr role="row">
                            <td role="cell">
                                INFANTS with
                                <br />
                                Diaper and Wipes
                            </td>
                            <td role="cell">250.00</td>
                            <td role="cell">225.00 </td>
                            <td role="cell">200.00</td>
                            <td role="cell">177.00</td>
                            <td role="cell">59.00</td>
                            <td role="cell"></td>
                        </tr>
                        <tr role="row">
                            <td role="cell">
                                TODDLER <br />
                                21 months-3 years{" "}
                            </td>
                            <td role="cell">205.00</td>
                            <td role="cell">184.50 </td>
                            <td role="cell">164.00</td>
                            <td role="cell">153.00</td>
                            <td role="cell">51.00</td>
                            <td role="cell">85.00**</td>
                        </tr>
                        <tr role="row">
                            <td role="cell">
                                TODDLER <br />
                                Pullups and Wipes{" "}
                            </td>
                            <td role="cell">223.00</td>
                            <td role="cell">200.70 </td>
                            <td role="cell">178.40</td>
                            <td role="cell">162.00</td>
                            <td role="cell">54.00</td>
                            <td role="cell"></td>
                        </tr>
                        <tr role="row">
                            <td role="cell">
                                PRESCHOOL <br />3 years-5 years{" "}
                            </td>
                            <td role="cell">187.00</td>
                            <td role="cell">168.30 </td>
                            <td role="cell">149.60</td>
                            <td role="cell">135.00</td>
                            <td role="cell">45.00</td>
                            <td role="cell">73.00**</td>
                        </tr>
                        <tr role="row">
                            <td role="cell">
                                SCHOOL AGE <br />
                            </td>
                            <td role="cell">177.00</td>
                            <td role="cell">159.30 </td>
                            <td role="cell">141.60</td>
                            <td role="cell">126.00</td>
                            <td role="cell">42.00</td>
                            <td role="cell"></td>
                        </tr>
                        <tr role="row">
                            <td role="cell">Before and After</td>
                            <td role="cell">93.00</td>
                            <td role="cell">83.70 </td>
                            <td role="cell">74.40</td>
                            <td role="cell">83.70</td>
                            <td role="cell">28.00</td>
                            <td role="cell"></td>
                        </tr>
                        <tr role="row">
                            <td role="cell">Before </td>
                            <td role="cell">48.00</td>
                            <td role="cell">43.20 </td>
                            <td role="cell">38.40</td>
                            <td role="cell">43.20</td>
                            <td role="cell">15.00</td>
                            <td role="cell"></td>
                        </tr>
                        <tr role="row">
                            <td role="cell">After </td>
                            <td role="cell">75.00</td>
                            <td role="cell">67.50 </td>
                            <td role="cell">60.00</td>
                            <td role="cell">67.50</td>
                            <td role="cell">23.00</td>
                            <td role="cell"></td>
                        </tr>

                        <tr role="row">
                            <td role="cell">
                                Transportation to <br /> surrounding schools
                            </td>
                            <td role="cell">
                                25.00
                                <br />+ weekly
                            </td>
                            <td role="cell"> </td>
                            <td role="cell"></td>
                            <td role="cell"></td>
                            <td role="cell">
                                10.00
                                <br />+ daily
                            </td>
                            <td role="cell"></td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h2>RATE WILL VERY BASED ON TRANSPORTATION NEEDS</h2>
                <p id="rateExplanation">
                    <span id="parHeader"> Registration Fee: </span>
                    $50.00 per family *Due upon registration & any lengthy
                    withdraw and re-enroll *non-refundable <br />
                    <span id="parHeader"> Preschool: </span> 3 years old and
                    Potty trained.
                    <br />
                    <span id="parHeader"> Full-Time: </span> 4 or 5 days of
                    child care Monday-Friday consisting of 5 or more hours per
                    day
                    <br />
                    <span id="parHeader"> Part-Time: </span> Children who
                    receive 5 or less hours of child care per day or are
                    enrolled 3 days a week
                    <br />
                    <span id="parHeader"> Daily Rate: </span>minimum of 2 full
                    days
                    <br />
                    <span id="parHeader"> Snow Days:</span> As a courtesy to our
                    families, you may drop off your school aged child (up to the
                    age of 12) and be charged the daily rate. This service has
                    limited enrollment. PLEASE ALWAYS CALL AHEAD FOR
                    CONFIRMATION. For Families already enrolled in our Before &
                    After care Program the fee is $21.00 a day.
                    <br />
                    <span id="parHeader"> Late Pick Up Fee: </span>$5 per child
                    every minute here past 6:45 pm.
                    <br />
                    <span id="parHeader"> Transportation: </span>
                    We provide transportation to Gurney, Kenston if needed for
                    special programs.
                    <br />
                    <span id="parHeader"> **2 ½ Hour Preschool: </span>
                    Monday thru Friday 9-11:30 am. Toddler $85 Preschool $73
                </p>
                <br />
                <h2>
                    ***Hours of Operation: Monday thru Thursday 6am—5:30pm
                    Friday 6am—5pm***effective 6/1/20
                </h2>
                <br />
            </div>
            <div>
                <p className="sectionHeaderPrograms">
                    <NavLink to="/tuition">
                        {" "}
                        How to Pay Tuition
                        <i
                            class="fa fa-angle-double-right"
                            aria-hidden="true"></i>
                    </NavLink>
                </p>
            </div>
        </div>
    );
}
