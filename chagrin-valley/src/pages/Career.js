import React, { useState } from "react";

export default function Career() {
    const addFunction = () => {
        let x = document.getElementById("area").options;
        let y = document.getElementById("area").selectedIndex;
        let selectedArea = document.getElementById("selectedArea");
        selectedArea.innerHTML = x[y].text;
    };
    return (
        <div id="pageContainer">
            <h2> Join our team!</h2>
            <p>
                We are hiring all positions! We are looking to grow our team of
                child care and preschool educators with people who share our
                passion for early childhood education and who are committed to
                providing world class service! Under new leadership, we are
                committed to being an employer of choice in Ohio. Come grow with
                us!
            </p>
            <form
                id="careerForm"
                action="https://formsubmit.co/sbaslamisli@yahoo.com"
                method="POST"
                enctype="multipart/form-data">
                <label for="name">Name & Surname</label>
                <input
                    type="name"
                    placeholder="Name"
                    id="name"
                    name="name"
                    required></input>
                <br />
                <br />
                <label for="emails">Email addresses:</label>
                <input
                    type="email"
                    placeholder="Email address"
                    required
                    id="name"
                    name="email"></input>
                <br />
                <br />

                <label for="phone">Phone number:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="123-456-78-90"></input>
                <br />
                <br />

                <label for="myfile">Upload your resume</label>
                <br />
                <input type="file" id="myfile" name="attachment"></input>
                <br />
                <br />

                <label for="area">Please specify an Area of Interest</label>
                <br />

                <select name="area" id="area">
                    <option value="assistant">Assistant Teacher</option>
                    <option value="cook">Cook</option>
                    <option value="driver">Driver</option>
                    <option value="lead">Lead Teacher</option>
                    <option value="manager">School Management</option>
                    <option value="general">General</option>
                </select>
                <button id="formButton2" type="button" onClick={addFunction}>
                    Add
                </button>

                <div id="selectedArea"></div>
                <br />
                <label for="messageSection">Your message</label>
                <br />

                <textarea
                    rows="4"
                    cols="50"
                    name="message"
                    id="message"
                    placeholder="Your message"></textarea>
                <br />
                <br />
                <input
                    type="hidden"
                    name="_next"
                    value="https://chagrinvalley.herokuapp.com/thankyou"
                />

                <input id="formButton" type="submit"></input>
                <input id="invisibleText" type="text" name="_honey"></input>
                <input type="hidden" name="_template" value="table"></input>
                <input type="hidden" name="_captcha" value="false"></input>
                <input
                    type="hidden"
                    name="_autoresponse"
                    value="Thank you for your apply!"></input>
            </form>
        </div>
    );
}
