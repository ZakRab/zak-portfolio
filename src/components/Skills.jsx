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
import { MdJavascript, MdCode } from "react-icons/md";
import {
  BiLogoFlutter,
  BiLogoTailwindCss,
  BiLogoMongodb,
} from "react-icons/bi";
import { ReactComponent as SocketIo } from "../assets/socket.svg";

import Skill from "./Skill";
function Skills() {
  const ICON_SIZE = 100;
  const skills = [
    {
      icon: <FaHtml5 size={ICON_SIZE} />,
      name: "HTML5",
    },
    {
      icon: <FaGit size={ICON_SIZE} />,
      name: "Git",
    },
    {
      icon: <FaJava size={ICON_SIZE} />,
      name: "Java",
    },
    {
      icon: <FaPython size={ICON_SIZE} />,
      name: "Python",
    },
    {
      icon: <FaReact size={ICON_SIZE} />,
      name: "React",
    },
    {
      icon: <BiLogoTailwindCss size={ICON_SIZE} />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNode size={ICON_SIZE} />,
      name: "Node.js",
    },
    {
      icon: <FaCss3 size={ICON_SIZE} />,
      name: "CSS3",
    },
    {
      icon: <BiLogoFlutter size={ICON_SIZE} />,
      name: "Flutter",
    },
    {
      icon: <MdJavascript size={ICON_SIZE} />,
      name: "JavaScript",
    },
    {
      icon: <MdCode size={ICON_SIZE} />,
      name: "Code",
    },
    {
      icon: <BiLogoMongodb size={ICON_SIZE} />,
      name: "MongoDB",
    },
    {
      icon: <span className="text-5xl">SQL</span>,
      name: "SQL",
    },
    // {
    //   icon: <SocketIo className="text-white" />,
    //   name: "Socket.Io",
    // },
  ];

  return (
    <section
      id="skills"
      name="skills"
      className="flex flex-col lg:px-40 sm:px-10 pt-20"
    >
      <h1 className="text-5xl font-medium">Skills</h1>
      <div className="grid gap-y-20 lg:grid-cols-4 sm:grid-cols-2 mt-20 justify-items-center mb-20">
        {skills.map((skill) => {
          return <Skill icon={skill.icon} name={skill.name} />;
        })}
      </div>
    </section>
  );
}

export default Skills;
