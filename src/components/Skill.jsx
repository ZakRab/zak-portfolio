import React from "react";

function Skill({ icon, name }) {
  return (
    <div className="flex flex-col text-center p-4">
      <div className="">{icon}</div>
      <div className="mt-2">{name}</div>
    </div>
  );
}

export default Skill;
