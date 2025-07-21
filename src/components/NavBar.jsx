import React, { useState } from 'react'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  }

  return (
<nav className="rounded-b-full ">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button type="button" aria-controls="mobile-menu" aria-expanded={isMenuOpen} 
        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 
        hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden 
        focus:ring-inset"
        onClick={toggleMenu}>
          {/*
            Icon when menu is closed: Hamburger
            Icon when menu is open: X (close)
          */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className={isMenuOpen ? "hidden size-6" : "block size-6"}>
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className={isMenuOpen ? "block size-6" : "hidden size-6"}>
            <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
        <div className="flex shrink-0 items-center">
          <img src="/logo.png" alt="NYMOVIES LOGO" className="h-8 w-auto" />
          <span className='rounded-md text-white hover:bg-gray-700 hover:text-white flex justify-center font-bold'>YNMOVIES</span>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a href="#" aria-current="page" className="rounded-md hover:bg-gray-700 px-3 py-2 text-sm font-medium text-white hover:text-white">Home</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Genres</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Country</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Movies</a>
            <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white">Tv-Series</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Mobile menu, show/hide based on menu state. --> */}
  <div id="mobile-menu" className={isMenuOpen ? "sm:hidden" : "sm:hidden hidden"}>
    <div className="space-y-1 px-2 pt-2 pb-3">
      {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
      <a href="#" aria-current="page" className="block rounded-md hover:bg-gray-700 px-3 py-2 text-base font-medium text-white hover:text-white">Home</a>
      <a href="#"  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">Genres</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">Country</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">Movies</a>
      <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white">Tv-Series</a>
    </div>
  </div>
</nav>
  )
}

export default NavBar