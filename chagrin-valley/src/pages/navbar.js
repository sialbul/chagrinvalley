import React, { Component } from "react";
import "../style/style.css";
import Logo from "../images/chagrinvalley3.png";

export default class Navbar extends Component {
    //navbar
    mainNav = document.getElementById("js-menu");
    navBarToggle = document.getElementById("js-navbar-toggle");
    if(navBarToggle) {
        navBarToggle.addEventListener("click", function () {
            mainNav.classList.toggle("active");

            const icon = this.querySelector("i");

            if (icon.classList.contains("fa-bars")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    }

    //Header hide-when scroll down and display again
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll(event) {
        var currentScrollPos = window.pageYOffset;

        if (currentScrollPos > 20) {
            // I am using 'display' instead of 'top':
            document.getElementById("topHeader").style.display = "none";
        } else {
            document.getElementById("topHeader").style.display = "flex";
        }
    }

    render() {
        return (
            <div>
                <header id="topHeader">
                    <div>
                        <i class="fa fa-phone" aria-hidden="true"></i> (440) 338
                        44 99
                    </div>
                    <div>
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <a href="mailto:info@cvelc.com">info@cvelc.com</a>
                    </div>
                    <div class="infoPart">
                        <i class="fa fa-map" aria-hidden="true"></i> 5188
                        Chillicothe Rd, Chagrin Falls, OH 44022
                    </div>

                    <div>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                </header>
                <nav class="navbar">
                    <span class="navbar-toggle" id="js-navbar-toggle">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </span>
                    <a href="../index.html" class="logo">
                        <img src={Logo} />
                    </a>
                    <ul class="main-nav" id="js-menu">
                        <li>
                            <a href="" class="nav-links">
                                OUR CENTER
                            </a>
                            <ul>
                                <li>
                                    <a href="./howToEnroll.html">
                                        {" "}
                                        <i class="fas fa-edit"></i> How to
                                        Enroll
                                    </a>
                                </li>
                                <li>
                                    <a href="./teacherParent.html">
                                        {" "}
                                        <i class="fas fa-chalkboard-teacher"></i>{" "}
                                        Teacher parent testimonials
                                    </a>
                                </li>
                                <li>
                                    <a href="./virtualTour.html">
                                        <i class="fas fa-video"></i> Take a
                                        virtual tour
                                    </a>
                                </li>
                                <li>
                                    <a href="./food.html">
                                        <i class="fas fa-apple-alt"></i> Food
                                        and nutrition
                                    </a>
                                </li>
                                <li>
                                    <a href="./ourApproach.html">
                                        {" "}
                                        <i class="fas fa-pencil-ruler"></i> Our
                                        approach to education
                                    </a>
                                </li>
                                <li>
                                    <a href="./community.html">
                                        <i class="fas fa-user-friends"></i>{" "}
                                        Community involvement
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="nav-links">
                                PROGRAMS
                            </a>
                            <ul>
                                <li>
                                    <a href="./infants.html">
                                        {" "}
                                        <i class="fas fa-baby"> </i> Infants
                                    </a>
                                </li>
                                <li>
                                    <a href="./toddler.html">
                                        {" "}
                                        <i class="fa fa-child"> </i> Toddlers
                                    </a>
                                </li>
                                <li>
                                    <a href="./preschool.html">
                                        {" "}
                                        <i class="fas fa-book-reader"> </i>{" "}
                                        Pre-School
                                    </a>
                                </li>
                                <li>
                                    <a href="./schoolage.html">
                                        <i class="fas fa-graduation-cap"></i>{" "}
                                        School Age
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="nav-links">
                                CURRICULUM
                            </a>
                            <ul>
                                <li>
                                    <a href="./curriculum.html">
                                        <i class="fas fa-book"></i> Creative
                                        Curriculum
                                    </a>
                                </li>
                                <li>
                                    <a href="./buildingBridges.html">
                                        <i class="fas fa-archway"></i> Building
                                        Bridges
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" class="nav-links">
                                RESOURCES
                            </a>
                            <ul>
                                <li>
                                    <a href="./childCare.html">
                                        <i class="fas fa-dollar-sign"></i> Child
                                        Care Cost
                                    </a>
                                </li>
                                <li>
                                    <a href="./tuition.html">
                                        <i class="fas fa-money-bill-wave"></i>{" "}
                                        How to Pay Tuition
                                    </a>
                                </li>
                                <li>
                                    <a href="./updateAgreement.html">
                                        {" "}
                                        <i class="fas fa-handshake"></i> Update
                                        Your Agreement
                                    </a>
                                </li>
                                <li>
                                    <a href="./centerClosure.html">
                                        <i class="fas fa-school"></i> Center
                                        Closure
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="./gallery.html" class="nav-links">
                                GALLERY
                            </a>
                        </li>

                        <li>
                            <a href="./contact.html" class="nav-links">
                                CONTACT US
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-links">
                                PAY TUITION
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
