import React from "react";
import ToddlerPhoto from "../images/books.jpg";
import ToddlerPhoto2 from "../images/toddlers.png";

export default function Toddler() {
    return (
        <div>
            <container>
                <div id="infantContainer">
                    <p class="infantHeaderToddler"> Toddler </p>
                    <div id="infantContainer2">
                        <div id="infantFirstPart">
                            <img
                                id="infantBaby3"
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
                                        class="fa fa-clock-o"
                                        aria-hidden="true"
                                        fa-lg></i>
                                    Sample of the Daily Schedule
                                </span>
                                <br />
                                <div id="schedule">
                                    6-8:30 Arrival/Breakfast/Diapers
                                    <br />
                                    8:30-9 Movement Activity <br />
                                    9-9:45 Indoor play/ art
                                    <br />
                                    9:45-10:30 Snack/Diapers/Hand washing
                                    <br />
                                    10:30-11:15 Outside/large muscle activity
                                    <br />
                                    11:15-11:30 Story <br />
                                    11:30-12:30 Lunch/Quiet Cot
                                    play/Diapers/Hand washing <br />
                                    12:30-2:45 Rest Time
                                    <br />
                                    2:45-3 Wake up/Quiet play/Diapers/Hand
                                    washing
                                    <br />
                                    3-3:30 Snack
                                    <br />
                                    3:30-4:30 Indoor Play <br />
                                    4:30-5 Large muscle activity/outside
                                    <br />
                                    5-6 Indoor play/ Diapering/ departure
                                    <br />
                                    6-6:45 Quiet play/ departure
                                </div>
                            </p>{" "}
                        </div>
                        <div>
                            <img
                                id="infantBaby2"
                                src={ToddlerPhoto2}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                            />
                        </div>
                    </div>
                </div>
            </container>
        </div>
    );
}
