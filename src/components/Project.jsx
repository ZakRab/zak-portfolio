import React from "react";
import { motion } from "framer-motion";
import { skills } from "./Skills.jsx";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

export function Project({ title, description, techStack, githubLink, image }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className=" p-6 rounded-lg"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col gap-y-4 "
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-3xl font-semibold">{title}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img className="rounded-lg " src={image} alt={image}></img>
          </motion.div>

          <hr className="mb-5"></hr>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className=" font-medium flex gap gap-x-3">
              {techStack.map((item) => {
                return (
                  <>
                    <a
                      className="text-5xl"
                      data-tooltip-id="project-tooltip"
                      data-tooltip-content={item}
                    >
                      {skills[item]}
                    </a>
                    <Tooltip id="project-tooltip" />
                  </>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl">{description}</p>
          </motion.div>
        </a>
      </motion.div>
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
    <div className="max-w-4xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/tawasul">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
            <p className="text-4xl font-semibold">{title}</p>
            <img
              className="rounded-lg my-10 border-2 border-gray-500"
              src={image}
              alt={image}
            />
            <div className="flex flex-col gap-y-4 ">
              <div className="flex w-full justify-between">
                <div className="text-5xl font-medium flex gap gap-x-3">
                  {techStack.map((item) => {
                    return skills[item];
                  })}
                </div>
              </div>
              <p className="text-xl mt-4">{description}</p>
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}
