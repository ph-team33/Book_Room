import React from "react";
import ComputerAndTech from "../../components/Home/BookCategory/ComputerAndTech/ComputerAndTech";
import Education from "../../components/Home/BookCategory/Education/Education";
import HealthAndFitness from "../../components/Home/BookCategory/HealthAndFitness/HealthAndFitness";
import Kids from "../../components/Home/BookCategory/Kids/Kids";
import Motivational from "../../components/Home/BookCategory/Motivational/Motivational";
import Contact from "./../../components/Contact/Contact";
import Author from "./../../components/Home/Author/Author";
import Banner from "./../../components/Home/Banner/Banner";
import MostReaded from "./../../components/Home/BookCategory/MostReadedBook/MostReaded";
import HeroSection from "./../../components/Home/HeroSection/HeroSection";
import MemberShip from "./../../components/Home/MemberShip/MemberShip";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Author />
      <Banner />
      <MostReaded />
      <ComputerAndTech/>
      <Education/>
      <HealthAndFitness/>
      <Kids/>
      <Motivational/>
      <MemberShip />
      <Contact />
    </>
  );
};

export default Home;
