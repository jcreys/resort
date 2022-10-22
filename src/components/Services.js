import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "lorem ipsum dolor sit amet consectetur adipiscing elit. Magni, cpororis!",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "lorem ipsum dolor sit amet consectetur adipiscing elit. Magni, cpororis!",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "lorem ipsum dolor sit amet consectetur adipiscing elit. Magni, cpororis!",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "lorem ipsum dolor sit amet consectetur adipiscing elit. Magni, cpororis!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">{this.state.services.map((item, index) => {
            return <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
            </article>
        })}</div>
      </section>
    );
  }
}
