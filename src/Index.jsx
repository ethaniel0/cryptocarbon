import React from 'react';

import Carbon from './components/Carbon';
import Card from './components/IndexCard';
import Carbonfn from './components/Carbonfn';
import Data from './components/Data';
import Header from './components/Header';

 export default function Index({icon, name, desc}) {
  return (
    <main className='px-2 py-5 text-center'>
      <Header />

      {/* intro text */}
      <span className='text-2xl font-bold block mb-8'>Pay with your favorite coins. Without paying the price of a hotter planet.</span>

      <span className='text-xl block px-8'>A comprehensive platform that helps you make informed decisions when it comes to cryptocurrencies and their environmental impacts.</span>

      {/* why cryptocarbon */}
      <span className='text-3xl font-bold block mt-8 mb-4'>Why CryptoCarbon?</span>

      <div className='grid grid-cols-2'>
        <Card icon="/src/assets/tree.svg" name="Eco-Friendly" desc="All money goes to carbon offsetting" />
        <Card icon="/src/assets/snap.svg" name="Easy" desc="You don’t even have to think about it." />
        <Card icon="/src/assets/relief.svg" name="Relieving" desc="Stop worrying about crypto energy usage" />
        <Card icon="/src/assets/group.svg" name="Large" desc="Join hundreds of people" />
      </div>

      {/* tons of carbon offset */}
      <div className="mt-12 h-48 flex">
        {/* tons of carbon offset */}
        <div className='relative h-48 w-48'>
          <img src='/src/assets/cloud.svg' id='cloud1' className="absolute h-24" />
          <img src='/src/assets/cloud.svg' id='cloud2' className="absolute h-24" />
        </div>
        {/* number */}
        <div className='flex flex-col'>
          <span className='block text-3xl font-bold'>0 tons</span>
          <span className='block text-2xl w-3/4 place-self-center'>of carbon offset in the past year</span>
        </div>
      </div>

      <button className="join-btn p-4 rounded-xl text-3xl font-bold">Join Us Today!</button>

      {/* select */}
      <div className='mt-4'>
        <Carbonfn />
      </div>
         <Carbon />

      <Data />
    </main>
  )
}