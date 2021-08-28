import React, { useState } from "react";

class Career extends React.Component {
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
                <form
                    id="careerForm"
                    action="https://formsubmit.co/chagrinvalleyelc@gmail.com"
                    method="POST"
                    encType="multipart/form-data"
                    onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name & Surname</label>
                    <input
                        type="name"
                        placeholder="Name"
                        id="name"
                        name="name"
                        required></input>
                    <br />
                    <br />
                    <label htmlFor="emails">Email addresses:</label>
                    <input
                        type="email"
                        placeholder="Email address"
                        required
                        id="name"
                        name="email"></input>
                    <br />
                    <br />

                    <label htmlFor="phone">Phone number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        size="20"
                        minLength="9"
                        placeholder="123-456-78-90"></input>
                    <br />
                    <br />

                    <label htmlFor="myfile">Upload your resume</label>
                    <br />
                    <input type="file" id="myfile" name="attachment"></input>
                    <br />
                    <br />

                    <label htmlFor="area">
                        Please specify an Area of Interest
                    </label>
                    <br />

                    <select name="area" id="area">
                        <option value="assistant">Assistant Teacher</option>
                        <option value="cook">Cook</option>
                        <option value="driver">Driver</option>
                        <option value="lead">Lead Teacher</option>
                        <option value="general">General</option>
                    </select>

                    <br />
                    <br />
                    <label htmlFor="messageSection">Your message</label>
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
                        value="https://chagrinvalleyearlylearningcenter.com/thankyou"
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
}
export default Career;
