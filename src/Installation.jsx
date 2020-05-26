import React from "react";
import "./App.css";
import Step from "./step.png";
import Step1 from "./Images/interface.svg";

function Installation() {
  return (
    <div id="installation">
      <h1>Get started easily</h1>
      <div className="step">
        <div className="text">
          <h2>I’m not a developer, will I still be able to build a bot?</h2>
          <p>
            Yes! The BotXO Platform is simple, intuitive and doesn’t need any
            coding.
            <br /> Use our pre-built TEMPLATES to get started immediately. Add
            the ready-made and fully functional domains and intents (topics),
            that we built specifically for your industry. Then customize as you
            go.
          </p>
        </div>
        <img src={Step1} alt="Installation" />
      </div>
      <div className="step step-mobile">
        <div className="text">
          <h2>
            How do I avoid customers churning, when support isn’t available?
          </h2>
          <p>
            AI chatbots that never sleep: real-time, 24/7 support
            <br /> Meet the demand for 24/7 support with an AI chatbot that
            replies immediately, so you won’t lose sight of any customer
            requests. Watch resolution time decrease and customer satisfaction
            increase.
          </p>
        </div>
        <img src={Step} alt="Installation" />
      </div>
      <div className="step step-desktop">
        <img src={Step} alt="Installation" />
        <div className="text">
          <h2>
            How do I avoid customers churning, when support isn’t available?
          </h2>
          <p>
            AI chatbots that never sleep: real-time, 24/7 support
            <br /> Meet the demand for 24/7 support with an AI chatbot that
            replies immediately, so you won’t lose sight of any customer
            requests. Watch resolution time decrease and customer satisfaction
            increase.
          </p>
        </div>
      </div>
      <div className="step">
        <div className="text">
          <h2>How can AI chatbots help me boost customer engagement?</h2>
          <p>
            Send push notifications with our Broadcasting Tool.
            <br /> With our Broadcasting Tool you can send push notifications to
            your customers on Facebook Messenger related to e.g. product
            updates, news, events, deals and discounts etc. Pro tip: automate
            this process with our Broadcasting API and use the Filter Tool to
            target push notifications to specific segments.
          </p>
        </div>
        <img src={Step} alt="Installation" />
      </div>
    </div>
  );
}

export default Installation;
