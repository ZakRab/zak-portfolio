import React from "react";
import { motion } from "framer-motion";
import { skills } from "./Skills.jsx";
import { Tooltip } from "react-tooltip";

function Experience({
  title,
  company,
  startDate,
  endDate,
  description,
  techStack,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex flex-col border-white mb-12">
        <h2 className="text-3xl font-semibold ">
          {company} • {title}
        </h2>
        <h4 className="text-2xl font-light text-gray-400">
          {startDate} - {endDate}
        </h4>

        <div className="mt-3 font-medium flex gap gap-x-3">
          {techStack.map((item) => {
            return (
              <>
                <a
                  className="text-4xl"
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
        {description.map((desc) => (
          <p className="text-xl mt-4 text-gray-100">{desc}</p>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
