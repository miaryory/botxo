import React from "react";
import "./App.css";
import TrialBtn from "./Components/Trial";
import DemoBtn from "./Components/Demo";

function Banner() {
  return (
    <div id="banner">
      <h3>AI Chatbots</h3>
      <h1>
        Build a bot to engage customers
        <br /> and boost sales
      </h1>
      <h2>Let your new AI chatbot be your 1st line support, 24/7</h2>
      <div className="CTA">
        <TrialBtn />
        <DemoBtn />
      </div>
    </div>
  );
}

export default Banner;
