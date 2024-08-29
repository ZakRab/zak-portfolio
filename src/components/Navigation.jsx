import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const links = document.querySelectorAll("a");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop + 50) {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isScrolled ? 1 : 0 }}
      transition={{ duration: 1 }}
      className=" "
    >
      <div className="text-white fixed flex flex-col w-full space-evenly gap-4 z-50 font-light mt-5 ml-7">
        <a href="#skills">Skills</a>
        <a href="#experiences">Experiences</a>
        <a href="#projects">Projects</a>
      </div>
    </motion.div>
  );
};

export default Navigation;
