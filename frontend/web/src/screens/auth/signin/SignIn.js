import React, { useState } from "react";
import '../../../scss/auth.scss'

function SignIn() {
  

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;

    try {
      const response = await fetch("/signin/SignIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
      }

      // Sign-in successful
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
            {error && <div>{error}</div>}
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
            />
            <button type="submit">Sign In</button>
            <button>Forgot password?</button>
            </form>
        </div>
    </div>
  );
}

export default SignIn;
