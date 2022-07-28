import React from 'react';
import IMG1 from '../../assets/portfolio/stare.jpg';
import './portfolio.scss'

const Portfolio = () => {
  return (
	  <section id='portfolio'>
      <h2>Work</h2>

      <div className='container portfolio-container'>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={IMG1} alt='Stare' />
          </div>
          <h3>Item title</h3>
          <div className='portfolio-item-cta'>
            <a href='https://github.com' className='btn' target='_blank' rel='noopener noreferrer'>Github</a>
            <a href='https://davidbaptista.github.io' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={IMG1} alt='Stare' />
          </div>
          <h3>Item title</h3>
          <div className='portfolio-item-cta'>
            <a href='https://github.com' className='btn' target='_blank' rel='noopener noreferrer'>Github</a>
            <a href='https://davidbaptista.github.io' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio-item'>
          <div className='portfolio-item-img'>
            <img src={IMG1} alt='Stare' />
          </div>
          <h3>Item title</h3>
          <div className='portfolio-item-cta'>
            <a href='https://github.com' className='btn' target='_blank' rel='noopener noreferrer'>Github</a>
            <a href='https://davidbaptista.github.io' className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio