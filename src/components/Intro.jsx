import React from "react";
import ParallaxText from "./ParallaxText.jsx";
import { motion } from "framer-motion";

function Intro() {
  return (
    <motion.div>
      <div className="h-screen w-full flex flex-col justify-center fixed">
        <ParallaxText baseVelocity={2}>
          <span className="text-8xl">Zakaria Rab</span>
        </ParallaxText>
        <ParallaxText baseVelocity={-2}>
          <span className="text-8xl"> Rab Zakaria </span>
        </ParallaxText>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="flex justify-center">
            <p className="font-semibold text-3xl mt-3">
              Full-Stack and Mobile Software Engineer
            </p>
          </div>
          <div>
            <p className="font-semibold text-3xl mt-3 text-center">
              React | React Native | Node.js | Express | MongoDB
            </p>
          </div>
        </motion.div>
      </div>
      <div className="h-screen"></div>
    </motion.div>
  );
}

export default Intro;
