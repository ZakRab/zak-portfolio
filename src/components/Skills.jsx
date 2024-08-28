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
function Skills() {
  const ICON_SIZE = 100;
  return (
    <section id="skills" name="skills" className="flex flex-col px-40 pt-20">
      <h1 className="text-5xl font-medium">Skills</h1>
      <div className="grid  gap-y-28 grid-cols-4 mt-20 justify-items-center mb-20">
        <FaHtml5 className="" size={ICON_SIZE} />
        <FaGit size={ICON_SIZE} />
        <FaJava size={ICON_SIZE} />
        <FaPython size={ICON_SIZE} />
        <FaReact size={ICON_SIZE} />
        <BiLogoTailwindCss size={ICON_SIZE} />
        <FaNode size={ICON_SIZE} />
        <FaCss3 size={ICON_SIZE} />
        <BiLogoFlutter size={ICON_SIZE} />
        <MdJavascript size={ICON_SIZE} />
        <MdCode size={ICON_SIZE} />
        <BiLogoMongodb size={ICON_SIZE} />
      </div>
    </section>
  );
}

export default Skills;
