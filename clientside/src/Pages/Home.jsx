import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to the Darul-sukun | Your Trusted Healthcare Provider"
        }
        imageUrl={"/download.jpg"}
      />
      <Biography imageUrl={"/old.jpg"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
