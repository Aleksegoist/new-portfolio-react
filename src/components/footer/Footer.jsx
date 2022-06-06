import React from 'react';
import './footer.css';
import linkedIn from '../../images/linkedIn.svg';
import github from '../../images/github.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__right'>
        <p className='footer__name'>
          <span>Alex</span> Yehorov
        </p>
        <p className='footer__copyRights'>© All Rights Reserved</p>
      </div>
      <div className='footer__socials'>
        <img src={linkedIn} className='footer__social__icons' alt='LinkedIn' />
        <img src={github} className='footer__social__icons' alt='GitHub' />
      </div>
    </div>
  );
};

export default Footer;
