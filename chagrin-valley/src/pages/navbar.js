import React, { Component } from "react";
import "../style/style.css";
import { NavLink } from "react-router-dom";
import Header from "./Header";

export default class Navbar extends Component {
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
                        <i className="fa fa-phone" aria-hidden="true"></i> (440)
                        338 44 99
                    </div>
                    <div>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <a href="mailto:info@cvelc.com">info@cvelc.com</a>
                    </div>
                    <div className="infoPart">
                        <i className="fa fa-map" aria-hidden="true"></i> 5188
                        Chillicothe Rd, Chagrin Falls, OH 44022
                    </div>

                    <div>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                </header>

                <Header />
            </div>
        );
    }
}
