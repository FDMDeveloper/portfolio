import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/sitomat1.png";
import Portfolio2 from "../../assets/auto1.png";
import Portfolio3 from "../../assets/soft.png";
import Portfolio4 from "../../assets/nano.png";
import Portfolio5 from "../../assets/ecom1.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        Sebbene non ho ancora avuto l'opportunità di lavorare in un'azienda, ho
        sviluppato le mie capacità attraverso la realizzazione di progetti
        personali
      </span>
      <div className="worksImgs">
        <a
          href="http://www.scuoladepalma28.altervista.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Portfolio1}
            alt="Portfolio Project 1"
            className="worksImg"
          />
        </a>
        <a
          href="https://autoscuolatopdrive.altervista.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Portfolio2}
            alt="Portfolio Project 2"
            className="worksImg"
          />
        </a>
        <a
          href="https://fdmpdf.softr.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Portfolio3}
            alt="Portfolio Project 3"
            className="worksImg"
          />
        </a>
        <a
          href="https://fdp98.altervista.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Portfolio4}
            alt="Portfolio Project 4"
            className="worksImg"
          />
        </a>
        <a
          href="https://ecommerce-tech-frontend.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Portfolio5}
            alt="Portfolio Project 5"
            className="worksImg"
          />
        </a>
      </div>

      <button className="workBtn">See More</button>
    </section>
  );
};

export default Works;
