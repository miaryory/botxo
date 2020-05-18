import React from "react";
import "./App.css";
import Step from "./step.png";

function Installation() {
  return (
    <div id="installation">
      <h1>Get started easily</h1>
      <div className="step">
        <div className="text">
          <h2>Start with our templates</h2>
          <p>
            and use our prebuilt domains and intents (topics and questions).
          </p>
        </div>
        <img src={Step} alt="Installation" />
      </div>
      <div className="step step-mobile">
        <div className="text">
          <h2>Launch your bot</h2>
          <p>within days.</p>
        </div>
        <img src={Step} alt="Installation" />
      </div>
      <div className="step step-desktop">
        <img src={Step} alt="Installation" />
        <div className="text">
          <h2>Launch your bot</h2>
          <p>within days.</p>
        </div>
      </div>
      <div className="step">
        <div className="text">
          <h2>Prove a business</h2>
          <p>case within weeks.</p>
        </div>
        <img src={Step} alt="Installation" />
      </div>
    </div>
  );
}

export default Installation;
