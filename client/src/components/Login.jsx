import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    
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
                navigate("/meals")
            } else {
                if(data.success === false && data.message === "No User Exists"){
                    alert(data.message)
                    navigate("/signup")
                } else {
                    alert(data.message)
                }
            }
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">Email: </label>
            <input type="email" id='email' placeholder='Enter Your Email..' onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id='password' placeholder='Enter Your Password..' onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
            <input type="submit" />
        </div>
    </form>
  )
}

export default Login