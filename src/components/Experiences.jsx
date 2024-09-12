import React from "react";
import Experience from "./Experience";
function Experiences() {
  const Experiences = [
    {
      title: "Software Engineering Intern",
      company: "Hudl",
      location: "Lincoln, Nebraska",
      startDate: "May 2024",
      endDate: "August 2024",
      techStack: [
        "React",
        "JavaScript",
        "Node.js",
        "SQL",
        "C Sharp",
        "Dot Net",
        "CSS3",
      ],
      description: [
        "Contributed to Hudl messaging web service, backend, Android, and iOS mobile applications leading to a significantly improved experience for thousands of users.",
        "Delivered 12+ features to production for Hudl Messaging, including message editing, file attachments, and search functionality for users, groups, and messages.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "MDbee",
      location: "Toledo, Ohio",
      startDate: "July 2023",
      endDate: "December 2023",
      techStack: ["Python", "Django", "React", "Javascript"],
      description: [
        "Contributed to AI medical startup by researching emerging technologies to incorporate into 4 different AI-powered note-generation tools for medical professionals.",
        "Primarily contributed to a tool enabling doctors to voice record medical data, automatically summarizing it into notes, improving documentation efficiency by 80%.",
        "Tested dozens of features manually and coded automated tests using Python unittest framework.",
      ],
    },
    {
      title: "Student Developer",
      company: "Midland University Code Academy",
      location: "Omaha, Nebraska",
      startDate: "June 2022",
      endDate: "August 2022",
      techStack: [
        "React",
        "Node.js",
        "Express",
        "SQL",
        "Socket.io",
        "Bootstrap",
        "Tailwind CSS",
        "Javascript",
      ],
      description: [
        "Attended an intensive 12-week web development software engineer boot camp full-time on scholarship.",
        "Built 5+ full-stack applications with a focus on APIs, authentication, real-time sockets, and mobile-first design.",
        "Elected by cohort to lead team of 6 student software engineers in developing a successful capstone project.",
      ],
    },
    {
      title: "Database Intern",
      company: "Capstone IT",
      location: "Omaha, Nebraska",
      startDate: "March 2022",
      endDate: "May 2022",
      techStack: ["SQL", "C Sharp", "Dot NET"],
      description: [
        "Shadowed backend software engineers to learn basic programming and AGILE methodologies.",
        "Collaborated with interns to complete tickets to obtain data from SQL tables using Atlassian and kanban.",
      ],
    },
  ];

  return (
    <>
      <div className="mt-16">
        {Experiences.map((experience) => {
          return (
            <Experience
              title={experience.title}
              company={experience.company}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
              image={experience.image}
              techStack={experience.techStack}
            />
          );
        })}
      </div>
    </>
  );
}

export default Experiences;
