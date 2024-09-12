import React from "react";
import { Project, FeaturedProject } from "./Project";
function Projects() {
  const projects = [
    {
      title: "FitCast",
      description:
        "A smart digital wardrobe assistant designed to merge your clothing collection with live weather data for daily outfit recommendations.",
      techStack: ["Svelte", "Supabase", "Tailwind CSS", "Node.js"],
      githubLink: "https://github.com/zakrab/fitcast",
      image: `${process.env.PUBLIC_URL}/assets/images/fitcast.png`,
    },
    {
      title: "3-2-1-Sketch",
      description:
        "A live sketch party game made based upon the popular board game 'how do you doodle'.",
      techStack: ["React", "Bootstrap", "Node.js", "Express", "Socket.io"],
      githubLink: "https://www.github.com/ZakRab/3-2-1-Sketch",
      image: `${process.env.PUBLIC_URL}/assets/images/sketch.png`,
    },
    {
      title: "QwikQuiz",
      description:
        "An AI-powered test review platform that allows users to submit course curriculum and creates printable pdfs for students to review.",
      techStack: ["Svelte", "Node.js", "Tailwind CSS"],
      githubLink: "https://github.com/zakrab/QwikQuiz",
      image: `${process.env.PUBLIC_URL}/assets/images/qwikquiz.png`,
    },
    {
      title: "Spy Codes",
      description:
        "Led my cohort in creating the capstone project of the popular board game 'code names'.",
      techStack: ["React", "Bootstrap", "Node.js", "Express", "Socket.io"],
      githubLink: "https://github.com/ZakRab/midland-spy-codes",
      image: `${process.env.PUBLIC_URL}/assets/images/spy-codes.png`,
    },
    {
      title: "Uni-Search",
      description:
        "A full-stack application to help find universities I could apply to across the globe.",
      techStack: ["React", "Node.js", "Express", "SQL", "Bootstrap"],
      githubLink: "https://github.com/zakrab/uni-search",
      image: `${process.env.PUBLIC_URL}/assets/images/unisearch.png`,
    },
    {
      title: "Noorish",
      description:
        "A mobile application designed to assist Muslims in tracking their health and nutritional intake during the holy month of Ramadan.",
      techStack: ["Flutter", "Dart", "Material UI"],
      githubLink: "https://github.com/ZakRab/noorish_app",
      image: `${process.env.PUBLIC_URL}/assets/images/noorish.png`,
    },
    {
      title: "Tawasul",
      isFeatured: true,
      description:
        "A full-stack mobile application that connects single muslims with potential marriage partners. Tawasul is a matrimonial app specifically designed to cater to the unique needs of the Muslim community, focusing on creating meaningful, marriage-oriented connections.",
      techStack: ["Flutter", "Dart", "Supabase", "Material UI"],
      image: `${process.env.PUBLIC_URL}/assets/images/tawasul.png`,
    },
  ];
  return (
    <>
      <div className="mt-28 flex justify-center">
        {projects.map((project) => {
          if (project.isFeatured) {
            return (
              <FeaturedProject
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                image={project.image}
              ></FeaturedProject>
            );
          }
          return null;
        })}
      </div>
      <div className="mt-28 grid gap-y-16 gap-x-16 lg:grid-cols-2 sm:grid-cols-1">
        {projects.map((project) => {
          if (!project.isFeatured) {
            return (
              <Project
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                image={project.image}
                githubLink={project.githubLink}
              />
            );
          }
          return null;
        })}
      </div>
    </>
  );
}

export default Projects;
