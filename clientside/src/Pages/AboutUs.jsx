import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Darul-sukun  Medical Institute"}
        imageUrl={"/about.jpg"}
      />
      <Biography imageUrl={"/old.jpg"} />
    </>
  );
};

export default AboutUs;
