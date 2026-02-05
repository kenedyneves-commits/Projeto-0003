
import React from 'react';
import { INGREDIENTS } from '../constants.ts';

const Ingredients: React.FC = () => {
  return (
    <section id="ingredients" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#4c1d95]">The Secret of Our Formula</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine high-potency vitamins and minerals to support your hair health from within.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {INGREDIENTS.map((ing) => (
            <div key={ing.name} className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-8 border-white shadow-xl">
                <img src={ing.image} alt={ing.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#4c1d95]">{ing.name}</h3>
              <p className="text-gray-600 leading-relaxed px-4">{ing.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
