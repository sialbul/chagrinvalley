import React, { Component } from "react";
import "../style/style.css";
import Header from "./Header";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.headerRef = React.createRef();
    }

    //Header hide-when scroll down and display again
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = (event) => {
        var currentScrollPos = window.pageYOffset;

        if (currentScrollPos > 20) {
            // I am using 'display' instead of 'top':
            this.headerRef.current.style.display = "none";
        } else {
            this.headerRef.current.style.display = "flex";
        }
    };

    render() {
        return (
            <div>
                <header ref={this.headerRef} id="topHeader">
                    <div id="navPhone">
                        <a href="tel:440-338-4499">
                            {" "}
                            <i
                                className="fa fa-phone"
                                aria-hidden="true"></i>{" "}
                            440-338-4499{" "}
                        </a>
                    </div>
                    <div>
                        <a href="mailto:chagrinvalleyelc@gmail.com">
                            <i
                                className="fa fa-envelope"
                                aria-hidden="true"></i>
                            chagrinvalleyelc@gmail.com{" "}
                        </a>
                    </div>
                    <div className="infoPart">
                        <a
                            href="https://goo.gl/maps/zVDAv5Z19iRNArEi9"
                            target="_blank">
                            <i className="fa fa-map" aria-hidden="true"></i>{" "}
                            5188 Chillicothe Rd, Chagrin Falls, OH 44022
                        </a>
                    </div>

                    <div>
                        <a
                            href="https://www.instagram.com/chagrinvalleyearlylc/"
                            target="_blank">
                            {" "}
                            <i
                                className="fab fa-instagram"
                                id="headerSocial"></i>{" "}
                        </a>
                        <a
                            href="https://m.facebook.com/chagrinvalleyelc/"
                            target="_blank">
                            <i
                                className="fab fa-facebook"
                                id="headerSocial"></i>
                        </a>
                        <i className="fab fa-linkedin-in" id="headerSocial"></i>
                    </div>
                </header>

                <Header />
            </div>
        );
    }
}
