import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

 export default function Header() {
  const [menu, useMenu] = useState(false);
  return (
    <nav className='flex justify-around items-center mb-8'>
      <img src="/src/assets/logo.svg" className='w-12' />
      <span className='title font-bold text-4xl'>CryptoCarbon</span>
      <i onClick={() => useMenu(!menu)}  className="fa-solid fa-bars text-3xl"></i>
      <div className={'nav-menu absolute right-0 flex flex-col text-left px-6 py-2 text-2xl' + (menu ? '' : ' nav-hide')}>
        <Link to='/' className='py-4'>Home</Link>
        <Link to='/info' className='py-4'>Info</Link>
        <Link to='/calculator' className='py-4'>Calculator</Link>
      </div>
    </nav>
  )
}