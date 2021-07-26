import React from "react";
import { NavLink } from "react-router-dom";

export default function Curriculum() {
    return (
        <div id="pageContainer">
            <span className="sectionHeader"> Our Approach </span>

            <p>
                The Creative Curriculum® is research-based and supports the
                development of the whole child. High-quality, comprehensive
                resources empower educators to intentionally teach and care for
                our youngest learners during the most critical and formative
                years of development.
                <br />
                <br />
                <span id="parHeader">The Creative Curriculum® is…</span>
                <br /> <span id="parHeader">Innovative:</span> delivering
                cutting-edge resources that are unique, effective, and based on
                the latest research.
                <br /> <span id="parHeader">Responsive:</span> including
                solutions that address educators’ challenges and help create a
                responsive learning environment.
                <br />
                <span id="parHeader"> Supportive:</span> providing robust
                guidance to support each educator’s professional journey.
                <br />
                <span id="parHeader">Comprehensive: </span>aligning to all state
                early learning guidelines and the Head Start Early Learning
                Outcomes Framework
                <br />
                <span id="parHeader">Developmentally Appropriate:</span>{" "}
                promoting learning experiences designed for each age-group and
                flexibly tailored to each child’s needs with high-quality,
                research-based resources.
            </p>
            <div>
                <p className="sectionHeaderPrograms">
                    <NavLink to="/cincyafterschool">
                        {" "}
                        <h2>
                            {" "}
                            Cincy After School{" "}
                            <i
                                className="fa fa-angle-double-right"
                                aria-hidden="true"></i>
                        </h2>
                    </NavLink>
                </p>
            </div>
        </div>
    );
}
