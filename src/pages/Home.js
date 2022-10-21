import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
const Home = () => {
  return (
    <Hero hero="defaultHero">
      <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        <Link to="/rooms" className="btn-primary">our rooms</Link>
      </Banner>
    </Hero>
  );
};
//default props for using default classname in css
Hero.defaultProps = {
  hero: "defaultHero",
};
export default Home;
