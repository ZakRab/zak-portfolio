import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function Intro() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = `${process.env.PUBLIC_URL}/assets/images/NiobraraTrip2024.png`;
    img.onload = () => {
      setImage(`${process.env.PUBLIC_URL}/assets/images/NiobraraTrip2024.png`);
    };
  }, []);

  return (
    <div id="Intro" className="relative h-screen w-full">
      {image && (
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
          src={image}
          alt="Niobrara Trip 2024"
        />
      )}
      <div className="relative z-10 h-screen w-full flex flex-col justify-end text-white bg-black  bg-opacity-5 gap-8">
        <div className="text-center">
          <a
            className="text-4xl sm:text-8xl"
            href="https://hearmyname.net/say/ca-es/Zakaria"
          >
            ZAKARIA
          </a>
        </div>
        <div className="flex justify-center">
          <p className="font-semibold text-xl sm:text-3xl">
            Full-Stack and Mobile Software Engineer
          </p>
        </div>
        <a href="#Personal Projects" className="w-full flex justify-center">
          <MdKeyboardArrowDown size={100} className="sm:size-100" />
        </a>
      </div>
      <div className="h-screen w-full"></div>
    </div>
  );
}

export default Intro;
