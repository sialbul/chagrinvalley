import React from "react";
import { NavLink } from "react-router-dom";
import Construction from "../components/Construction";

export default function Food() {
    return (
        <div>
            <div>
                <Construction />
                <p className="sectionHeaderPrograms">
                    <NavLink to="/ourapproach">
                        {" "}
                        Our approach to education{" "}
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
