import React from "react";
import logo from "./Images/logo.png";
import "./App.css";
import Banner from "./Banner";
import Features from "./Features";
import Installation from "./Installation";
import CTABottom from "./CTABottom";
import SocialProof from "./SocialProof";
import Pricing from "./Pricing";

function App() {
  return (
    <>
      <header>
        <a href="https://www.botxo.ai/">
          <img id="logo" src={logo} alt="BotXO Logo" />
        </a>
        <div className="navigation">
          <a href="#features">Features</a>
          <a href="#installation">Get Started</a>
          <a href="#pricing">Pricing</a>
        </div>
      </header>
      <main>
        <Banner />
        <Features />
        <Installation />
        <Pricing />
        <SocialProof />
        <CTABottom />
      </main>
      <footer>
        <p>
          Contact Sales:<a href="mailto:sales@botxo.co">sales@botxo.co</a>or +45
          26 71 58 45
        </p>
        <p>
          Contact Support:
          <a href="mailto:support@botxo.zendesk.com">
            support@botxo.zendesk.com
          </a>
        </p>
        <a href="https://www.botxo.ai/privacy/">Privacy</a>
        <a href="https://www.botxo.ai/data-policy/">Data Policy</a>
        <a href="https://www.botxo.ai/terms/">Terms</a>
      </footer>
    </>
  );
}

export default App;
