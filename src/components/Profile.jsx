import React from "react";

const Profile = () => {
  return (
    <div>
      <div
        className="profile-page p-4"
        style={{
          maxWidth: "600px",
          width: "100%",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <h1 className="h3 mb-3 font-weight-normal text-center">
          Account Settings
        </h1>
        <div className="text-center">
          <h2>Marry Doe</h2>
          <p>Marry@gmail.com</p>
        </div>
        <p className="text-center">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitz, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Profile;
