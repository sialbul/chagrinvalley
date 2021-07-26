import React from "react";
import { NavLink } from "react-router-dom";

export default function Tuition() {
    return (
        <div>
            Tuition
            <div>
                <p className="sectionHeaderPrograms">
                    <NavLink to="/updateagreement">
                        {" "}
                        <h2>
                            {" "}
                            Update Your Agreement{" "}
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
