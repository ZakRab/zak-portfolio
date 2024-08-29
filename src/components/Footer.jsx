import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdContactPage, MdMail } from "react-icons/md";
import { motion } from "framer-motion";

const links = [
  {
    href: "https://www.linkedin.com/in/zakaria-rab/",
    icon: <FaLinkedin className="text-3xl" />,
  },
  {
    href: "https://github.com/ZakRab",
    icon: <FaGithub className="text-3xl" />,
  },
  {
    href: "https://drive.google.com/file/d/1fLSACfyUPY2S3E2DwA7BguhRnqfpVI9h/view?usp=drive_link",
    icon: <MdContactPage className="text-3xl" />,
  },
  {
    href: "mailto:zakomaha@gmail.com?subject=HIRED!&amp;body=wow zak you are so amazing i want to hire you right now",
    icon: <MdMail className="text-3xl" />,
  },
];

function Footer() {
  return (
    <div className="flex justify-center">
      <div className="flex gap-x-20 mb-7">
        {links.map((link, index) => (
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <a key={index} href={link.href} target="_blank" rel="noreferrer">
              {link.icon}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
