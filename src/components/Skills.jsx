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
  SiC,
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

export const skills = {
  React: <FaReact />,
  Java: <FaJava />,
  "Node.js": <FaNode />,
  "C Sharp": <SiCsharp />,
  HTML5: <FaHtml5 />,
  Flutter: <BiLogoFlutter />,
  Python: <FaPython />,
  "Tailwind CSS": <BiLogoTailwindCss />,
  CSS3: <FaCss3 />,
  JavaScript: <SiJavascript />,
  MongoDB: <BiLogoMongodb />,
  Git: <FaGit />,
  "Dot Net": <AiOutlineDotNet />,
  Svelte: <RiSvelteFill />,
  SQL: <SiPostgresql />,
  C: <SiC></SiC>,
  "Socket.io": <SiSocketdotio />,
  Supabase: <SiSupabase />,
  Dart: <SiDart />,
  Bootstrap: <SiBootstrap />,
  Express: <SiExpress />,
  "Material UI": <SiMui />,
  Django: <SiDjango />,
};
function Skills() {
  return (
    <div className="grid gap-y-20 lg:grid-cols-6 sm:grid-cols-3 mt-20 mb-20">
      {Object.keys(skills).map((skill) => {
        return <Skill icon={skills[skill]} />;
      })}
    </div>
  );
}

export default Skills;
