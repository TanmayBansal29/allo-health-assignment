import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

const url = "http://localhost:3001/api/v1/signup";

const handleSubmit = (event) => {
    event.preventDefault();
    let user = {
        firstName, lastName, email, phoneNumber, password
    };

    fetch(url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
        "Content-Type": "application/json",
        },
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.success === true){
            navigate("/")
        } else {
            alert(data.message)
        }
    });
    }

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="firstName">First Name: </label>
            <input
                type="text"
                id="firstName"
                placeholder="Enter First Name..."
                onChange={(e) => setFirstName(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="lastName">Last Name: </label>
            <input
                type="text"
                id="lastName"
                placeholder="Enter Last Name..."
                onChange={(e) => setLastName(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                id="email"
                placeholder="Enter Email..."
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="phoneNumber">Phone Number: </label>
            <input
                type="text"
                id="phoneNumber"
                placeholder="Enter Phone Number..."
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="password">Password: </label>
            <input
                type="text"
                id="password"
                placeholder="Enter Password..."
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div>
            <input type="submit" value="Submit" />
        </div>
    </form>
    );
};

export default SignUp;
