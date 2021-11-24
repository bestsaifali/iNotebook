import React from "react";
import web from "../images/image2.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name='Welcome to the About Page '
        imgsrc={web}
        visit='/contact'
      />
    </>
  );
};

export default About;
