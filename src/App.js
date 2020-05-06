import React from "react";
import logo from "./logo.png";
import "./App.css";
import Banner from "./Banner";
import Features from "./Features";
import Installation from "./Installation";
import CTABottom from "./CTABottom";
import SocialProof from "./SocialProof";

function App() {
  return (
    <>
      <header>
        <img id="logo" src={logo} alt="BotXO Logo" />
        <div className="navigation">
          <a href="#features">Features</a>
          <a href="#installation">Installation</a>
          <a href="#pricing">Pricing</a>
        </div>
      </header>
      <main>
        <Banner />
        <Features />
        <Installation />
        <SocialProof />
        <CTABottom />
      </main>
      <footer>
        <a href="https://www.botxo.ai/privacy/">Privacy</a>
        <a href="https://www.botxo.ai/data-policy/">Data Policy</a>
        <a href="https://www.botxo.ai/terms/">Terms</a>
      </footer>
    </>
  );
}

export default App;
