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
import { MdJavascript } from "react-icons/md";
import {
  BiLogoFlutter,
  BiLogoTailwindCss,
  BiLogoMongodb,
} from "react-icons/bi";
import { motion } from "framer-motion";
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
      icon: <span className="text-7xl">.Net</span>,
      name: "Dot Net",
    },
    {
      icon: <span className="text-7xl">Svelte</span>,
      name: "Svelte",
    },
    {
      icon: <span className="text-7xl">SQL</span>,
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
    <section
      id="skills"
      name="skills"
      className="flex flex-col lg:px-40 sm:px-10 pt-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        whileInView={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-bold">Skills</h1>
      </motion.div>
      <div className="grid gap-y-20 lg:grid-cols-4 sm:grid-cols-2 mt-20 justify-items-center mb-20">
        {skills.map((skill) => {
          return <Skill icon={skill.icon} name={skill.name} />;
        })}
      </div>
    </section>
  );
}

export default Skills;
