import React from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import Logo from "../assets/photo-gallery/chagrinvalley3.png";
import { NavLink } from "react-router-dom";

import "../style/style.css";
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.x = React.createRef();
        this.navFas = React.createRef();
    }

    myFunction = () => {
        if (this.x.current.className === "topnav") {
            this.x.current.className += " responsive";
            this.navFas.current.classList = "fas fa-times";
        } else {
            this.x.current.className = "topnav";
            this.navFas.current.classList = "fas fa-bars";
        }
    };

    closeNavBar = () => {
        this.x.current.className = "topnav a.iconNav ";
        this.navFas.current.classList = "fas fa-bars";
    };

    render() {
        return (
            <div className="insideNav">
                <div ref={this.x} className="topnav" id="myTopnav">
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
                                    <NavLink
                                        to="/howtoenroll"
                                        onClick={this.closeNavBar}>
                                        {" "}
                                        <i className="fas fa-edit"></i> How to
                                        Enroll
                                    </NavLink>
                                </a>
                                <a>
                                    <NavLink
                                        to="/testimonials"
                                        onClick={this.closeNavBar}>
                                        {" "}
                                        <i className="fas fa-chalkboard-teacher"></i>{" "}
                                        Teacher parent testimonials
                                    </NavLink>
                                </a>
                                <a>
                                    {" "}
                                    <NavLink
                                        to="/virtualtour"
                                        onClick={this.closeNavBar}>
                                        <i className="fas fa-video"></i> Take a
                                        virtual tour
                                    </NavLink>
                                </a>
                                <a>
                                    <NavLink
                                        to="/food"
                                        onClick={this.closeNavBar}>
                                        <i className="fas fa-apple-alt"></i>{" "}
                                        Food and nutrition
                                    </NavLink>
                                </a>
                                <a>
                                    <NavLink
                                        to="/ourapproach"
                                        onClick={this.closeNavBar}>
                                        {" "}
                                        <i className="fas fa-pencil-ruler"></i>{" "}
                                        Our approach to education
                                    </NavLink>
                                </a>
                                <a>
                                    <NavLink
                                        to="/community"
                                        onClick={this.closeNavBar}>
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
                                    <NavLink
                                        to="/infants"
                                        onClick={this.closeNavBar}>
                                        <i className="fas fa-baby"> </i> Infants
                                    </NavLink>
                                </a>
                                <a>
                                    {" "}
                                    <NavLink
                                        to="/toddler"
                                        onClick={this.closeNavBar}>
                                        {" "}
                                        <i className="fa fa-child"> </i>{" "}
                                        Toddlers
                                    </NavLink>
                                </a>
                                <a>
                                    {" "}
                                    <NavLink
                                        to="/preschool"
                                        onClick={this.closeNavBar}>
                                        {" "}
                                        <i className="fas fa-book-reader">
                                            {" "}
                                        </i>{" "}
                                        Pre-School
                                    </NavLink>
                                </a>
                                <a>
                                    <NavLink
                                        to="/schoolage"
                                        onClick={this.closeNavBar}>
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
                                    <NavLink
                                        to="/curriculum"
                                        onClick={this.closeNavBar}>
                                        <i className="fas fa-book"></i> Creative
                                        Curriculum
                                    </NavLink>
                                </a>
                                <a>
                                    {" "}
                                    <NavLink
                                        to="/cincyafterschool"
                                        onClick={this.closeNavBar}>
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
                                    <NavLink
                                        to="/childcare"
                                        onClick={this.closeNavBar}>
                                        <i className="fas fa-dollar-sign"></i>{" "}
                                        Child Care Cost
                                    </NavLink>
                                </a>
                                <a>
                                    {" "}
                                    <NavLink
                                        to="/tuition"
                                        onClick={this.closeNavBar}>
                                        <i className="fas fa-money-bill-wave"></i>{" "}
                                        How to Pay Tuition
                                    </NavLink>
                                </a>
                                <a>
                                    {" "}
                                    <NavLink
                                        to="/updateagreement"
                                        onClick={this.closeNavBar}>
                                        {" "}
                                        <i className="fas fa-handshake"></i>{" "}
                                        Update Your Agreement
                                    </NavLink>
                                </a>
                                <a>
                                    {" "}
                                    <NavLink
                                        to="/centerclosure"
                                        onClick={this.closeNavBar}>
                                        <i className="fas fa-school"></i> Center
                                        Closure
                                    </NavLink>
                                </a>
                            </div>
                        </div>

                        <NavLink
                            to="/gallery"
                            className="nav-links"
                            onClick={this.closeNavBar}>
                            GALLERY
                        </NavLink>
                        <NavLink
                            to="/career"
                            className="nav-links"
                            onClick={this.closeNavBar}>
                            CAREER
                        </NavLink>

                        <a
                            href="https://alis.care"
                            target="_blank"
                            onClick={this.closeNavBar}>
                            PAY TUITION
                        </a>
                        <a
                            href="javascript:void(0);"
                            className="iconNav"
                            onClick={this.myFunction}>
                            <i
                                ref={this.navFas}
                                id="iconNavFas"
                                className="fas fa-bars"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
