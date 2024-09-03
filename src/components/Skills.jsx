import React from "react";
import {
  FaHtml5,
  FaReact,
  FaJava,
  FaPython,
  FaNode,
  FaCss3,
  FaGit,
} from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

import { MdJavascript } from "react-icons/md";
import {
  BiLogoFlutter,
  BiLogoTailwindCss,
  BiLogoMongodb,
} from "react-icons/bi";
import { RiSvelteFill } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";

// import { ReactComponent as SocketIo } from "../assets/socket.svg";

import Skill from "./Skill";
function Skills() {
  const ICON_SIZE = 100;
  const skills = [
    {
      icon: <FaReact size={ICON_SIZE} />,
      name: "React",
    },
    {
      icon: <FaJava size={ICON_SIZE} />,
      name: "Java",
    },
    {
      icon: <FaNode size={ICON_SIZE} />,
      name: "Node.js",
    },
    {
      icon: <span className="text-8xl">C#</span>,
      name: "C Sharp",
    },
    {
      icon: <FaHtml5 size={ICON_SIZE} />,
      name: "HTML5",
    },
    {
      icon: <BiLogoFlutter size={ICON_SIZE} />,
      name: "Flutter",
    },

    {
      icon: <FaPython size={ICON_SIZE} />,
      name: "Python",
    },

    {
      icon: <BiLogoTailwindCss size={ICON_SIZE} />,
      name: "Tailwind CSS",
    },

    {
      icon: <FaCss3 size={ICON_SIZE} />,
      name: "CSS3",
    },

    {
      icon: <MdJavascript size={ICON_SIZE} />,
      name: "JavaScript",
    },
    {
      icon: <BiLogoMongodb size={ICON_SIZE} />,
      name: "MongoDB",
    },

    {
      icon: <FaGit size={ICON_SIZE} />,
      name: "Git",
    },
    {
      icon: <AiOutlineDotNet size={ICON_SIZE} />,
      name: "Dot Net",
    },
    {
      icon: <RiSvelteFill size={ICON_SIZE} />,
      name: "Svelte",
    },
    {
      icon: <SiPostgresql size={ICON_SIZE} />,
      name: "SQL",
    },
    {
      icon: <span className="text-7xl">C</span>,
      name: "Objective C",
    },
    // {
    //   icon: <SocketIo className="text-white" />,
    //   name: "Socket.Io",
    // },
  ];

  return (
    <div className="grid gap-y-20 lg:grid-cols-4 sm:grid-cols-2 mt-20 justify-items-center mb-20">
      {skills.map((skill) => {
        return <Skill icon={skill.icon} name={skill.name} />;
      })}
    </div>
  );
}

export default Skills;
