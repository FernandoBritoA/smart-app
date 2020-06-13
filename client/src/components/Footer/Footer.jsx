import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <span className='my-name'>J. Fernando Brito Aguilar</span>
      <div className='a-tags'>
        <a
          href='https://www.youtube.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-globe fa-2x icon' />
        </a>

        <a
          href='https://www.linkedin.com/in/fernando-brito-a6b347199/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-linkedin fa-2x icon' />
        </a>

        <a
          href='https://github.com/FernandoBritoA'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fa-github fa-2x icon' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
