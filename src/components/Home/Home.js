import React from 'react';
import Author from './Author/Author';
import Banner from './Banner/Banner';
import HeroSection from './HeroSection/HeroSection';
import MostReaded from './BookCategory/MostReadedBook/MostReaded';
import ThrillersBook from './BookCategory/ThrillersBook/ThrillersBook';
import BooksWeLove from './BookCategory/BooksWeLove/BooksWeLove';
import MemberShip from './MemberShip/MemberShip';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <>
            <HeroSection/>
            <Author/>
            <Banner/>
            <MostReaded/>
            <ThrillersBook/>
            <BooksWeLove/>
            <MemberShip/>
            <Contact/>
        </>
    );
};

export default Home;