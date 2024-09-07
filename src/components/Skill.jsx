import React from "react";
import { motion } from "framer-motion";
function Skill({ icon, name }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      whileInView={{ opacity: 1 }}
    >
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <div className="flex flex-col p-4">
          <div className="text-7xl">{icon}</div>
          <div className="mt-4">{name}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Skill;
