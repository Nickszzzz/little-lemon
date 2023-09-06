import React from 'react'
import hero from '../../assets/images/hero.jpeg';
import './hero.css'

function Hero() {
  return (
    <div 
      class='hero'
      style={{
        'background':'linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.69) 100%), url('+hero+'), lightgray 50% / 100% no-repeat',
        'backgroundSize': '100%'
      }}
    >
      <h1>Little Lemon Restaurant</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  )
}

export default Hero
