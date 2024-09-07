import React from "react";
import { motion } from "framer-motion";
import { skills } from "./Skills.jsx";
export function Project({ title, description, techStack, githubLink, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className=" p-6 rounded-lg"
    >
      <a
        href={githubLink}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col gap-y-4 "
      >
        <p className="text-3xl font-semibold">{title}</p>
        <img className="rounded-lg mb-3" src={image} alt={image}></img>
        <hr></hr>
        <div className="text-2xl mt-2 font-medium flex gap gap-x-3">
          {techStack.map((item) => {
            return skills[item];
          })}
        </div>
        <p className="text-xl mt-2">{description}</p>
      </a>
    </motion.div>
  );
}

export function FeaturedProject({
  title,
  description,
  techStack,
  githubLink,
  image,
}) {
  return (
    <motion.div>
      <img
        className="rounded-lg mb-10 border-2 border-gray-500"
        src={image}
        alt={image}
      ></img>
      <a
        href={githubLink}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col gap-y-4 "
      >
        <p className="text-4xl font-semibold">{title}</p>
        <p className="text-2xl mt-4">{description}</p>
      </a>
    </motion.div>
  );
}
