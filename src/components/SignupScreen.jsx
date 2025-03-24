import React from "react";

const SignupScreen = () => {
  return (
    <div>
      <div
        className="signup-form p-4 border rounded shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h1 className="h3 mb-3 font-weight-normal text-center">
          Create your PopX account
        </h1>

        <form>
          <div className="form-group mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name*
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Marry Doe"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone number*
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder="Marry Doe"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Email address*
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Marry Doe"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">
              Password*
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Marry Doe"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="companyName" className="form-label">
              Company name
            </label>
            <input
              type="text"
              className="form-control"
              id="companyName"
              placeholder="Marry Doe"
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label">Are you an Agency?*</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="agencyYes"
                  name="agency"
                  value="yes"
                  required
                />
                <label htmlFor="agencyYes" className="form-check-label">
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  id="agencyNo"
                  name="agency"
                  value="no"
                  required
                />
                <label htmlFor="agencyNo" className="form-check-label">
                  No
                </label>
              </div>
            </div>
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupScreen;
