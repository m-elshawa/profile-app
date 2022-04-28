import React from 'react';
import './Header.css';
import profile from '../../Assets/Images/profile.png'
// import ButtonHeader from '../Buttons/ButtonHeader';

function Header() {
  return (
    <div className='header'>
      <h1>Hi, I'm Mizo</h1>
      <h2>I'm a Fullstack Developer</h2>
      <img className='profile' src={profile} alt="Mohamed El Shawa" />
        <button>Home</button>
        <button>Profile</button>
        <button>Portofolio</button>
        <button>Contact me</button>
        {/* <ButtonHeader /> */}
        {/* <ButtonHeader />
        <ButtonHeader />
        <ButtonHeader /> */}
        
        
        </div>
    // <h1>My header</h1>
  )
}

export default Header;