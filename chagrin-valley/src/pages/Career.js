import React, { Component } from "react";

export default class Career extends Component {
    addFunction() {
        let x = document.getElementById("area").options;
        let y = document.getElementById("area").selectedIndex;
        let selectedArea = document.getElementById("selectedArea");
        selectedArea.innerHTML = x[y].text;
    }

    render() {
        return (
            <div id="pageContainer">
                <h2> Join our team!</h2>
                <p>
                    We are hiring all positions! We are looking to grow our team
                    of child care and preschool educators with people who share
                    our passion for early childhood education and who are
                    committed to providing world class service! Under new
                    leadership, we are committed to being an employer of choice
                    in Ohio. Come grow with us!
                </p>
                <form id="careerForm">
                    <label for="name">Name & Surname</label>
                    <input type="name" placeholder="Name"></input>
                    <br />
                    <br />
                    <label for="emails">Email addresses:</label>
                    <input type="email" placeholder="Email address"></input>
                    <br />
                    <br />

                    <label for="phone">Phone number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="123-456-78-90"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"></input>
                    <br />
                    <br />

                    <label for="myfile">Upload your resume</label>
                    <br />
                    <input type="file" id="myfile" name="myfile"></input>
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
                    <button
                        id="formButton2"
                        type="button"
                        onClick={this.addFunction}>
                        Add
                    </button>

                    <div id="selectedArea"></div>
                    <br />
                    <label for="message">Your message</label>
                    <br />

                    <textarea
                        rows="4"
                        cols="50"
                        name="comment"
                        form="usform"
                        placeholder="Your message"></textarea>
                    <br />
                    <br />
                    <input id="formButton" type="submit"></input>
                </form>
            </div>
        );
    }
}
