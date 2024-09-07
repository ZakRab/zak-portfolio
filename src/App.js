import "./App.css";
import Experiences from "./components/Experiences.jsx";
import Intro from "./components/Intro.jsx";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AnimatedCursor from "react-animated-cursor";
import Navigation from "./components/Navigation.jsx";
import Section from "./components/Section.jsx";
function App() {
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

export default App;
