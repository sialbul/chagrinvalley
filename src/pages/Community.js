import React from "react";
import { NavLink } from "react-router-dom";
import Construction from "../components/Construction";
export default function Community() {
    return (
        <div>
            <Construction />
            <div>
                <p className="sectionHeaderPrograms">
                    <NavLink to="/infants">
                        {" "}
                        Infants{" "}
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
