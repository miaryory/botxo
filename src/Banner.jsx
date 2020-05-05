import React from "react";
import "./App.css";

function Banner() {
  return (
    <div id="banner">
      <h3>AI Chatbots</h3>
      <h1>Build a bot to engage customers and boost sales</h1>
      <h2>Let your new AI chatbot be your 1st line support, 24/7</h2>
      <div className="CTA">
        <button className="pink-btn trial" type="submit">
          Start Trial
        </button>
        <button className="white-btn demo" type="submit">
          Book Demo
        </button>
      </div>
    </div>
  );
}

export default Banner;
