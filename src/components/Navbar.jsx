import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../assets/cyberize-logo.png';

const Navbar = ({ twClasses }) => {
  return (
    <div className={`navbar ${twClasses}`}>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to={'/page-one'}>Page One</Link>
            </li>
            <li>
              <Link to={'/page-two'}>Page Two</Link>
            </li>
          </ul>
        </div>
        <Link to={'/'} className='btn btn-ghost normal-case text-xl'>
          <img src={Logo} alt='' className='w-8 h-8 mr-2' />
          Cyberize GMB Ranking
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li className=''>
            <Link className='' to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link to={'/page-one'}>Page One</Link>
          </li>
          <li>
            <Link to={'/page-two'}>Page Two</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <Link to={'/demo'} className='btn'>
          Demo
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
