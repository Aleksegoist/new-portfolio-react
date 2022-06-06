import React from 'react';
import './home.css';
import hero from '../../images/hero.png';
import react from '../../images/react.png';
import node from '../../images/node.png';
import js from '../../images/javascript.png';

const Home = () => {
  return (
    <div className='Home' id='home'>
      <div className='Home__container'>
        <div className='home__left'>
          <p className='home__left__subtitle'>Front-End Developer</p>
          <div className='home__left__title'>
            <p>Coding is what</p>
            <p>I live by</p>
          </div>
          <div className='home__left__info'>
            <p>I design and code beautifully simple things,</p>
            <p>and I love what I do</p>
          </div>
          <a className='home__left__a' href='#contact'>
            Let's chat!
          </a>
        </div>
        <div className='home__right'>
          <img src={hero} alt='hero' className='home__right__hero' />
          <div className='home__right__circle home__right__react'>
            <img src={react} alt='react' />
          </div>
          <div className='home__right__circle home__right__node'>
            <img src={node} alt='node' />
          </div>
          <div className='home__right__circle home__right__js'>
            <img src={js} alt='js' />
          </div>
        </div>
        <div className='home__miniInfo'>
          <p className='info__number'>2</p>
          <p className='info__desc'>years experience</p>
          <p className='info__number'>30</p>
          <p className='info__desc'>projects completed</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
