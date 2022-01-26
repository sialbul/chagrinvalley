import React from "react";
import { NavLink } from "react-router-dom";

export default function Cost() {
    return (
        <div>
            <div id="pageContainer">
                <span className="sectionHeader"> Tuition and Fees </span>
                <table>
                    <thead>
                        <tr >
                            <th></th>
                            <th>1st Child</th>
                            <th>2nd Child</th>
                            <th>Part Time</th>
                            <th>12.5hr a week</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                INFANTS
                                <br />6 weeks- 21months
                            </td>
                            <td>269.00</td>
                            <td>242.80 </td>
                            <td>198.00</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                INFANTS with
                                <br />
                                Diaper and Wipes
                            </td>
                            <td>290.00</td>
                            <td>261.00 </td>
                            <td>2220.00</td>

                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                TODDLER <br />
                                21 months-3 years{" "}
                            </td>
                            <td>239.00</td>
                            <td>215.00 </td>
                            <td>185.00</td>

                            <td>98.00**</td>
                        </tr>
                        <tr>
                            <td>
                                TODDLER <br />
                                Pullups and Wipes{" "}
                            </td>
                            <td>260.00</td>
                            <td>234.00 </td>
                            <td>198.00</td>

                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                PRESCHOOL <br />3 years-5 years{" "}
                            </td>
                            <td>209.00</td>
                            <td>188.00 </td>
                            <td>159.00</td>

                            <td>88.00**</td>
                        </tr>
                        <tr>
                            <td>
                                SCHOOL AGE <br />
                            </td>
                            <td>189.00</td>
                            <td>170.00 </td>
                            <td>151.00</td>

                            <td></td>
                        </tr>
                        <tr>
                            <td>Before and After</td>
                            <td>96.00</td>
                            <td>86.40 </td>
                            <td>85.00</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Before </td>
                            <td>49.00</td>
                            <td>44.10 </td>
                            <td>44.00</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>After </td>
                            <td>77.00</td>
                            <td>69.30 </td>
                            <td>69.00</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h2>RATE WILL VERY BASED ON TRANSPORTATION NEEDS</h2>
                <p id="rateExplanation">
                    <span id="parHeader"> Registration Fee: </span>
                    $75.00 per family *Due upon registration & any lengthy
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
                    enrolled 2-3 days a week
                    <br />
                    <span id="parHeader"> Snow Days:</span> As a courtesy to our
                    families, you may drop off your school aged child (up to the
                    age of 12) and be charged the daily rate. This service has
                    limited enrollment. PLEASE ALWAYS CALL AHEAD FOR
                    CONFIRMATION. For Families already enrolled in our Before &
                    After care Program the fee is $29.00 a day.
                    <br />
                    <span id="parHeader"> Late Pick Up Fee: </span>$15 per child
                    every 15 minuteS here past 5:30 pm Monday--Thursday & 5:00pm
                    Friday.
                    <br />
                    <span id="parHeader"> **2 ½ Hour Preschool: </span>
                    Monday thru Friday 9-11:30 am. Toddler $98 Preschool $88
                </p>
                <br />
                <h2>
                    ***Hours of Operation: Monday thru Thursday 6am—5:30pm
                    Friday 6am—5pm***effective 01/24/2022S
                </h2>
                <br />
            </div>
            <div>
                <p className="sectionHeaderPrograms">
                    <NavLink to="/tuition">
                        {" "}
                        How to Pay Tuition
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
    );
}
