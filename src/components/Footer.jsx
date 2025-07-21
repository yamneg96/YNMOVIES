import React from 'react'

const Footer = () => {
  return (
    <div className='border-2 shadow-2xl shadow-cyan-400 rounded-t-2xl'>
      <div className='text-white text-center pb-4 font-sans'>
        <span className='text-cyan-600 flex justify-center text-2xl font-bold'>YNMOVIES <img className='w-15 h-10' src="/logo.png" alt="Logo" /></span> 
        &nbsp; Free movies online, here you can watch movies online in high quality for free without annoying of advertising, just come and enjoy your movies online.
      </div>
      <div className='flex text-center justify-evenly'>
        <span className='text-cyan-600 px-4 font-bold'>COUNTRIES
          <ul className='text-white'>
            <li>United States</li>
            <li>United Kingdom</li>
            <li>Asia</li>
            <li>France</li>
          </ul>
        </span>
        <span className='text-cyan-600 font-bold'>GENRES
        <ul className='text-white'>
            <li>Drama</li>
            <li>Horror</li>
            <li>Fantasy</li>
            <li>Mystery</li>
            <li>Sci-Fi & Fantasy</li>
          </ul>
        </span>
        <span className='text-cyan-600 font-bold'>HELP
        <ul className='text-white'>
            <li>FAQ's</li>
            <li>UCMA</li>
          </ul>
        </span>
      </div>
      <div className='text-white text-center p-8'>
        Copyright &copy; 2025 NYMOVIES All Rights Reserved.
      </div>
    </div>
  )
}
export default Footer