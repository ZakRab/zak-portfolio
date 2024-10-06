import { useEffect, useState } from "react";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdContactPage, MdMail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

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
      href: "https://drive.google.com/file/d/1ZiDb1C4H4LXFuPVH-adjrB22f1fHZY-3/view?usp=sharing",
      icon: <MdContactPage className="text-2xl" />,
    },
    {
      href: "mailto:zakomaha@gmail.com?subject=HIRED!&amp;body=wow zak you are so amazing i want to hire you right now",
      icon: <MdMail className="text-2xl" />,
    },
    {
      href: "https://leetcode.com/u/ZakRab/",
      icon: <SiLeetcode className="text-2xl" />,
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
    <div className="text-white fixed flex w-full z-50 font-light py-3 justify-between items-center nav bg-slate-800">
      {/* Left Side: Projects, Experiences, Skills */}
      <div className="flex gap-8 flex-1 justify-center">
        <a href="#Personal Projects">Projects</a>
        <a href="#Experiences">Experiences</a>
        <a href="#Skills">Skills</a>
      </div>

      {/* Center: Name */}
      <div className="flex-1 text-center">
        <div className="text-xl font-bold">ZAKARIA RAB</div>
      </div>

      {/* Right Side: Social/External Links */}
      <div className="flex gap-8 flex-1 justify-center">
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
