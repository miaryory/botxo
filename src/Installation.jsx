import React from "react";
import "./App.css";
import Step from "./step.png";

function Installation() {
  return (
    <div id="installation">
      <h1>Get started easily</h1>
      <div className="step">
        <div className="text">
          <h2>Step 1 Lorem ipsum dolor</h2>
          <p>
            Start with our templates and use our prebuilt domains and intents
            (topics and questions). Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum eros felis, porta ut porttitor eu,
            volutpat et libero. Mauris facilisis augue in imperdiet consectetur.
          </p>
        </div>
        <img src={Step} alt="Installation" />
      </div>
      <div className="step step-mobile">
        <div className="text">
          <h2>Step 2 Lorem ipsum dolor</h2>
          <p>
            Launch your bot within days. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum eros felis, porta ut porttitor eu,
            volutpat et libero. Mauris facilisis augue in imperdiet consectetur.
          </p>
        </div>
        <img src={Step} alt="Installation" />
      </div>
      <div className="step step-desktop">
        <img src={Step} alt="Installation" />
        <div className="text">
          <h2>Step 2 Lorem ipsum dolor</h2>
          <p>
            Launch your bot within days. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum eros felis, porta ut porttitor eu,
            volutpat et libero. Mauris facilisis augue in imperdiet consectetur.
          </p>
        </div>
      </div>
      <div className="step">
        <div className="text">
          <h2>Step 3 Lorem ipsum dolor</h2>
          <p>
            Prove a business case within weeks. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vestibulum eros felis, porta ut
            porttitor eu, volutpat et libero. Mauris facilisis augue in
            imperdiet consectetur.
          </p>
        </div>
        <img src={Step} alt="Installation" />
      </div>
    </div>
  );
}

export default Installation;
