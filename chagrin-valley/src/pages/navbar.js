import React, { Component } from "react";
import "../style/style.css";
import Header from "./Header";
import { Linking, Text } from "react-native";

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
                    <div id="navPhone">
                        <Text
                            onPress={() => {
                                Linking.openURL("tel:4403384499");
                            }}>
                            <i className="fa fa-phone" aria-hidden="true">
                                (440) 338 44 99
                            </i>{" "}
                        </Text>
                    </div>
                    <div>
                        <a href="mailto:info@cvelc.com">
                            <i
                                className="fa fa-envelope"
                                aria-hidden="true"></i>
                            info@cvelc.com
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
                        <i className="fab fa-instagram" id="headerSocial"></i>
                        <i className="fab fa-facebook" id="headerSocial"></i>
                        <i className="fab fa-linkedin-in" id="headerSocial"></i>
                    </div>
                </header>

                <Header />
            </div>
        );
    }
}
