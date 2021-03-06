import React from "react";
import "./App.css";
import TrialBtn from "./Components/Trial";
import DemoBtn from "./Components/Demo";

function CTABottom() {
  return (
    <div id="ctabottom">
      <div className="text">
        <h1>Try now, decide later</h1>
        <div className="trial-features">
          <p>✓ 14 days trial</p>
          <p>✓ Easy set-up</p>
          <p>✓ No credit card required</p>
        </div>
      </div>
      <div className="CTA">
        <TrialBtn />
        <DemoBtn />
      </div>
    </div>
  );
}

export default CTABottom;
