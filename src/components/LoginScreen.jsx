import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    if (email === "marry@gmail.com" && password === "password") {
      navigate("/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div
      className="login-form p-4 border rounded shadow-sm"
      style={{ maxWidth: "400px", width: "100%" }}
    >
      <h1 className="h3 mb-3 font-weight-normal text-center">
        Sign in to your PopX account
      </h1>
      <p className="text-muted text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <form onSubmit={handleLogin}>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="marry@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <hr className="mb-4" />

        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
