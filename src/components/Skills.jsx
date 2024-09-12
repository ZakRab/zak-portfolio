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
import { Tooltip } from "react-tooltip";

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
const frontend = [
  "Flutter",
  "React",
  "Svelte",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
];
const backend = [
  "Node.js",
  "SQL",
  "Supabase",
  "Dot Net",
  "Express",
  "MongoDB",
  "Socket.io",
  "Django",
];
const languages = ["Java", "JavaScript", "Dart", "C Sharp", "Python", "C"];
function Skills() {
  return (
    <div className="flex flex-col">
      <SkillsSection heading="Frontend" sectionSkills={frontend} />
      <SkillsSection heading={"Backend"} sectionSkills={backend} />
      <SkillsSection heading={"Languages"} sectionSkills={languages} />
    </div>
  );
}

function SkillsSection({ heading, sectionSkills }) {
  return (
    <div className="mb-10">
      <div className="text-3xl">{heading}</div>
      <div className="flex flex-wrap justify-around">
        {sectionSkills.map((sectionSkill) => {
          return (
            <>
              <a
                data-tooltip-id="skills-tooltip"
                data-tooltip-content={sectionSkill}
              >
                <Skill icon={skills[sectionSkill]} />
              </a>
              <Tooltip id="skills-tooltip" place="bottom-start" />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
