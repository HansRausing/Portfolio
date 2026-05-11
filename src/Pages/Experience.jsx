/*
   Copyright (C), 2024-2026, Maurice Williams
   Author: Maurice Williams
   FileName: Experience.jsx
*/

import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import { experience } from "../Constants/constants";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full flex justify-center overflow-hidden-web pb-16"
    >
      <div className="w-full xl:w-[70%] flex flex-col">
        <div className="w-full">
          <SectionTitle
            title="EXPERIENCE"
            subtitle="Enterprise & disciplined delivery"
          />
        </div>
        <div className="flex flex-col gap-8 px-6">
          <LazyMotion features={domAnimation} strict>
            {experience.map((job, index) => (
              <m.article
                key={job.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 120,
                  damping: 22,
                }}
                className="rounded-xl border-2 border-primary-400 bg-primary-500/30 p-6 sm:p-8 text-grayscale-50"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-200">
                      {job.company}
                    </h3>
                    <p className="text-lg font-semibold text-primary-400 mt-1">
                      {job.role}
                    </p>
                    <p className="text-sm text-grayscale-200 mt-2 opacity-90">
                      {job.focus}
                    </p>
                  </div>
                  <div className="text-sm text-primary-300 shrink-0 mt-2 sm:mt-0 sm:text-right">
                    <p className="font-semibold">{job.period}</p>
                    <p className="opacity-90">{job.location}</p>
                  </div>
                </div>
                <ul className="mt-6 flex flex-col gap-3 list-disc pl-5 text-[0.95em] leading-relaxed text-grayscale-50">
                  {job.highlights.map((line, i) => (
                    <li key={`${job.company}-${i}`}>{line}</li>
                  ))}
                </ul>
              </m.article>
            ))}
          </LazyMotion>
        </div>
      </div>
    </div>
  );
};

export default Experience;
