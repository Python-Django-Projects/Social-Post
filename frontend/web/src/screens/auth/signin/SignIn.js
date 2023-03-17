import React, { useState } from "react";
import '../../../scss/auth.scss'

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/signin", {
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Sign In</button>
            </form>
        </div>
    </div>
  );
}

export default SignIn;
