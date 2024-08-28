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
      description:
        "Developed and enhanced HUDL's messaging platform using React, C#, and React Native, contributing to a more seamless user experience.",
    },
    {
      title: "Software Engineering Intern",
      company: "MDbee",
      location: "Toledo, Ohio",
      startDate: "July 2023",
      endDate: "December 2023",
      description:
        "Engineered AI-powered tools for medical professionals, utilizing Python and automated testing, while driving innovation through research on emerging technologies.",
    },
    {
      title: "Student Developer",
      company: "Midland University Code Academy",
      location: "Omaha, Nebraska",
      startDate: "June 2022",
      endDate: "August 2022",
      description:
        "Led a cohort in developing a capstone project using React, Node, Express, and SQL, while implementing PassportJS for secure authentication. Enhanced technical expertise and leadership skills, ensuring project success.",
    },
    {
      title: "Database Intern",
      company: "Capstone IT",
      location: "Omaha, Nebraska",
      startDate: "March 2022",
      endDate: "May 2022",
      description:
        "Optimized database performance using SQL, collaborated on C# projects, and streamlined project management through AGILE methodologies with Atlassian tools.",
    },
  ];

  return (
    <>
      <div id="experiences" className=" px-40 pt-20">
        <h1 className="text-5xl font-bold">Experiences</h1>
        <div className=" mt-20 ">
          {Experiences.map((experience) => {
            return (
              <Experience
                title={experience.title}
                company={experience.company}
                startDate={experience.startDate}
                endDate={experience.endDate}
                description={experience.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Experiences;
