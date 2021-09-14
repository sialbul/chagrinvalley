import React from "react";
import { NavLink } from "react-router-dom";
import Construction from "../components/Construction";
export default function virtualTour() {
    return (
        <div>
            <Construction />
            <div>
                <p className="sectionHeaderPrograms">
                    <NavLink to="/food">
                        {" "}
                        Food and Nutrition{" "}
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
