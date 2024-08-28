import React from "react";

function Project({ title, description, techStack, githubLink }) {
  return (
    <div className="flex flex-col mb-16">
      <a
        href={githubLink}
        target="_blank"
        rel="noreferrer"
        className="text-3xl underline font-semibold"
      >
        {title}
      </a>
      <p className="text-xl mt-5">Built using: {techStack.toString()}</p>
      <p className="text-xl mt-5">{description}</p>
    </div>
  );
}

export default Project;
