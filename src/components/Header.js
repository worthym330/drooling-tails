import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLink = 'relative px-3 py-2 text-sm font-medium text-brandGold hover:text-brandPink transition';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-brandPink/20">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/drooling tails logo.png" alt="Drooling Tails" className="w-12 h-12 object-contain" />
          <span className="font-pacifico text-2xl text-brandGold group-hover:text-brandPink transition">Drooling Tails</span>
        </Link>
        <button className="md:hidden p-2" onClick={() => setOpen(o=>!o)} aria-label="Menu">
          <span className="block w-6 h-[2px] bg-brandGold mb-1"></span>
          <span className="block w-6 h-[2px] bg-brandGold mb-1"></span>
          <span className="block w-6 h-[2px] bg-brandGold"></span>
        </button>
        <nav className={`flex-col md:flex-row md:flex absolute md:static left-0 right-0 top-full bg-white md:bg-transparent shadow md:shadow-none ${open ? 'flex' : 'hidden'} md:items-center`}> 
          {[
            ['/', 'Home'],
            ['/shop', 'Shop'],
            ['/about', 'About'],
            ['/contact', 'Contact'],
            ['/cart', 'Cart'],
            ['/admin', 'Admin']
          ].map(([to, label]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({isActive}) => `${navLink} ${isActive ? 'text-brandPink after:w-full' : 'after:w-0'} after:absolute after:left-3 after:-bottom-1 after:h-[2px] after:bg-brandPink after:transition-all after:duration-300`}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
