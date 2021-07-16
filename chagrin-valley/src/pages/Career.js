import React, { Component } from "react";

export default class Career extends Component {
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
                <form>
                    <label for="name">Name:</label>
                    <input type="name" placeholder="Name"></input>
                    <br />
                    <label for="surname">Surname:</label>
                    <input type="surname" placeholder="Surname"></input>
                    <br />
                    <label for="emails">Email addresses:</label>
                    <input type="email" placeholder="Email address"></input>
                    <br />
                    <label for="phone">Phone number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="123-456-78-90"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"></input>
                    <br />
                    <label for="myfile">Select a file:</label>
                    <input type="file" id="myfile" name="myfile"></input>
                    <br />
                    <br />
                    <label for="area">Please specify an Area of Interest</label>
                    <select name="area" id="area">
                        <option value="assistant">Assistant Teacher</option>
                        <option value="cook">Cook</option>
                        <option value="driver">Driver</option>
                        <option value="lead">Lead Teacher</option>
                        <option value="manager">School Management</option>
                    </select>
                    <br />
                    <br />
                    <textarea rows="4" cols="50" name="comment" form="usrform">
                        Enter text here...
                    </textarea>
                    <br />
                    <input type="submit"></input>
                </form>
            </div>
        );
    }
}
