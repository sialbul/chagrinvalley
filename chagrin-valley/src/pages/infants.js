import React from "react";
import Baby from "../images/infant.jpg";
import Baby2 from "../images/infants.png";

export default function Infants() {
    return (
        <div>
            <container>
                <div id="infantContainer">
                    <p class="infantHeader"> Infants </p>
                    <div id="infantContainer2">
                        <div id="infantFirstPart">
                            <img
                                id="infantBaby3"
                                src={Baby}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                            />
                        </div>
                        <div>
                            <p data-aos="fade-down" data-aos-duration="2000">
                                We at Chagrin Valley ELC know how much your
                                little one means to you.That is why we have
                                created a safe and nurturing environment in
                                which your little one can explore both
                                themselves and their world.We understand how
                                hard it is to juggle career and family
                                especially when worrying about an infant.
                                <br />
                                CVELC offers a home - like experience where we
                                work with each child’ s individual schedule and
                                meet their needs accordingly.
                                <br />A shoe - free environment keeps their
                                little hands and mouth safe from germs and dirt
                                while they discover the world.With the
                                combination of first rate care and loving
                                caregivers, CVELC is the next best thing to
                                home!
                            </p>{" "}
                        </div>
                        <div>
                            <p data-aos="fade-down" data-aos-duration="2000">
                                <span id="headSmall">
                                    <i
                                        class="fa fa-clock-o"
                                        aria-hidden="true"
                                        fa-lg></i>
                                    Sample of the Daily Schedule
                                </span>{" "}
                                <br />
                                <i class="fa fa-star" aria-hidden="true">
                                    {" "}
                                </i>
                                We do not have an infant schedule because we
                                feel that infants should be talked to and played
                                with on their own schedules, but we transition
                                16 months old infants on cots and once a day
                                naps to prepare them for the Toddler room.
                                <br />
                                <i class="fa fa-star" aria-hidden="true">
                                    {" "}
                                </i>
                                We feel that infants should be fed when they are
                                hungry, sleep when they are tired, and they
                                should be changed and clean. They should be
                                rocked, held, sung to, and read to when they are
                                awake.
                                <br />
                                <i class="fa fa-star" aria-hidden="true">
                                    {" "}
                                </i>
                                Infants need words, songs, rhymes, language
                                development, exercise / stimulation, colorful
                                things and black and white pictures.Infants need
                                love and enjoyment every day. <br />
                                <i class="fa fa-star" aria-hidden="true">
                                    {" "}
                                </i>
                                Diapering Policy is to change every 2 hours,
                                unless needed.{" "}
                            </p>{" "}
                        </div>
                        <div>
                            <img
                                id="infantBaby2"
                                src={Baby2}
                                data-aos="fade-down"
                                data-aos-duration="2000"
                            />
                        </div>
                    </div>
                </div>
            </container>
        </div>
    );
}
