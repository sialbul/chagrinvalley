import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import Logo from "../images/chagrinvalley3.png";
import { NavLink } from "react-router-dom";

import "../style/style.css";

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <div className="navbar">
                <div className="logo-nav">
                    <div className="logo-container">
                        <a className="logo">
                            <NavLink to="/">
                                {" "}
                                <img src={Logo} />
                            </NavLink>
                        </a>
                    </div>
                    <ul
                        className={
                            click ? "nav-options active" : "nav-options"
                        }>
                        <li className="option" onClick={closeMobileMenu}>
                            <a className="nav-links">OUR CENTER</a>
                            <ul>
                                <li
                                    className="option"
                                    onClick={closeMobileMenu}>
                                    <NavLink to="/howtoenroll">
                                        {" "}
                                        <i className="fas fa-edit"></i> How to
                                        Enroll
                                    </NavLink>
                                </li>
                                <li
                                    className="option"
                                    onClick={closeMobileMenu}>
                                    <NavLink to="/teacherparent">
                                        {" "}
                                        <i className="fas fa-chalkboard-teacher"></i>{" "}
                                        Teacher parent testimonials
                                    </NavLink>
                                </li>
                                <li
                                    className="option"
                                    onClick={closeMobileMenu}>
                                    <NavLink to="/virtualtour">
                                        <i className="fas fa-video"></i> Take a
                                        virtual tour
                                    </NavLink>
                                </li>
                                <li
                                    className="option"
                                    onClick={closeMobileMenu}>
                                    <NavLink to="/food">
                                        <i className="fas fa-apple-alt"></i>{" "}
                                        Food and nutrition
                                    </NavLink>
                                </li>
                                <li
                                    className="option"
                                    onClick={closeMobileMenu}>
                                    <NavLink to="/ourapproach">
                                        {" "}
                                        <i className="fas fa-pencil-ruler"></i>{" "}
                                        Our approach to education
                                    </NavLink>
                                </li>
                                <li
                                    className="option"
                                    onClick={closeMobileMenu}>
                                    <NavLink to="/community">
                                        <i className="fas fa-user-friends"></i>{" "}
                                        Community involvement
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="option" onClick={closeMobileMenu}>
                            <a href="#" className="nav-links">
                                PROGRAMS
                            </a>
                            <ul>
                                <li
                                    className="option"
                                    onClick={closeMobileMenu}>
                                    <NavLink to="/infants">
                                        {" "}
                                        <i className="fas fa-baby"> </i> Infants
                                    </NavLink>
                                </li>
                                <li
                                    className="option"
                                    onClick={closeMobileMenu}>
                                    <NavLink to="/toddler">
                                        {" "}
                                        <i className="fa fa-child"> </i>{" "}
                                        Toddlers
                                    </NavLink>
                                </li>
                                <li
                                    className="option"
                                    onClick={closeMobileMenu}>
                                    <NavLink to="/preschool">
                                        {" "}
                                        <i className="fas fa-book-reader">
                                            {" "}
                                        </i>{" "}
                                        Pre-School
                                    </NavLink>
                                </li>
                                <li
                                    className="option"
                                    onClick={closeMobileMenu}>
                                    <NavLink to="/schoolage">
                                        <i className="fas fa-graduation-cap"></i>{" "}
                                        School Age
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="option" onClick={closeMobileMenu}>
                            <a className="nav-links">CURRICULUM</a>
                            <ul>
                                <li
                                    className="option"
                                    onClick={closeMobileMenu}>
                                    <NavLink to="/curriculum">
                                        <i className="fas fa-book"></i> Creative
                                        Curriculum
                                    </NavLink>
                                </li>
                                <li
                                    className="option"
                                    onClick={closeMobileMenu}>
                                    <NavLink to="/buildingbridges">
                                        <i className="fas fa-archway"></i>{" "}
                                        Building Bridges
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="option" onClick={closeMobileMenu}>
                            <a href="#" className="nav-links">
                                RESOURCES
                            </a>
                            <ul>
                                <li
                                    className="option"
                                    onClick={closeMobileMenu}>
                                    <NavLink to="/childcare">
                                        <i className="fas fa-dollar-sign"></i>{" "}
                                        Child Care Cost
                                    </NavLink>
                                </li>
                                <li
                                    className="option"
                                    onClick={closeMobileMenu}>
                                    <NavLink to="/tuition">
                                        <i className="fas fa-money-bill-wave"></i>{" "}
                                        How to Pay Tuition
                                    </NavLink>
                                </li>
                                <li
                                    className="option"
                                    onClick={closeMobileMenu}>
                                    <NavLink to="/updateagreement">
                                        {" "}
                                        <i className="fas fa-handshake"></i>{" "}
                                        Update Your Agreement
                                    </NavLink>
                                </li>
                                <li
                                    className="option"
                                    onClick={closeMobileMenu}>
                                    <NavLink to="/centerclosure">
                                        <i className="fas fa-school"></i> Center
                                        Closure
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="option" onClick={closeMobileMenu}>
                            <NavLink to="/gallery" className="nav-links">
                                {" "}
                                GALLERY
                            </NavLink>
                        </li>

                        <li className="option" onClick={closeMobileMenu}>
                            <NavLink to="/tuition" className="nav-links">
                                PAY TUITION
                            </NavLink>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (
                            <CloseMenu className="menu-icon" />
                        ) : (
                            <MenuIcon className="menu-icon" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
