
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-pink-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-black tracking-tighter text-[#db2777]">REJUV</span>
          <span className="hidden sm:block text-[10px] uppercase tracking-widest font-bold border-l pl-3 border-gray-200 text-gray-400">Vital Hair</span>
        </div>
        
        <div className="hidden lg:flex gap-10 text-[11px] font-black tracking-widest uppercase text-[#4c1d95]">
          <a href="#benefits" className="hover:text-[#db2777] transition-colors">Benefits</a>
          <a href="#ingredients" className="hover:text-[#db2777] transition-colors">Formula</a>
          <a href="#offers" className="hover:text-[#db2777] transition-colors">Kits</a>
          <a href="#faq" className="hover:text-[#db2777] transition-colors">FAQ</a>
        </div>

        <a href="#offers" className="bg-[#db2777] text-white px-8 py-3 rounded-xl text-xs font-black tracking-widest hover:bg-[#be185d] transition shadow-lg shadow-pink-100">
          BUY NOW
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
