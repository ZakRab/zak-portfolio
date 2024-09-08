import React from "react";
import Experiences from "./Experiences.jsx";
import Intro from "./Intro.jsx";
import Skills from "./Skills";
import Projects from "./Projects";
import Navigation from "./Navigation.jsx";
import Section from "./Section.jsx";
import AnimatedCursor from "react-animated-cursor";

function Main() {
  return (
    <div className="font-serif">
      <AnimatedCursor
        innerSize={10} // Size of the inner cursor dot
        outerSize={20} // Size of the outer cursor dot
        color="255, 255, 255" // Color of the cursor in RGB
        outerAlpha={0.2} // Transparency of the outer cursor dot
        innerScale={0.7} // Scale of the inner dot on hover/click
        outerScale={3} // Scale of the outer dot on hover/click
        innerStyle={{
          borderRadius: "30%", // Makes the inner cursor square
          backgroundColor: "rgb(255, 255, 255)", // Color the square (optional, same as `color`)
        }}
        outerStyle={{
          borderRadius: "30%", // Makes the outer cursor square
          border: "2px solid rgb(255, 255, 255)", // Border to define the outer square
        }}
        clickables={[
          "a",
          {
            target: "a", // Custom class for additional styles
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "255, 255, 255",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />
      <Navigation />
      <main className="w-full bg-slate-800 text-white">
        <Intro />
        <div className="z-40 bg-slate-700 absolute pt-28">
          <Section title={"Personal Projects"} body={Projects}></Section>
          <Section title={"Experiences"} body={Experiences}></Section>
          <Section title={"Skills"} body={Skills}></Section>
        </div>
      </main>
    </div>
  );
}

export default Main;
