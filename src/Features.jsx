import React from "react";
import "./App.css";
import IconReply from "./Icons/reply.svg";
import IconRecommendation from "./Icons/recommandation.svg";
import IconDatabase from "./Icons/database.svg";
import IconCrm from "./Icons/crm.svg";

function Features() {
  return (
    <div id="features">
      <h1>More than just a tool</h1>
      <p>Explore what we can do for you</p>
      <div className="all-features">
        <div className="one-feature">
          <img className="feature-icon" src={IconReply} alt="Feature Icon" />
          <p className="feature-description">
            Immediately answer the most common customer questions: I.e. delivery
            time, cost of delivery, product availability, special offers,
            payment methods, etc.
          </p>
        </div>
        <div className="one-feature">
          <img
            className="feature-icon"
            src={IconRecommendation}
            alt="Feature Icon"
          />
          <p className="feature-description">
            Provide personalized product recommendations to help customers make
            the right buying decision.
          </p>
        </div>
        <div className="one-feature">
          <img className="feature-icon" src={IconDatabase} alt="Feature Icon" />
          <p className="feature-description">
            The bot knows your products: connect it to your product database so
            it can always provide up to date information.
          </p>
        </div>
        <div className="one-feature">
          <img className="feature-icon" src={IconCrm} alt="Feature Icon" />
          <p className="feature-description">
            The bot knows about your customers: connect to your CRM to fetch
            information on their orders, returns and preferences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
