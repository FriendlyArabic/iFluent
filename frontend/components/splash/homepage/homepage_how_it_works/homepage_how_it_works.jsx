import React from "react";
import HowItWorks from "./how_it_works";

const HomePageHowItWorks = props => {
  return (
    <div className="homepage-how-works">
      <h1 className="how-it-works-title">
        <span>How does it work?</span>
      </h1>
      <HowItWorks />
      <div className="homepage-bottom-gray"></div>
    </div>
  );
};

export default HomePageHowItWorks;
