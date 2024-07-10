import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateAuth } from '../redux/slices/loginAuth';


const Login = () => {

    const dispatch = useDispatch();

    const url = "http://localhost:3001/api/v1/login"
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        let user = {
            email, password
        }
        fetch(url, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) =>  res.json())
        .then((data) => {
            if(data.success === true){
                toast.success("Login Successfully")
                navigate("/meals")
                dispatch(updateAuth(true));
            } else {
                if(data.success === false && data.message === "No User Exists"){
                    toast.error(data.message)
                    navigate("/signup")
                } else {
                    toast.error(data.message)
                }
                dispatch(updateAuth(false));
            }
        })
    }

return (
    <div className='w-full h-[50vh] max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <form onSubmit={handleSubmit}>
            <h5 class="text-xl font-medium text-gray-900 dark:text-white mb-5">Login To Book Meals</h5>
            <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor="">Email: </label>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' type="email" id='email' placeholder='Enter Your Email..' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2' htmlFor="password">Password: </label>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white' type="password" id='password' placeholder='Enter Your Password..' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className='mt-5 mb-3'>
                <input className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type="submit" />
            </div>
            <p className='text-sm text-end font-medium text-gray-500 dark:text-gray-300'>Don't Have a Account? <span className='text-blue-700 hover:underline dark:text-blue-500'><Link to={"/signup"}>SignUp</Link></span> </p>
        </form>
    </div>
)}

export default Login