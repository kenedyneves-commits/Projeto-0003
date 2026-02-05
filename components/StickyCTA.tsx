
import React, { useState, useEffect } from 'react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 z-40 md:hidden flex flex-col gap-2">
      <div className="flex justify-between items-center px-2">
        <span className="text-xs text-gray-500">Starting at</span>
        <span className="text-lg font-bold text-[#db2777]">$ 39.00</span>
      </div>
      <button className="w-full bg-[#db2777] text-white py-4 rounded-xl font-black text-sm tracking-widest shadow-xl shadow-pink-200 transition-transform active:scale-95">
        GET MY VITAL HAIR
      </button>
    </div>
  );
};

export default StickyCTA;
