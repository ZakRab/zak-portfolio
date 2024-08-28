import { useEffect } from "react";

const Navigation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const links = document.querySelectorAll("a");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
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

  return (
    <div className="text-white fixed flex flex-col w-full space-evenly gap-4 z-50 font-light mt-5 ml-5">
      <a href="#skills">Skills</a>
      <a href="#experiences">Experiences</a>
      <a href="#projects">Projects</a>
    </div>
  );
};

export default Navigation;
