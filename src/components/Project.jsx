import React from "react";

function Project({ title, description, techStack, githubLink }) {
  return (
    <div className="flex flex-col mb-16 ">
      <a
        href={githubLink}
        target="_blank"
        rel="noreferrer"
        className="text-3xl font-semibold"
      >
        {title}
      </a>
      <p className="text-2xl mt-2 font-medium">
        {techStack.map((item) => item + " ")}
      </p>
      <p className="text-xl mt-4">{description}</p>
    </div>
  );
}

export default Project;
