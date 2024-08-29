import React from "react";
import { motion } from "framer-motion";
function Experience({ title, company, startDate, endDate, description }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex flex-col border-white mb-16">
        <h2 className="text-3xl font-semibold ">
          {title} • {company}
        </h2>
        <h4 className="text-2xl mt-2">
          {startDate} - {endDate}
        </h4>
        <p className="text-xl mt-4">{description}</p>
      </div>
    </motion.div>
  );
}

export default Experience;
