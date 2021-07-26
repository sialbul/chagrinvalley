import React from "react";
import { NavLink } from "react-router-dom";

export default function UpdateAgreement() {
    return (
        <div>
            UpdateAgreement
            <div>
                <p className="sectionHeaderPrograms">
                    <NavLink to="/centerclosure">
                        {" "}
                        <h2>
                            {" "}
                            Center Closure{" "}
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
