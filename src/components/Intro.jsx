import React from "react";
import ParallaxText from "./ParallaxText.jsx";
import { motion } from "framer-motion";

function Intro() {
  return (
    <motion.div>
      <div className="h-screen flex flex-col justify-center fixed">
        <ParallaxText baseVelocity={2}>
          <span className="text-8xl">Zakaria Rab</span>
        </ParallaxText>
        <ParallaxText baseVelocity={-2}>
          <span className="text-8xl"> Rab Zakaria </span>
        </ParallaxText>
        <motion.div>
          <div className="flex ml-20 mt-20">
            <p className="font-semibold text-3xl">
              Full-Stack and Mobile Software Engineer
            </p>
          </div>
        </motion.div>
      </div>
      <div className="h-screen flex flex-col justify-center"></div>
    </motion.div>
  );
}

export default Intro;
