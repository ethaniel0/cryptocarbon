import React from 'react';

import Carbon from './components/Carbon';
import Carbonfn from './components/Carbonfn';
import Header from './components/Header';

 export default function Calc() {
  return (
    <main className='py-5 text-center'>
      <Header />
      <span className='text-4xl font-bold'>Calculator</span>
      <Carbonfn />
      <Carbon />
      
    </main>
  )
}