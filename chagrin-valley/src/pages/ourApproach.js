import React from "react";
import { NavLink } from "react-router-dom";
import Construction from "../components/Construction";
export default function OurApproach() {
    return (
        <div>
            <Construction />
            <div>
                <p className="sectionHeaderPrograms">
                    <NavLink to="/community">
                        {" "}
                        Community involvement
                        <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"></i>
                    </NavLink>
                </p>
            </div>
        </div>
    );
}
