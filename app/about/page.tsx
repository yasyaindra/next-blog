import React from "react";
import ProfileImage from "../components/ProfileImage";

const About = () => {
  return (
    <div>
      <p className="mb-3 text-justify">
        I am Yasya Indra, who have experienced building web & mobile apps for
        about +3 years
      </p>
      <div className="lg:flex ">
        <div className="basis-1/8 pr-3">
          <ProfileImage />
        </div>
        <div className="basis">
          <p className="text-justify">
            I'm actively sharing my portfolio on my instagram to attract anyone
            who's willing to collaborate or trust me to be part of a team
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
