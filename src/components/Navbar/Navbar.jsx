import React, { useState, useEffect } from 'react';
import './navbar.css';
import bars from '../../images/bars.svg';
import close from '../../images/close.svg';
import linkedIn from '../../images/linkedin.png';
import github from '../../images/github-brands.png';
import email from '../../images/email.svg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);
    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <div className='navbar'>
      <nav>
        <div className='logo'>
          <span className='logo__span'>Alex</span>Yehorov
        </div>
        {(toggleMenu || screenWidth > 1024) && (
          <ul className='list'>
            <li className='links'>
              <a href='#about'>About</a>
            </li>
            <li className='links'>
              <a href='#projects'>Projects</a>
            </li>
            <li className='links'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        )}
        <div className='menuIcons'>
          {toggleMenu ? (
            <img
              src={close}
              className='menu__icon'
              onClick={() => setToggleMenu(false)}
              alt=''
            />
          ) : (
            <img
              src={bars}
              className='menu__icon'
              onClick={() => setToggleMenu(true)}
              alt=''
            />
          )}
        </div>
        <div className='navbar__socials'>
          <div className='navbar__linkedInDiv'>
            <img src={linkedIn} className='navbar__linkedIn' alt='LinkedIn' />
            <p>LinkedIn</p>
          </div>
          <div className='navbar__githubDiv'>
            <img src={github} className='navbar__github' alt='GitHub' />
            <p>GitHub</p>
          </div>
          <a href='#contact'>
            <img src={email} className='navbar__email' alt='email' />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
