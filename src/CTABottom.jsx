import React from "react";
import "./App.css";

function CTABottom() {
  return (
    <div id="ctabottom">
      <div className="text">
        <h1>Try now, decide later</h1>
        <p>✓ 14 days trial ✓ Easy set-up ✓ No credit card required</p>
      </div>
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

export default CTABottom;
