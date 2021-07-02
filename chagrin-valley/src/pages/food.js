import React from "react";
import { NavLink } from "react-router-dom";

export default function Food() {
    return (
        <div>
            Food
            <div>
                <p className="sectionHeaderPrograms">
                    <NavLink to="/ourapproach">
                        {" "}
                        Our approach to education{" "}
                        <i
                            class="fa fa-angle-double-right"
                            aria-hidden="true"></i>
                    </NavLink>
                </p>
            </div>
        </div>
    );
}
