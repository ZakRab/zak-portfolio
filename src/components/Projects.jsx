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
        "Created a live sketch party game made based upon the popular board game 'how do you doodle'.",
      techStack: ["React", "Material UI", "Node", "Express", "Socket.io"],
      githubLink: "https://github.com/ZakRab/3-2-1-Sketch",
    },
    {
      title: "QwikQuiz",
      description:
        "QuickQuiz is an AI-powered test review platform that allows users to submit course curriculum and creates printable pdfs for students to review.",
      techStack: ["Svelte", "Node", "Chat GPT API", "SQL"],
      githubLink: "https://github.com/zakrab/QwikQuiz",
    },
    {
      title: "Midland Spy Codes",
      description:
        "Led the team in creating the final group project of a code names clone.",
      techStack: ["React", "Material UI", "Node", "Express", "Socket.io"],
      githubLink: "https://github.com/zakrab/QwikQuiz",
    },
    {
      title: "Uni-Search",
      description:
        "Created a full-stack application to help find universities I could apply to across the globe. Utilizes REST APIs to retrieve data for over 9,000 colleges and universities.",
      techStack: ["JavaScript", "REST APIs"],
      githubLink: "https://github.com/zakrab/uni-search",
    },
    {
      title: "Noorish App",
      description:
        "Noorish is a Flutter mobile application designed to assist Muslims in tracking their health and nutritional intake during the holy month of Ramadan. The app utilizes various APIs, including Alahdan.",
      techStack: ["Flutter", "Dart", "APIs"],
      githubLink: "https://github.com/zakrab/noorish",
    },
    {
      title: "Portfolio",
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
      <div id="projects" className="p-40">
        <h1 className="text-5xl font-bold">Projects</h1>
        <div className="mt-10 grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
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
      </div>
    </>
  );
}

export default Projects;
