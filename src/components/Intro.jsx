import React from "react";
import ParallaxText from "./ParallaxText.jsx";

function Intro() {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center fixed">
        <ParallaxText baseVelocity={2}>
          <span className="text-8xl">Zakaria Rab</span>
        </ParallaxText>
        <ParallaxText baseVelocity={-2}>
          <span className="text-8xl"> Rab Zakaria </span>
        </ParallaxText>
      </div>
      <div className="h-screen flex flex-col justify-center"></div>
    </div>
  );
}

export default Intro;
