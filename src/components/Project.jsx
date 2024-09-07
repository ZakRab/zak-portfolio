import React from "react";
import { motion } from "framer-motion";
export function Project({ title, description, techStack, githubLink }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <a
        href={githubLink}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col gap-y-4 "
      >
        <p className="text-3xl font-semibold">{title}</p>
        {/* <p className="text-2xl mt-2 font-medium">
          {techStack.map((item) => item + " ")}
        </p> */}
        <p className="text-xl mt-4">{description}</p>
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
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <img src={require(image)} alt="tawasul project pic"></img>
      <a
        href={githubLink}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col gap-y-4 "
      >
        <p className="text-3xl font-semibold">{title}</p>
        <p className="text-xl mt-4">{description}</p>
      </a>
    </motion.div>
  );
}
