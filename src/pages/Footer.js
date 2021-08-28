import React from "react";
import Logo from "../assets/photo-gallery/chagrinvalley3.png";

export default function footer() {
    return (
        <div>
            <div className="contactSection">
                <div
                    className="phoneNumberSection"
                    data-aos="fade-right"
                    data-aos-delay="50">
                    <div className="faPart">
                        {" "}
                        <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div className=" infoPart ">
                        <h2>CALL TODAY</h2>
                        <h2>
                            <a href="tel:440-338-4499">440-338-4499</a>
                        </h2>
                    </div>
                </div>
                <div
                    className="adressSection"
                    data-aos="fade-right"
                    data-aos-delay="100">
                    <div className="faPart">
                        {" "}
                        <i className="fa fa-map" aria-hidden="true"></i>
                    </div>
                    <div className="infoPart">
                        <h2>OUR ADDRESS</h2>

                        <a
                            href="https://goo.gl/maps/zVDAv5Z19iRNArEi9"
                            target="_blank">
                            <h2>
                                5188 Chillicothe Rd, Chagrin Falls, OH 44022
                            </h2>
                        </a>
                    </div>
                </div>
                <div
                    className="emailSection"
                    data-aos="fade-right"
                    data-aos-delay="150">
                    <div className="faPart">
                        {" "}
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div className="infoPart">
                        <h2>EMAIL US</h2>
                        <h2>
                            {" "}
                            <a href="mailto:chagrinvalleyelc@gmail.com">
                                chagrinvalleyelc@gmail.com
                            </a>
                        </h2>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <a href="#" className="logo">
                    <img src={Logo} />
                </a>
                <p>
                    {" "}
                    &#xA9; 2021
                    <a href="mailto:sbaslamisli@yahoo.com">
                        M.Sibel Baslamisli.
                    </a>
                    All rights reserved.
                </p>
            </footer>
        </div>
    );
}
