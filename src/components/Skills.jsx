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

import {
  SiPostgresql,
  SiSocketdotio,
  SiSupabase,
  SiJavascript,
  SiDart,
  SiBootstrap,
  SiExpress,
  SiMui,
  SiDjango,
  SiCsharp,
} from "react-icons/si";
import {
  BiLogoFlutter,
  BiLogoTailwindCss,
  BiLogoMongodb,
} from "react-icons/bi";
import { RiSvelteFill } from "react-icons/ri";
import { AiOutlineDotNet } from "react-icons/ai";
import Skill from "./Skill";
const ICON_SIZE = 90;

export const skills = {
  React: <FaReact size={ICON_SIZE} />,
  Java: <FaJava size={ICON_SIZE} />,
  "Node.js": <FaNode size={ICON_SIZE} />,
  "C Sharp": <SiCsharp size={ICON_SIZE} />,
  HTML5: <FaHtml5 size={ICON_SIZE} />,
  Flutter: <BiLogoFlutter size={ICON_SIZE} />,
  Python: <FaPython size={ICON_SIZE} />,
  "Tailwind CSS": <BiLogoTailwindCss size={ICON_SIZE} />,
  CSS3: <FaCss3 size={ICON_SIZE} />,
  JavaScript: <SiJavascript size={ICON_SIZE} />,
  MongoDB: <BiLogoMongodb size={ICON_SIZE} />,
  Git: <FaGit size={ICON_SIZE} />,
  "Dot Net": <AiOutlineDotNet size={ICON_SIZE} />,
  Svelte: <RiSvelteFill size={ICON_SIZE} />,
  SQL: <SiPostgresql size={ICON_SIZE} />,
  C: <span className="text-7xl">C</span>,
  "Socket.io": <SiSocketdotio size={ICON_SIZE} />,
  Supabase: <SiSupabase size={ICON_SIZE} />,
  Dart: <SiDart size={ICON_SIZE} />,
  Bootstrap: <SiBootstrap size={ICON_SIZE} />,
  Express: <SiExpress size={ICON_SIZE} />,
  "Material UI": <SiMui size={ICON_SIZE} />,
  Django: <SiDjango size={ICON_SIZE} />,
};
function Skills() {
  return (
    <div className="grid gap-y-20 lg:grid-cols-6 sm:grid-cols-3 mt-20 justify-items-center mb-20">
      {Object.keys(skills).map((skill) => {
        return <Skill icon={skills[skill]} name={skill} />;
      })}
    </div>
  );
}

export default Skills;
