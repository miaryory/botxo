import React from "react";
import "./App.css";
let listOfImages = [];

class SocialProof extends React.Component {
  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    listOfImages = this.importAll(
      require.context("./Companies/", false, /\.(png|jpe?g|svg)$/)
    );
  }
  render() {
    return (
      <div id="socialproof">
        <h1>You're in good company</h1>
        <div className="all-logos">
          {listOfImages.map((image, index) => (
            <img
              key={index}
              className="company-logo"
              src={image}
              alt="info"
            ></img>
          ))}
        </div>
      </div>
    );
  }
}

export default SocialProof;
