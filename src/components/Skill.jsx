import React from "react";
import { motion } from "framer-motion";
function Skill({ icon, name }) {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <div className="flex flex-col text-center p-4">
        <div className="">{icon}</div>
        <div className="mt-4">{name}</div>
      </div>
    </motion.div>
  );
}

export default Skill;
