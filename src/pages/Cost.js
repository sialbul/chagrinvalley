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
                            <td>232.00</td>
                            <td>208.80 </td>
                            <td>185.60</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                INFANTS with
                                <br />
                                Diaper and Wipes
                            </td>
                            <td>250.00</td>
                            <td>225.00 </td>
                            <td>200.00</td>

                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                TODDLER <br />
                                21 months-3 years{" "}
                            </td>
                            <td>205.00</td>
                            <td>184.50 </td>
                            <td>164.00</td>

                            <td>90.00**</td>
                        </tr>
                        <tr>
                            <td>
                                TODDLER <br />
                                Pullups and Wipes{" "}
                            </td>
                            <td>223.00</td>
                            <td>200.70 </td>
                            <td>178.40</td>

                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                PRESCHOOL <br />3 years-5 years{" "}
                            </td>
                            <td>187.00</td>
                            <td>168.30 </td>
                            <td>149.60</td>

                            <td>78.00**</td>
                        </tr>
                        <tr>
                            <td>
                                SCHOOL AGE <br />
                            </td>
                            <td>177.00</td>
                            <td>159.30 </td>
                            <td>141.60</td>

                            <td></td>
                        </tr>
                        <tr>
                            <td>Before and After</td>
                            <td>93.00</td>
                            <td>83.70 </td>
                            <td>83.70</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Before </td>
                            <td>48.00</td>
                            <td>43.20 </td>
                            <td>43.20</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>After </td>
                            <td>75.00</td>
                            <td>67.50 </td>
                            <td>67.50</td>
                            <td></td>
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
                    enrolled 2-3 days a week
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
                    every minute here past 5:30 pm Monday--Thursday & 5:00pm
                    Friday.
                    <br />
                    <span id="parHeader"> **2 ½ Hour Preschool: </span>
                    Monday thru Friday 9-11:30 am. Toddler $90 Preschool $78
                </p>
                <br />
                <h2>
                    ***Hours of Operation: Monday thru Thursday 6am—5:30pm
                    Friday 6am—5pm***effective 08/02/21
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