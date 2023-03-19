import React, { useState } from "react";
import '../../../scss/auth.scss'
import { signin_api } from "../../../services";



function SignIn() {
  
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {

    event.preventDefault();
    
    let email = event.target.email.value;

    let password = event.target.password.value;

    // if(email.length === 0 || password.length === 0) {

    //   setError(true)
    // }
    try {
      // http://127.0.0.1:8000/auth/login/
     let result = await signin_api(email,password);
     console.log("result: ",result)
     alert(result.message)
      // Sign-in successful
    } catch (error) {

      setError(error.message);

    }
  };

  return (
    <div>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
            {/* {error && <div>{error}</div>} */}
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                required
            />
            {error?
            <span> Invalid Email Adress </span>:''}
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
            <button><a href="/signup">register</a></button>
            </form>
        </div>
    </div>
  );
}

export default SignIn;
