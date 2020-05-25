import React from "react";
import "./App.css";
import TrialBtn from "./Components/Trial";
import DemoBtn from "./Components/Demo";
import Bubble from "./Icons/bubble.svg";

function Banner() {
  return (
    <div id="banner">
      <img id="chat-bubble" src={Bubble} alt="Chat bubble" />
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
