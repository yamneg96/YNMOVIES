import React from 'react'

const Footer = () => {
  return (
    <div className='border-2 border-amber-50 bg-black flex-col'>
    <div className='text-white text-3xl text-left font-sans'>
      <span className='text-cyan-600'>YNMOVIES</span> 
      : Welcome, where you can find your favourite movies here 😊.
      </div>
      <div className='flex '>
      <span className='text-cyan-600'>Countries </span>
        <ul className='text-white'>
          <li>USA</li>
          <li>UK</li>
          <li>ASIA</li>
        </ul>
      <span className='text-cyan-600'>Genres </span>
      <ul className='text-white'>
          <li>USA</li>
          <li>UK</li>
          <li>ASIA</li>
        </ul>
      <span className='text-cyan-600'>Contact </span>
      <ul className='text-white'>
          <li>USA</li>
          <li>UK</li>
          <li>ASIA</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer