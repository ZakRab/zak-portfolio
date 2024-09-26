import { useEffect, useState } from "react";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdContactPage, MdMail } from "react-icons/md";
const Navigation = () => {
  const links = [
    {
      href: "https://www.linkedin.com/in/zakaria-rab/",
      icon: <FaLinkedin className="text-2xl" />,
    },
    {
      href: "https://github.com/ZakRab",
      icon: <FaGithub className="text-2xl" />,
    },
    {
      href: "https://drive.google.com/file/d/1fLSACfyUPY2S3E2DwA7BguhRnqfpVI9h/view?usp=drive_link",
      icon: <MdContactPage className="text-2xl" />,
    },
    {
      href: "mailto:zakomaha@gmail.com?subject=HIRED!&amp;body=wow zak you are so amazing i want to hire you right now",
      icon: <MdMail className="text-2xl" />,
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const links = document.querySelectorAll("a");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop + 300) {
          // Adjust offset for better timing
          currentSection = section.getAttribute("id");
        }
      });

      links.forEach((link) => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active-link");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-white fixed flex w-full z-50 font-light py-3 justify-around nav bg-slate-800">
      <div className="flex gap-10">
        <a href="#Personal Projects">Projects</a>
        <a href="#Experiences">Experiences</a>
        <a href="#Skills">Skills</a>
      </div>
      <div className="">
        <div className="text-xl text-bold">ZAKARIA RAB</div>
      </div>
      <div className="flex flex-row gap-10">
        {links.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noreferrer">
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
