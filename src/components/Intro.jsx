import React, { useEffect, useState } from "react";
import ParallaxText from "./ParallaxText.jsx";
import { MdKeyboardArrowDown } from "react-icons/md";
function Intro() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = `${process.env.PUBLIC_URL}/assets/images/NiobraraTrip2024.png`;
    img.onload = () => {
      setImage(`${process.env.PUBLIC_URL}/assets/images/NiobraraTrip2024.png`); // Set the loaded image to state
    };
  }, []);

  return (
    <div id="Intro">
      {image && (
        <img
          className="fixed h-full rounded-lg"
          src={image}
          alt="Niobrara Trip 2024"
        />
      )}
      <div className="h-screen w-full flex flex-col text-white fixed">
        <div className="h-2/3"></div>
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
          className="absolute w-full flex justify-center bottom-10 right-5"
        >
          <MdKeyboardArrowDown size={100} />
        </a>
      </div>
      <div className="h-screen w-full "></div>
    </div>
  );
}

export default Intro;
