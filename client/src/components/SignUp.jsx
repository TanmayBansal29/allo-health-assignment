import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

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
            toast.success("Registered Successfully")
            navigate("/")
        } else {
            toast.error(data.message)
        }
    });
    }

return (
<form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6  bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Register</h2>
    <div className="flex mb-4">
        <div className="w-1/2 mr-2">
            <label htmlFor="firstName" className="block text-gray-900 dark:text-white font-bold mb-2">First Name:</label>
            <input
                type="text"
                id="firstName"
                placeholder="Enter First Name..."
                onChange={(e) => setFirstName(e.target.value)}
                className="px-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
        </div>
        <div className="w-1/2 ml-2">
            <label htmlFor="lastName" className="block text-gray-900 dark:text-white font-bold mb-2">Last Name:</label>
            <input
                type="text"
                id="lastName"
                placeholder="Enter Last Name..."
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 border bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
        </div>
    </div>
    <div className="mb-4">
        <label htmlFor="email" className="block text-gray-900 dark:text-white font-bold mb-2">Email:</label>
        <input
            type="email"
            id="email"
            placeholder="Enter Email..."
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-gray-50 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
    </div>
    <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-gray-900 dark:text-white font-bold mb-2">Phone Number:</label>
        <input
            type="text"
            id="phoneNumber"
            placeholder="Enter Phone Number..."
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-gray-50 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
    </div>
    <div className="mb-4">
        <label htmlFor="password" className="block text-gray-900 dark:text-white font-bold mb-2">Password:</label>
        <input
            type="password"
            id="password"
            placeholder="Enter Password..."
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md bg-gray-50 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        />
    </div>
    <div>
        <input
            type="submit"
            value="Submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        />
    </div>
    <div className="mt-4 text-center text-gray-500 dark:text-gray-300">
        Already have an account? <Link to="/" className="text-blue-500 hover:underline">Login</Link>
    </div>
</form>
    );
};

export default SignUp;
