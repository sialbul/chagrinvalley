import React from "react";
import PreschoolPhoto3 from "../images/letters.jpg";
import PreschoolPhoto2 from "../images/crayon.jpg";
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
                                Before & After School Care
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
                        <div id="infantFirstPart">
                            <img
                                id="programsPagePhoto1"
                                src={PreschoolPhoto3}
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
