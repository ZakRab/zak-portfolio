import React from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

import AnimatedCursor from "react-animated-cursor";
const images = {
  tawasul: `${process.env.PUBLIC_URL}/assets/images/tawasul.png`,
  linear: `${process.env.PUBLIC_URL}/assets/images/tawasul/linear.png`,
  models: `${process.env.PUBLIC_URL}/assets/images/tawasul/models.png`,
  problems: `${process.env.PUBLIC_URL}/assets/images/tawasul/problems.png`,
  sticknotes: `${process.env.PUBLIC_URL}/assets/images/tawasul/sticknotes.png`,
  "user-flow": `${process.env.PUBLIC_URL}/assets/images/tawasul/user-flow.png`,
  page1: `${process.env.PUBLIC_URL}/assets/images/tawasul/page1.png`,
  page2: `${process.env.PUBLIC_URL}/assets/images/tawasul/page2.png`,
};
function Tawasul() {
  return (
    <div className="w-full font-serif bg-slate-700">
      <Link to="/#Personal Projects" className="fixed top-5 left-5">
        <MdKeyboardArrowLeft size={50} color="white" />
      </Link>
      <AnimatedCursor
        innerSize={10} // Size of the inner cursor dot
        outerSize={20} // Size of the outer cursor dot
        color="255, 255, 255" // Color of the cursor in RGB
        outerAlpha={0.2} // Transparency of the outer cursor dot
        innerScale={0.7} // Scale of the inner dot on hover/click
        outerScale={3} // Scale of the outer dot on hover/click
        innerStyle={{
          borderRadius: "30%", // Makes the inner cursor square
          backgroundColor: "rgb(45, 212, 191)", // Color the square (optional, same as `color`)
        }}
        outerStyle={{
          borderRadius: "30%", // Makes the outer cursor square
          border: "2px solid rgb(45, 212, 191)", // Border to define the outer square
        }}
        clickables={[
          "a",
          {
            target: "a", // Custom class for additional styles
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "255, 255, 255",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />
      <div className="flex justify-center py-20">
        <main className="flex flex-col items-center max-w-full md:max-w-screen-sm 1g:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen 1g:p-24 gap-36">
          {/* Introduction Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-16"
          >
            <img src={images["tawasul"]} alt="tawasul" className="rounded" />
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div className="flex flex-col gap-3 lg:w-2/5">
                <h1 className="text-4xl font-semibold text-teal-400">
                  Tawasul
                </h1>
                <p className="text-lg text-white">
                  Tawasul is a matrimonial app designed to foster meaningful,
                  marriage-oriented connections in the Muslim community, staying
                  true to Islamic values and traditions.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-16">
                <div className="flex flex-row lg:flex-col flex-row gap-3">
                  <p className="text-lg font-bold text-teal-400">TIMELINE</p>
                  <p className="text-lg text-white">June - July 2024</p>
                </div>
                <div className="flex flex-row lg:flex-col flex-row gap-3">
                  <p className="text-lg font-bold text-teal-400">ROLE</p>
                  <p className="text-lg text-white">Project Architect</p>
                  <p className="text-lg text-white">Front-end Developer</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Purpose Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-16"
          >
            <img className="rounded" src={images["linear"]} alt="linear" />
            <div>
              <p className="text-lg font-bold text-teal-400">PURPOSE</p>
              <h2 className="text-3xl font-semibold text-white">
                Why did we create Tawasul?
              </h2>
              <p className="text-lg text-gray-400">
                Tawasul isn't just another dating app—it's a platform built
                around the cultural and religious needs of Muslims seeking
                marriage. While other apps focus on superficial connections,
                Tawasul ensures meaningful, faith-based relationships.
              </p>
            </div>
          </motion.section>

          {/* Problem Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-16"
          >
            <img className="rounded" src={images["problems"]} alt="problems" />
            <div>
              <p className="text-lg font-bold text-teal-400">PROBLEM</p>
              <h2 className="text-3xl font-semibold text-white">
                What's wrong with the current apps?
              </h2>
              <p className="text-lg text-gray-400">
                Popular apps like Salams and Muzz focus heavily on appearances
                and mimic dating app structures, leading to quick, superficial
                connections. This doesn’t align with the spiritual and cultural
                values many in the Muslim community hold dear.
              </p>
            </div>
          </motion.section>

          {/* Limitations Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-16"
          >
            <img
              className="rounded"
              src={images["sticknotes"]}
              alt="sticknotes"
            />
            <div>
              <p className="text-lg font-bold text-teal-400">LIMITATIONS</p>
              <h2 className="text-3xl font-semibold text-white">
                Facing tight deadlines
              </h2>
              <p className="text-lg text-gray-400">
                With only one month to design and code, time was a significant
                constraint. Leveraging Material Design and reusing custom-made
                components allowed me to meet the deadline efficiently while
                maintaining quality.
              </p>
            </div>
          </motion.section>

          {/* Branding Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-16"
          >
            <img className="rounded" src={images["models"]} alt="models" />
            <div>
              <p className="text-lg font-bold text-teal-400">BRAND</p>
              <h2 className="text-3xl font-semibold text-white">
                Branding and Styles
              </h2>
              <p className="text-lg text-gray-400">
                After experimenting with several design iterations, we landed on
                a clean, modern look that communicates both trust and
                simplicity. Teal, paired with minimalistic fonts and sleek
                icons, gave the app the polished feel we were aiming for.
              </p>
            </div>
          </motion.section>

          {/* Solution Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-16"
          >
            <img
              className="rounded"
              src={images["user-flow"]}
              alt="user-flow"
            />
            <div>
              <p className="text-lg font-bold text-teal-400">SOLUTION</p>
              <h2 className="text-3xl font-semibold text-white">
                A solution tailored to our niche
              </h2>
              <p className="text-lg text-gray-400">
                We focused on maintaining user privacy by limiting image use and
                emphasizing meaningful connections over swiping. Each profile is
                designed to be scanned thoroughly, encouraging a deeper
                understanding of potential partners.
              </p>
            </div>
          </motion.section>

          {/* Final Notes */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-16"
          >
            <img className="rounded" src={images["page1"]} alt="page1" />
            <img className="rounded" src={images["page2"]} alt="page2" />
            <div>
              <p className="text-lg font-bold text-teal-400">FINAL NOTES</p>
              <h2 className="text-3xl font-semibold text-white">
                Lessons learned
              </h2>
              <p className="text-lg text-gray-400">
                Building Tawasul was a rewarding challenge, from navigating
                design limitations to optimizing the user experience. It
                reinforced the importance of adapting quickly, especially when
                dealing with tight deadlines and multi-platform development.
              </p>
            </div>
          </motion.section>
        </main>
      </div>
    </div>
  );
}

export default Tawasul;
