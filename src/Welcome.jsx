import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <div className="text-center mb-4">
        <h1 className="display-4 fw-bold">Welcome to PopX</h1>
        <p className="lead text-secondary fw-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="d-flex flex-column">
        <Link className="btn btn-primary mb-2 fw-bold" to="/signup">
          Create Account
        </Link>
        <Link className="btn btn-outline-primary fw-bold" to="/login">
          Already Registered? Login
        </Link>
      </div>
    </>
  );
}

export default Welcome;
