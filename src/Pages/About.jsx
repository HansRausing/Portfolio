/*
   Copyright (C), 2024-2026, Maurice Williams
   Author: Maurice Williams
   FileName: About.jsx
   Version: 1.0.0
   Creation: 26/11/2025
   Last modification: 26/11/2025
*/

import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import { introduction } from "../Constants/constants";

const About = () => {
  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="ABOUT ME" subtitle="Why I'm a strong fit" />
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full md:h-full flex items-center mt-100">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="text-grayscale-50 p-6 text-center flex flex-col gap-5"
              >
                <span
                  className="text-primary-400"
                  style={{ fontSize: "1.2em", fontWeight: "900" }}
                >
                  {introduction.text[0]}
                </span>
                <span
                  className="text-primary-500"
                  style={{ fontSize: "0.95em", fontWeight: "500" }}
                >
                  {introduction.text[1]}
                </span>
                <span
                  className="text-primary-500"
                  style={{ fontSize: "0.95em", fontWeight: "500" }}
                >
                  {introduction.text[2]}
                </span>
                <span
                  className="text-primary-500"
                  style={{ fontSize: "0.95em", fontWeight: "500" }}
                >
                  {introduction.text[3]}
                </span>
                {/* <a href="cv/Ariel_Berjit_Resume.pdf" download>
                  <span
                    className="text-primary-600"
                    style={{ fontSize: "0.95em", fontWeight: "700" }}
                  >
                    {introduction.text[4].split("here")[0]}
                    <span style={{ textDecoration: "underline" }}>here</span>
                    {introduction.text[4].split("here")[1]}
                  </span>
                </a> */}
              </m.p>
            </LazyMotion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
