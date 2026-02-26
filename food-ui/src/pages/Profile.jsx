import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/auth.css";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <>
        <Navbar />
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          No User Logged In
        </h2>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="profile-container">
        <div className="profile-wrapper">

          {/* LEFT PROFILE CARD */}
          <div className="profile-card">
            <div className="profile-avatar">
              {user.firstName
                ? user.firstName.charAt(0)
                : user.name?.charAt(0)}
            </div>

            <h3>
              {user.firstName
                ? `${user.firstName} ${user.lastName}`
                : user.name}
            </h3>

            <p>{user.email}</p>
            <p>{user.location || "Location not set"}</p>
          </div>

          {/* RIGHT SECTIONS */}
          <div className="profile-sections">

            <div className="profile-section">
              <h4>Your Preferences</h4>
              <ul>
                <li>Show Personalised Ratings</li>
                <li>Appearance</li>
                <li>Payment Method</li>
              </ul>
            </div>

            <div className="profile-section">
              <h4>Food Delivery</h4>
              <ul>
                <li>Your Orders</li>
                <li>Address Book</li>
                <li>Your Collection</li>
                <li>Manage Recommendation</li>
                <li>Hidden Restaurants</li>
              </ul>
            </div>

            <div className="profile-section">
              <h4>Dining & Experience</h4>
              <ul>
                <li>Your Dining Transaction</li>
                <li>Your Dining Rewards</li>
                <li>Your Booking</li>
                <li>Dining Help</li>
                <li>Claim Invite Code</li>
              </ul>
            </div>

            <div className="profile-section">
              <h4>Gift Cards & Credits</h4>
              <ul>
                <li>Buy Gift Card</li>
                <li>Claim Gift Card</li>
              </ul>
            </div>

            <div className="profile-section">
              <h4>More</h4>
              <ul>
                <li>Your Feedback</li>
                <li>About</li>
                <li>Send Feedback</li>
                <li>Accessibility</li>
                <li>Settings</li>
                <li
                  onClick={() => {
                    localStorage.removeItem("user");
                    window.location.href = "/login";
                  }}
                >
                  Logout
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Profile;