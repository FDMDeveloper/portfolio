import React from 'react'
import './skill.css'
import BackendDesign from '../../assets/backend.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/responsive-design.png'

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>Sono un perito informatico appassionato di tecnologia con una forte curiosità per l'apprendimento di nuovi linguaggi di programmazione tutti da scoprire.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Web Design</h2>
            <p>Appassionato di web design e sviluppo front-end, con un occhio di riguardo per l'esperienza utente.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={BackendDesign} alt='BackendDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Backend</h2>
            <p>Ottimizzo le prestazioni del database per ridurre i tempi di risposta e migliorare l'esperienza utente.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Responsive</h2>
            <p>Il mio lavoro si adatta perfettamente a qualsiasi dispositivo, per un'esperienza utente ottimale su ogni schermo.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
