import React from 'react';
import './Header.css';
import img from '../../Assets/Images/img.JPG'
// import ButtonHeader from '../Buttons/ButtonHeader';

function Header() {
  return (
    <div className='header'>
      <div className='content'>
      <div className='text'>
      <h1>Hi, I'm Mizo</h1>
      <h2>I'm a Fullstack Developer</h2>
      <button>Contact ME</button>
      </div>
       
      <img className='profile' src={img} alt="Mohamed El Shawa" />
      </div>
      
           
        
        </div>
    
  )
}

export default Header;