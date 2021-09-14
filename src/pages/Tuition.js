import React from "react";
import { NavLink } from "react-router-dom";
import Construction from "../components/Construction";
export default function Tuition() {
    return (
        <div>
            <Construction />
            <div>
                <p className="sectionHeaderPrograms">
                    <NavLink to="/updateagreement">
                        {" "}
                        Update Your Agreement{" "}
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
