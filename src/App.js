import React from "react";
import logo from "./logo.png";
import "./App.css";
import Banner from "./Banner";
import Features from "./Features";
import Installation from "./Installation";

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
      </main>
      <footer></footer>
    </>
  );
}

export default App;
