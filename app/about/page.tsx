import React from "react";
import ProfileImage from "../components/ProfileImage";

const About = () => {
  return (
    <div>
      <h1 className="text-2xl font-extrabold mb-2">About Me</h1>
      <p className="mb-3 text-justify">
        I am Yasya Indra, who have experienced building web & mobile apps for
        about +3 years
      </p>
      <div className="lg:flex items-center">
        <ProfileImage />
        <p className="text-justify">
          I'm actively sharing my portfolio on my instagram to attract anyone
          who's willing to collaborate or trust me to be part of a team
        </p>
      </div>
    </div>
  );
};

export default About;
