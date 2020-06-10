import React, { Fragment } from 'react';
import './AnimatedNavbar.scss';
import { Link } from 'react-router-dom';
import brain from '../../images/brain.png';
import face from '../../images/face.png';
import apparel from '../../images/apparel.png';
import color from '../../images/color.png';

const AnimatedNavbar = () => {
  return (
    <Fragment>
      <nav className='navbar'>
        <ul className='navbar-nav'>
          <li className='logo'>
            <Link to='/' className=' logo-link'>
              <div className='logo-image'>
                <img
                  src={brain}
                  alt=''
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <span className='link-text logo-text'>Smart App</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/models/facerecon' className='nav-link'>
              <div className='item-image'>
                <img
                  src={face}
                  alt=''
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <span className='link-text'>Face Recognition</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/models/color' className='nav-link'>
              <div className='item-image'>
                <img
                  src={color}
                  alt=''
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <span className='link-text'>Color Identifier</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/models/apparel' className='nav-link'>
              <div className='item-image'>
                <img
                  src={apparel}
                  alt=''
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <span className='link-text'>Apparel Detector</span>
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default AnimatedNavbar;
