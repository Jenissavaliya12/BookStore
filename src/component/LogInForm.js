import React, { useState } from "react";
import "./LogInForm.css";
function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailOnChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordOnChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email:${email} Password:${password}`);
  };
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailOnChange}
          placeholder="Enter your email"
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordOnChange}
          placeholder="Enter your password"
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default LogInForm;
