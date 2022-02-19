import React from 'react';
import './App.css';
import Carbon from './components/Carbon';
import Card from './components/IndexCard';

export default function App() {
  return (
    <main className='px-2 py-5 text-center'>
      <nav className='flex justify-around items-center mb-8'>
        <img src="/src/assets/logo.svg" className='w-12' />
        <span className='title font-bold text-4xl'>CryptoCarbon</span>
        <i className="fa-solid fa-bars text-3xl"></i>
      </nav>

      <span className='text-2xl font-bold block mb-8'>Pay with your favorite coins. Without paying the price of a hotter planet.</span>

      <span className='text-xl block px-8'>A comprehensive platform that helps you make informed decisions when it comes to cryptocurrencies and their environmental impacts.</span>

      <span className='text-3xl font-bold block mt-8'>Why CryptoCarbon?</span>

      <div>
        <Card icon="/src/assets/tree.svg" name="Eco-Friendly" desc="All money goes to carbon offsetting" />
      </div>
      
       <Carbon />
    </main>
  );
}

