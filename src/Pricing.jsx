import React from "react";
import "./App.css";

function Pricing() {
  return (
    <div id="pricing">
      <h1>Our pricing</h1>
      <p>
        Simple, flexible pricing options. Suited to how you want to buy.
        <br /> Pay as you go or let us reward you for the extra commitment.
      </p>

      <div className="pricing-tables">
        <div className="enterprise pricing-plan">
          <div className="pricing-header">
            <h2>BotXO Enterprise</h2>
            <p>We know enterprises have unique requirements.</p>
          </div>
          <p className="price">3000</p>
          <p>/month</p>
          <div className="features">
            <p>All essential features +</p>
            <p>5 live* bots</p>
            <p>500.000 chats** / month</p>
            <p>Platform User Roles</p>
            <p>Analytics API</p>
            <p>Conversational AI API</p>
            <p>Advanced Monitoring</p>
            <p>Single-Sign-On</p>
            <p>Enterprise terms, SLA and guaranteed uptime</p>
          </div>
        </div>

        <div className="business pricing-plan">
          <div className="pricing-header">
            <h2>BotXO Business</h2>
            <p>When it is time to do more.</p>
          </div>
          <p className="price">800</p>
          <p>/month</p>
          <div className="features">
            <p>All essential features +</p>
            <p>3 live* bots</p>
            <p>Unlimited chats</p>
            <p>Platform User Roles</p>
            <p>Analytics API</p>
            <p>Conversational AI API</p>
            <p>-</p>
            <p>-</p>
            <p>Standard terms</p>
          </div>
        </div>

        <div className="essential pricing-plan">
          <div className="pricing-header">
            <h2>BotXO Essential</h2>
            <p>Start simple and scale when ready.</p>
          </div>
          <p className="price">500</p>
          <p>/month</p>
          <div className="features">
            <p>All essential features</p>
            <p>1 live* bot</p>
            <p>Unlimited chats</p>
            <p>1 Admin User</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>Standard terms</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
