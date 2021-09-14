import React from "react";
import { NavLink } from "react-router-dom";

export default function HowToEnroll() {
    return (
        <div>
            <div id="pageContainer">
                <span className="sectionHeader"> Take a Tour </span>

                <p>
                    Come see our center!
                    <br /> In-person tours are available. Reach out directly to
                    the center director, She can give you information about our
                    program, tuition, and enrollment options.{" "}
                    <a href="tel:440-338-4499">
                        {" "}
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        440-338-4499
                    </a>{" "}
                    <br /> Or take a virtual tour
                </p>
                <br />
                <span className="sectionHeader3">
                    {" "}
                    <h5>Begin the Enrollment Process</h5>
                </span>
                <p>
                    You must complete and sign all forms and have the Center
                    Director’s signature on your Enrollment papers before your
                    child can attend. Below you will find all links to your
                    documents needed for a Perfect Start. Fill them out, either
                    print or save and send them to our email address.
                    <a
                        id="emailAdress"
                        href="mailto:chagrinvalleyelc@gmail.com">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        chagrinvalleyelc@gmail.com.
                    </a>
                    <br />
                    <br />
                    Throughout your child’s enrollment, please be sure to update
                    emergency information as needed, including your address,
                    telephone numbers, email address, any changes in your
                    child’s medical information, and individuals authorized to
                    pick up your child
                </p>
                <div id="enrollForm">
                    <p>
                        <a
                            href="http://www.odjfs.state.oh.us/forms/num/JFS01234/pdf/"
                            target="_blank">
                            <i className="fas fa-file-signature"></i>
                            Enrollment
                        </a>
                    </p>
                    <p>
                        <a
                            href="http://www.odjfs.state.oh.us/forms/num/JFS01305/pdf/"
                            target="_blank">
                            <i className="fas fa-syringe"></i>
                            Child Medical
                        </a>
                    </p>
                    <p>
                        <a
                            href="http://www.odjfs.state.oh.us/forms/num/JFS01511/pdf/"
                            target="_blank">
                            <i className="fa fa-users" aria-hidden="true"></i>
                            SUTQ Family Information{" "}
                        </a>
                    </p>
                    <p>
                        <a
                            href="http://www.odjfs.state.oh.us/forms/num/JFS01218/pdf/ "
                            target="_blank">
                            <i className="fas fa-baby"> </i>
                            Infant Information{" "}
                        </a>
                    </p>

                    <p>
                        <a
                            href="http://www.odjfs.state.oh.us/forms/num/JFS01235/pdf/ "
                            target="_blank">
                            <i className="fa fa-bed" aria-hidden="true"></i>
                            Sleep Waiver{" "}
                        </a>
                    </p>
                    <p>
                        <a
                            href="http://www.odjfs.state.oh.us/forms/num/JFS01236/pdf/  "
                            target="_blank">
                            <i className="fa fa-heart"></i>
                            Medical Care Plan{" "}
                        </a>
                    </p>
                    <p>
                        <a
                            href="http://www.odjfs.state.oh.us/forms/num/JFS01217/pdf/ "
                            target="_blank">
                            <i className="fa fa-heart"></i>
                            Request of Medication{" "}
                        </a>
                    </p>
                </div>
            </div>
            <div>
                <p className="sectionHeaderPrograms">
                    <NavLink to="/testimonials">
                        {" "}
                        Teacher parent testimonials
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
