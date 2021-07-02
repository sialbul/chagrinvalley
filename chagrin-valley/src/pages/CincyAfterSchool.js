import React from "react";
import { NavLink } from "react-router-dom";

export default function CincyAfterSchool() {
    return (
        <div id="pageContainer">
            <span class="sectionHeader"> Cincy After School </span>

            <p>
                The Cincy After School curriculum is designed to support the
                healthy devel- opment of children by building strengths and
                meeting the needs of the whole child . Increased student
                achievement and reduction of risk-taking behavior are two
                primary goals of the program . The curriculum achieves these
                goals through engaging students and their families in balanced
                activities aligned with Ohio Academic Standards.
                <br />
                <br />
                <span id="parHeader">Ohio Academic Standards</span>
                <br />
                Each activity has been designed with the Ohio Academic Standards
                in mind. Homework extensions, alternative programming lessons
                and activities, as well as the choice time stations have all
                been matched to ODE Standards. The lesson plans for each
                activity clearly document which standards are being addressed.
                <br />
                <br />
                <span id="parHeader">40 Developmental Assets</span>
                <br />
                The design of the program reflects the 40 Developmental Assets
                for Elemen- tary-Age Children based on research of the Search
                Institute. In 1999 the publication{" "}
                <em>
                    Great Places to Learn: How Asset-Building Schools Help
                    Students Succeed{" "}
                </em>
                identified three themes for asset building in school
                programming:
                <br />
                <span id="parHeader2">Building relationships</span> with
                students is the foundation of fostering Developmental Assets in
                their lives as young people as well as learners . <br />
                <span id="parHeader2">Creating supportive environments </span>is
                a key to providing a learning and growth experience that is both
                productive and positive . <br />
                <span id="parHeader2">
                    Connecting to programs and practices
                </span>{" "}
                that are instructionally sound enables a model to infuse the
                goals and priorities of a school.
                <br /> Building relationships, creating supportive environments
                and connecting programs to the academic goals of Ohio create the
                core of the program .
                <br /> Further research by the Search Institute shows that the
                development of assets plays a powerful role in preventing
                alcohol, tobacco and other drug use across diverse samples of
                youth . In addition, studies show that the assets play a
                significant role in increasing students’ academic achievement .
                Weaving the assets into the design of the Cincy After School
                Program creates a foundation for meeting the academic and
                behavioral goals of the program .
            </p>
            <div>
                <p className="sectionHeaderPrograms">
                    <NavLink to="/childcare">
                        {" "}
                        <h2>
                            {" "}
                            Child Care Cost{" "}
                            <i
                                class="fa fa-angle-double-right"
                                aria-hidden="true"></i>
                        </h2>
                    </NavLink>
                </p>
            </div>
        </div>
    );
}
