import React from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import Logo from "../images/chagrinvalley3.png";
import { NavLink } from "react-router-dom";

import "../style/style.css";
class Header extends React.Component {
    myFunction() {
        let x = document.getElementById("myTopnav");
        let navFas = document.getElementById("iconNavFas");

        if (x.className === "topnav") {
            x.className += " responsive";
            navFas.classList = "fas fa-times";
        } else {
            x.className = "topnav";
            navFas.classList = "fas fa-bars";
        }
    }
    render() {
        return (
            <div className="topnav" id="myTopnav">
                <div className="logo">
                    {" "}
                    <NavLink to="/">
                        {" "}
                        <img src={Logo} />
                    </NavLink>
                </div>
                <div className="navLinks">
                    <div className="dropdown">
                        <button className="dropbtn">
                            OUR CENTER <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a>
                                <NavLink to="/howtoenroll">
                                    {" "}
                                    <i className="fas fa-edit"></i> How to
                                    Enroll
                                </NavLink>
                            </a>
                            <a>
                                <NavLink to="/testimonials">
                                    {" "}
                                    <i className="fas fa-chalkboard-teacher"></i>{" "}
                                    Teacher parent testimonials
                                </NavLink>
                            </a>
                            <a>
                                {" "}
                                <NavLink to="/virtualtour">
                                    <i className="fas fa-video"></i> Take a
                                    virtual tour
                                </NavLink>
                            </a>
                            <a>
                                <NavLink to="/food">
                                    <i className="fas fa-apple-alt"></i> Food
                                    and nutrition
                                </NavLink>
                            </a>
                            <a>
                                <NavLink to="/ourapproach">
                                    {" "}
                                    <i className="fas fa-pencil-ruler"></i> Our
                                    approach to education
                                </NavLink>
                            </a>
                            <a>
                                <NavLink to="/community">
                                    <i className="fas fa-user-friends"></i>{" "}
                                    Community involvement
                                </NavLink>
                            </a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">
                            {" "}
                            PROGRAMS
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a>
                                <NavLink to="/infants">
                                    <i className="fas fa-baby"> </i> Infants
                                </NavLink>
                            </a>
                            <a>
                                {" "}
                                <NavLink to="/toddler">
                                    {" "}
                                    <i className="fa fa-child"> </i> Toddlers
                                </NavLink>
                            </a>
                            <a>
                                {" "}
                                <NavLink to="/preschool">
                                    {" "}
                                    <i className="fas fa-book-reader"> </i>{" "}
                                    Pre-School
                                </NavLink>
                            </a>
                            <a>
                                <NavLink to="/schoolage">
                                    <i className="fas fa-graduation-cap"></i>{" "}
                                    School Age
                                </NavLink>
                            </a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">
                            {" "}
                            CURRICULUM
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a>
                                <NavLink to="/curriculum">
                                    <i className="fas fa-book"></i> Creative
                                    Curriculum
                                </NavLink>
                            </a>
                            <a>
                                {" "}
                                <NavLink to="/cincyafterschool">
                                    <i className="fas fa-school"></i> Cincy
                                    After School{" "}
                                </NavLink>
                            </a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">
                            {" "}
                            RESOURCES
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a>
                                <NavLink to="/childcare">
                                    <i className="fas fa-dollar-sign"></i> Child
                                    Care Cost
                                </NavLink>
                            </a>
                            <a>
                                {" "}
                                <NavLink to="/tuition">
                                    <i className="fas fa-money-bill-wave"></i>{" "}
                                    How to Pay Tuition
                                </NavLink>
                            </a>
                            <a>
                                {" "}
                                <NavLink to="/updateagreement">
                                    {" "}
                                    <i className="fas fa-handshake"></i> Update
                                    Your Agreement
                                </NavLink>
                            </a>
                            <a>
                                {" "}
                                <NavLink to="/centerclosure">
                                    <i className="fas fa-school"></i> Center
                                    Closure
                                </NavLink>
                            </a>
                        </div>
                    </div>

                    <NavLink to="/gallery" className="nav-links">
                        GALLERY
                    </NavLink>

                    <a href="https://alis.care" target="_blank">
                        PAY TUITION
                    </a>
                    <a
                        href="javascript:void(0);"
                        className="iconNav"
                        onClick={this.myFunction}>
                        <i id="iconNavFas" className="fas fa-bars"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;
