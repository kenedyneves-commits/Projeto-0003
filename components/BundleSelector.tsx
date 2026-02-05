
import React from 'react';
import { BUNDLES } from '../constants';

interface BundleSelectorProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

const BundleSelector: React.FC<BundleSelectorProps> = ({ selectedId, onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {BUNDLES.map((bundle) => (
        <div
          key={bundle.id}
          onClick={() => onSelect(bundle.id)}
          className={`relative cursor-pointer transition-all duration-500 rounded-3xl overflow-hidden border-2 flex flex-col ${
            selectedId === bundle.id
              ? 'border-[#db2777] bg-white shadow-2xl scale-105 z-10'
              : 'border-transparent bg-white shadow-lg hover:border-gray-200'
          }`}
        >
          {bundle.popular && (
            <div className="bg-[#db2777] text-white text-[11px] font-black text-center py-2 tracking-widest uppercase">
              EXPERT RECOMMENDED
            </div>
          )}
          
          <div className="p-8 text-center">
            <span className="inline-block bg-[#fdf2f8] text-[#db2777] px-4 py-1 rounded-full text-xs font-bold mb-4">
              SAVE {bundle.discount}%
            </span>
            <h3 className="text-xl font-bold text-[#4c1d95] mb-2">{bundle.name}</h3>
            
            <div className="flex flex-col items-center mb-6">
              <span className="text-gray-400 text-sm line-through">${bundle.originalPrice.toFixed(2)}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-[#db2777]">${bundle.price.toFixed(2)}</span>
              </div>
              <span className="text-gray-500 text-xs mt-1">Free Shipping Available</span>
            </div>

            <div className="space-y-3 text-left mb-8">
               <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-500 font-bold">✓</span>
                <span>{bundle.units} Bottle{bundle.units > 1 ? 's' : ''} Vital Hair</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-500 font-bold">✓</span>
                <span>{bundle.shippingFree ? 'Free Global Shipping' : 'Standard Delivery'}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="text-green-500 font-bold">✓</span>
                <span>30-Day Money Back Guarantee</span>
              </div>
            </div>

            <button 
              className={`w-full py-4 rounded-xl font-black text-sm transition-all tracking-wider ${
                selectedId === bundle.id 
                  ? 'bg-[#db2777] text-white shadow-xl shadow-pink-200' 
                  : 'bg-gray-100 text-[#4c1d95] hover:bg-gray-200'
              }`}
            >
              ORDER NOW
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BundleSelector;
