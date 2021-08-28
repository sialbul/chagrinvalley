import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/photo-gallery/chagrinvalley3.png";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink to="/" className="nav-logo">
                        <img alt="Home" title="Home" src={Logo} />{" "}
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <div
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}>
                                OUR CENTER <i className="fa fa-caret-down"></i>
                            </div>
                            <ul className="dropdownUl">
                                <li
                                    className="dropdownLi"
                                    onClick={handleClick}>
                                    <NavLink to="/howtoenroll">
                                        {" "}
                                        <i className="fas fa-edit"></i> How to
                                        Enroll
                                    </NavLink>{" "}
                                </li>
                                <li
                                    className="dropdownLi"
                                    onClick={handleClick}>
                                    <NavLink to="/testimonials">
                                        {" "}
                                        <i className="fas fa-chalkboard-teacher"></i>{" "}
                                        Teacher parent testimonials
                                    </NavLink>
                                </li>
                                <li
                                    className="dropdownLi"
                                    onClick={handleClick}>
                                    <NavLink to="/virtualtour">
                                        <i className="fas fa-video"></i> Take a
                                        virtual tour
                                    </NavLink>{" "}
                                </li>
                                <li
                                    className="dropdownLi"
                                    onClick={handleClick}>
                                    <NavLink to="/food">
                                        <i className="fas fa-apple-alt"></i>{" "}
                                        Food and nutrition
                                    </NavLink>{" "}
                                </li>
                                <li
                                    className="dropdownLi"
                                    onClick={handleClick}>
                                    <NavLink to="/ourapproach">
                                        {" "}
                                        <i className="fas fa-pencil-ruler"></i>{" "}
                                        Our approach to education
                                    </NavLink>
                                </li>
                                <li
                                    className="dropdownLi"
                                    onClick={handleClick}>
                                    <NavLink to="/community">
                                        <i className="fas fa-user-friends"></i>{" "}
                                        Community involvement
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <div
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}>
                                PROGRAMS
                                <i className="fa fa-caret-down"></i>{" "}
                            </div>
                            <ul className="dropdownUl">
                                <li
                                    className="dropdownLi"
                                    onClick={handleClick}>
                                    <NavLink to="/infants">
                                        <i className="fas fa-baby"> </i> Infants
                                    </NavLink>
                                </li>
                                <li
                                    className="dropdownLi"
                                    onClick={handleClick}>
                                    <NavLink to="/toddler">
                                        {" "}
                                        <i className="fa fa-child"> </i>{" "}
                                        Toddlers
                                    </NavLink>
                                </li>
                                <li
                                    className="dropdownLi"
                                    onClick={handleClick}>
                                    <NavLink to="/preschool">
                                        {" "}
                                        <i className="fas fa-book-reader">
                                            {" "}
                                        </i>{" "}
                                        Pre-School
                                    </NavLink>
                                </li>

                                <li
                                    className="dropdownLi"
                                    onClick={handleClick}>
                                    <NavLink to="/schoolage">
                                        <i className="fas fa-graduation-cap"></i>{" "}
                                        School Age
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <div
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}>
                                CURRICULUM<i className="fa fa-caret-down"></i>
                            </div>
                            <ul className="dropdownUl">
                                <li
                                    className="dropdownLi"
                                    onClick={handleClick}>
                                    <NavLink to="/curriculum">
                                        <i className="fas fa-book"></i> Creative
                                        Curriculum
                                    </NavLink>
                                </li>
                                <li
                                    className="dropdownLi"
                                    onClick={handleClick}>
                                    <NavLink to="/cincyafterschool">
                                        {" "}
                                        <i className="fas fa-school"></i> Cincy
                                        After School{" "}
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <div
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}>
                                RESOURCES<i className="fa fa-caret-down"></i>
                            </div>
                            <ul className="dropdownUl">
                                <li
                                    className="dropdownLi"
                                    onClick={handleClick}>
                                    <NavLink to="/childcare">
                                        <i className="fas fa-dollar-sign"></i>{" "}
                                        Child Care Cost
                                    </NavLink>
                                </li>
                                <li
                                    className="dropdownLi"
                                    onClick={handleClick}>
                                    <NavLink to="/tuition">
                                        <i className="fas fa-money-bill-wave"></i>{" "}
                                        How to Pay Tuition
                                    </NavLink>
                                </li>
                                <li
                                    className="dropdownLi"
                                    onClick={handleClick}>
                                    <NavLink to="/updateagreement">
                                        {" "}
                                        <i className="fas fa-handshake"></i>{" "}
                                        Update Your Agreement
                                    </NavLink>
                                </li>
                                <li
                                    className="dropdownLi"
                                    onClick={handleClick}>
                                    <NavLink to="/centerclosure">
                                        <i className="fas fa-school"></i> Center
                                        Closure
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/gallery"
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}>
                                GALLERY
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/career"
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}>
                                CAREER
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a
                                href="https://alis.care"
                                target="_blank"
                                activeclassname="active"
                                className="nav-links"
                                onClick={handleClick}>
                                {" "}
                                PAY TUITION
                            </a>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i
                            className={
                                click ? "fas fa-times" : "fas fa-bars"
                            }></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
