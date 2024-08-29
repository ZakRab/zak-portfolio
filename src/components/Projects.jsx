import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";
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
      title: "Spy Codes",
      description:
        "Led my cohort in creating the final group project of a code names clone.",
      techStack: ["React", "Material UI", "Node", "Express", "Socket.io"],
      githubLink: "https://github.com/zakrab/QwikQuiz",
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
      githubLink: "https://github.com/zakrab/noorish",
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
      <section id="projects" className="p-40">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          whileInView={{ opacity: 1 }}
        >
          <h1 className="text-5xl font-bold">Projects</h1>
        </motion.div>
        <div className="mt-20 grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
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
      </section>
    </>
  );
}

export default Projects;
