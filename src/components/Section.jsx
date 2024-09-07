import React from "react";
import { motion } from "framer-motion";

function Section({ title, body }) {
  return (
    <section id={title} name={title} className="px-40 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        whileInView={{ opacity: 1 }}
      >
        <h1 className="text-5xl font-bold">{title}</h1>
      </motion.div>
      <div className="my-20">{body()}</div>
      <hr></hr>
    </section>
  );
}

export default Section;
