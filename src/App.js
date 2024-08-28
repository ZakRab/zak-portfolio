import "./App.css";
import Experiences from "./components/Experiences.jsx";
import Intro from "./components/Intro.jsx";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div>
      <AnimatedCursor
        innerSize={10} // Size of the inner cursor dot
        outerSize={20} // Size of the outer cursor dot
        color="193, 11, 111" // Color of the cursor in RGB
        outerAlpha={0.2} // Transparency of the outer cursor dot
        innerScale={0.7} // Scale of the inner dot on hover/click
        outerScale={5} // Scale of the outer dot on hover/click
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
      <main className="w-full bg-slate-900 text-white font-serif">
        <Intro />
        <div className="z-50 bg-slate-900 absolute">
          <Skills />
          <Experiences />
          <Projects />
        </div>
      </main>
    </div>
  );
}

export default App;
