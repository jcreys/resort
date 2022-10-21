import React from "react";
import Hero from "../components/Hero";
const Home = () => {
  return <Hero hero="defaultHero"></Hero>;
};
//default props for using default classname in css
Hero.defaultProps = {
  hero: "defaultHero",
};
export default Home;
