import React from "react";
import "./intro.css";
import bg from '../../assets/profile.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Francesco Matteo Depalma</span> <br />Junior Full Stack Developer</span>
            <p className="introPara">Appassionato/a del mondo dell'Informatica fin da piccolo <br />sempre alla ricerca di sfide nuove.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" />Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
