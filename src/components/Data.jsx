import React from 'react';
import { useState, useEffect } from 'react';

export default function Data()  {
  const [data, editData] = useState([]);
  useEffect(() => {
    let isMounted = true;
    
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(response => response.json())
  .then(datac => {
      if (isMounted){
        editData(datac);
      }
    });
    
    return () => { isMounted = false };
  })

  return (
    <div>
      {data.map((crypto) => (
        <div className="p-4 bg-gray-300 text-white text-2xl rounded-lg flex flex-col">
          <span>{crypto.id}</span>
          <span>{crypto.market_cap}</span>
        </div>))
      }      
    </div>
    
  )
  }








  
