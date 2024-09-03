import React from "react";
import Project from "./Project";
function Projects() {
  const projects = [
    {
      title: "FitCast",
      description:
        "A smart digital wardrobe assistant designed to merge your clothing collection with live weather data for daily outfit recommendations.",
      techStack: ["Svelte", "Supabase", "Git"],
      githubLink: "https://github.com/zakrab/fitcast",
    },
    {
      title: "3-2-1-Sketch",
      description:
        "A live sketch party game made based upon the popular board game 'how do you doodle'.",
      techStack: ["React", "Material UI", "Node", "Express", "Socket.io"],
      githubLink: "https://github.com/ZakRab/3-2-1-Sketch",
    },
    {
      title: "QwikQuiz",
      description:
        "An AI-powered test review platform that allows users to submit course curriculum and creates printable pdfs for students to review.",
      techStack: ["Svelte", "Chat-GPT API", "Supabase/SQL"],
      githubLink: "https://github.com/zakrab/QwikQuiz",
    },
    {
      title: "Spy Codes Game",
      description:
        "Led my cohort in creating the capstone project of the popular board game 'code names'.",
      techStack: ["React", "Material UI", "Node", "Express", "Socket.io"],
      githubLink: "https://github.com/ZakRab/midland-spy-codes",
    },
    {
      title: "Uni-Search",
      description:
        "A full-stack application to help find universities I could apply to across the globe.",
      techStack: ["React", "REST APIs", "Node", "Express", "MongoDB"],
      githubLink: "https://github.com/zakrab/uni-search",
    },
    {
      title: "Noorish App",
      description:
        "A mobile application designed to assist Muslims in tracking their health and nutritional intake during the holy month of Ramadan.",
      techStack: ["Flutter", "Dart", "Rest APIs"],
      githubLink: "https://github.com/ZakRab/noorish_app",
    },
    {
      title: " Portfolio",
      description: "My personal portfolio website.",
      techStack: ["React", "Tailwind CSS"],
      githubLink: "",
    },
    {
      title: "Tawasul App",
      description:
        "A full-stack mobile application that connects single muslims with ponetial marriage partners.",
      techStack: ["Flutter", "Dart", "Supabase", "RiverPod", "Material UI"],
    },
  ];
  return (
    <>
      <div className="mt-28 grid gap-y-28 gap-x-16 lg:grid-cols-4 sm:grid-cols-2">
        {projects.map((project) => {
          return (
            <Project
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
            />
          );
        })}
      </div>
    </>
  );
}

export default Projects;
