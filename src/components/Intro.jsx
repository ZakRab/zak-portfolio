import React from "react";
import ParallaxText from "./ParallaxText.jsx";
import { motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";
function Intro() {
  return (
    <motion.div>
      <div className="h-screen w-full flex flex-col justify-center fixed">
        <ParallaxText baseVelocity={0.5}>
          <span className="text-8xl">Zakaria Rab</span>
        </ParallaxText>
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="flex justify-center">
            <p className="font-semibold text-3xl mt-16">
              Full-Stack and Mobile Software Engineer
            </p>
          </div>
        </motion.div>
        <a
          href="#experiences"
          className="bottom-5 absolute w-full flex justify-center"
        >
          <MdKeyboardArrowDown size={100} />
        </a>
      </div>
      <div className="h-screen"></div>
    </motion.div>
  );
}

export default Intro;
