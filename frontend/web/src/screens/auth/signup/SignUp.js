import React, { useState } from "react";
import '../../../scss/auth.scss'
import { signup_api } from "../../../services";
import { Button, Form, Input } from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
// import "antd/dist/antd.css";


function signUp() {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {

    event.preventDefault();

    let username = event.target.username.value;
    
    let email = event.target.email.value;

    let password = event.target.password.value;



    // if(email.length === 0 || password.length === 0) {

    //   setError(true)
    // }
    try {
      // http://127.0.0.1:8000/auth/login/
     let result = await signup_api(username,email,password);
     console.log("result: ",result)
     alert(result.message)
      // Sign-in successful
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
    
            <form onSubmit={handleSubmit}>

            <label htmlFor="email">First Name:</label>
            <input
                type="email"
                id="email"
                required
            />
            {error?
            <span> Invalid First Name </span>:''}


            <label htmlFor="email">Last Name:</label>
            <input
                type="email"
                id="email"
                required
            />
            {error?
            <span> Invalid Last Name </span>:''}


            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                required
            />
            {error?
            <span> Invalid Last Name </span>:''}


            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                required
            />
            {error?
            <span> Invalid Password </span>:''}

            
            <button type="submit">Sign In</button>
            <button>Forgot password?</button>
            <Button type="primary">check me!</Button>
            <button><a href="/signup">register</a></button>
            </form>

        </div>
  );
}

export default signUp;
