import React from "react";
import { NavLink } from "react-router-dom";

export default function Community() {
    return (
        <div>
            Community
            <div>
                <p className="sectionHeaderPrograms">
                    <NavLink to="/infants">
                        {" "}
                        Infants{" "}
                        <i
                            class="fa fa-angle-double-right"
                            aria-hidden="true"></i>
                    </NavLink>
                </p>
            </div>
        </div>
    );
}
