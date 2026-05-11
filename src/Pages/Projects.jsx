/*
   Copyright (C), 2024-2025, Maurice Williams
   Author: Maurice Williams
   FileName: Projects.jsx
   Version: 1.0.0
   Creation: 26/11/2025
   Last modification: 26/11/2025
*/

import Works from "../Components/ProjectCards";
import SectionTitle from "../Components/SectionTitle";

const Projects = () => {
  return (
    <div className="w-full flex justify-center" id="projects">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full ">
          <SectionTitle
            title="PROJECTS"
            subtitle="How I match this role"
          />
        </div>
        <Works />
      </div>
    </div>
  );
};

export default Projects;
