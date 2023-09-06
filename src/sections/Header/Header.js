import React from 'react'
import './header.css';
import Logo from '../../components/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Button from '../../components/Button/Button';

function Header() {
  return (
    <div className='header'>
      <Logo />
      <Navigation />
      <Button type={'primary'} text={'reserve now'} link={'#'} />
    </div>
  )
}

export default Header
