import React from "react";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import Contact from "./../../components/Contact/Contact";
import Author from "./../../components/Home/Author/Author";
import Banner from "./../../components/Home/Banner/Banner";
import BooksWeLove from "./../../components/Home/BookCategory/BooksWeLove/BooksWeLove";
import MostReaded from "./../../components/Home/BookCategory/MostReadedBook/MostReaded";
import ThrillersBook from "./../../components/Home/BookCategory/ThrillersBook/ThrillersBook";
import HeroSection from "./../../components/Home/HeroSection/HeroSection";
import MemberShip from "./../../components/Home/MemberShip/MemberShip";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Author />
      <Banner />
      <MostReaded />
      <ThrillersBook />
      <BooksWeLove />
      <MemberShip />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
