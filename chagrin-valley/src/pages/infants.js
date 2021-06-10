import React from "react";
import Baby from "../images/infant.jpg";
import Baby2 from "../images/infants.png";

export default function Infants() {
    return (
        <div>
            <container id="InfantContainer">
                <p class="sectionHeader"> INFANTS </p>
                <img src={Baby2} />
                <p>
                    We at Chagrin Valley ELC know how much your little one means
                    to you.That is why we have created a safe and nurturing
                    environment in which your little one can explore both
                    themselves and their world.We understand how hard it is to
                    juggle career and family especially when worrying about an
                    infant.CVELC offers a home - like experience where we work
                    with each child’ s individual schedule and meet their needs
                    accordingly.A shoe - free environment keeps their little
                    hands and mouth safe from germs and dirt while they discover
                    the world.With the combination of first rate care and loving
                    caregivers, CVELC is the next best thing to home!
                </p>{" "}
                <img src={Baby} />
                <p>
                    Sample of the Daily Schedule We do not have an infant
                    schedule because we feel that infants should be talked to
                    and played with on their own schedules, but we transition 16
                    months old infants on cots and once a day naps to prepare
                    them for the Toddler room.We feel that infants should be fed
                    when they are hungry, sleep when they are tired, and they
                    should be changed and clean.They should be rocked, held,
                    sung to, and read to when they are awake.Infants need words,
                    songs, rhymes, language development, exercise / stimulation,
                    colorful things and black and white pictures.Infants need
                    love and enjoyment every day.Diapering Policy is to change
                    every 2 hours, unless needed.{" "}
                </p>{" "}
            </container>
        </div>
    );
}
