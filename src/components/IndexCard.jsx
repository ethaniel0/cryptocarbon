import React from 'react';

 export default function Card({icon, name, desc}) {
  return (
    <div className="index-card rounded-xl flex flex-col justify-center items-center">
      <img src={icon} />
      <span>{name}</span>
      <span>{desc}</span>
    </div>
  )
}