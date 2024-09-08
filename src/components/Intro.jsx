import React from "react";
import ParallaxText from "./ParallaxText.jsx";
import { MdKeyboardArrowDown } from "react-icons/md";
function Intro() {
  return (
    <div
      id="Intro"
      className="sm:hidden md:contents "
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/images/NiobraraTrip2024.jpg"
        })`,
      }}
    >
      <div className="h-screen w-full flex flex-col  fixed">
        <div className=" h-2/3"></div>
        <ParallaxText baseVelocity={0.5}>
          <span className="text-8xl">Zakaria Rab</span>
        </ParallaxText>
        <div className="flex justify-center">
          <p className="font-semibold text-3xl mt-16">
            Full-Stack and Mobile Software Engineer
          </p>
        </div>
        <a
          href="#Personal Projects"
          className="absolute w-full flex justify-center bottom-5 right-5"
        >
          <MdKeyboardArrowDown size={100} />
        </a>
      </div>
      <div
        className="h-screen w-full "
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/NiobraraTrip2024.png"
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>
    </div>
  );
}

export default Intro;
