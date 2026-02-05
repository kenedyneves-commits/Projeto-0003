
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BundleSelector from './components/BundleSelector';
import Ingredients from './components/Ingredients';
import FAQ from './components/FAQ';
import StickyCTA from './components/StickyCTA';
import { BENEFITS, BUNDLES } from './constants';

const App: React.FC = () => {
  const [selectedBundleId, setSelectedBundleId] = useState(BUNDLES[1].id);
  const [timeLeft, setTimeLeft] = useState(3600); // Fake scarcity timer

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 3600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-[#db2777] text-white py-2 px-4 text-center text-[10px] font-bold tracking-widest uppercase flex items-center justify-center gap-4">
        <span>FREE SHIPPING ON ORDERS OVER $50</span>
        <span className="hidden md:inline">•</span>
        <span>SALE ENDS IN {formatTime(timeLeft)}</span>
      </div>

      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-24 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-50 to-transparent -z-10 hidden md:block"></div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#fdf2f8] text-[#db2777] px-4 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase border border-pink-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              Premium Quality Formula
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-[#4c1d95]">
              The Secret to <br/>
              <span className="text-[#db2777]">Radiant Hair</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
              Nourish your beauty from within. Vital Hair provides the essential nutrients your body needs for stronger strands and healthier nails.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <a href="#offers" className="bg-[#db2777] text-white px-12 py-5 rounded-2xl font-black hover:bg-[#be185d] transition shadow-2xl shadow-pink-200 text-sm tracking-widest active:scale-95">
                CLAIM YOUR OFFER
              </a>
              <div className="flex flex-col justify-center items-center md:items-start">
                <div className="flex text-yellow-400 text-xl">★★★★★</div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">250,000+ Happy Customers</span>
              </div>
            </div>

            {/* As Seen On */}
            <div className="pt-8 opacity-40 grayscale flex flex-wrap justify-center md:justify-start gap-8">
              <span className="font-serif italic font-bold text-2xl">VOGUE</span>
              <span className="font-serif font-bold text-2xl">ELLE</span>
              <span className="font-serif italic text-2xl">GLAMOUR</span>
            </div>
          </div>
          
          <div className="flex-1 relative group">
            <div className="relative z-10 animate-float">
              <img 
                src="https://res.cloudinary.com/dvz9v2fsk/image/upload/v1711474241/rejuv_vital_hair_mockup.png" 
                alt="Vital Hair Product" 
                className="w-full max-w-[550px] mx-auto drop-shadow-[0_35px_35px_rgba(219,39,119,0.3)] transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/vitalhair-en/800/800';
                }}
              />
            </div>
            {/* Background decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-[#fdf2f8] to-transparent rounded-full -z-0 blur-3xl opacity-60"></div>
          </div>
        </div>
      </header>

      {/* Trust Ticker */}
      <section className="bg-[#4c1d95] py-10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8 text-white font-bold text-xs tracking-widest uppercase">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            STRONGER STRANDS
          </div>
          <div className="flex items-center gap-3 border-l border-white/10 pl-8">
            <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            HEALTHY SHINE
          </div>
          <div className="flex items-center gap-3 border-l border-white/10 pl-8">
            <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            RESILIENT NAILS
          </div>
          <div className="flex items-center gap-3 border-l border-white/10 pl-8">
            <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            LAB TESTED
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <div className="flex">
                <div className="relative w-1/2 overflow-hidden border-r-2 border-white">
                  <img src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=400&h=600" alt="Before" className="w-full h-[500px] object-cover" />
                  <span className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">Day 0</span>
                </div>
                <div className="relative w-1/2">
                  <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=400&h=600" alt="After" className="w-full h-[500px] object-cover" />
                  <span className="absolute bottom-4 left-4 bg-[#db2777] text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">Day 60</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#4c1d95]">Real Results, <br/> No Shortcuts.</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vital Hair works with your body's natural processes. By providing the exact micronutrients required for hair health, we help you maintain your crowning glory without harsh chemicals or invasive treatments.
              </p>
              <ul className="space-y-4">
                {[
                  'Supports healthy hair follicles',
                  'Minimizes daily shedding and split ends',
                  'Enhances natural pigment and luster',
                  'Fortifies nail plate resilience'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-gray-700">
                    <div className="bg-pink-100 p-1 rounded-full text-[#db2777]">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#4c1d95] mb-4">Complete Nutrition</h2>
            <p className="text-gray-500">Specially formulated for high absorption and lasting benefits.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="p-10 rounded-[32px] border border-gray-100 bg-white hover:border-[#db2777]/30 hover:shadow-2xl hover:shadow-pink-100 transition-all duration-500 text-center group">
                <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#4c1d95] mb-4">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="offers" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4c1d95] mb-4">Ready to Shine?</h2>
            <p className="text-gray-500">Pick the plan that fits your goals. 3 Bottles recommended for best results.</p>
          </div>
          <BundleSelector selectedId={selectedBundleId} onSelect={setSelectedBundleId} />
        </div>
      </section>

      <Ingredients />

      {/* Guarantee Section */}
      <section className="py-24 bg-[#4c1d95] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 text-[200px] font-black">REJUV</div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto border border-white/20">
             <svg className="w-12 h-12 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h2 className="text-4xl font-bold">30-Day Guarantee</h2>
          <p className="text-xl text-pink-100 font-medium leading-relaxed">
            We are so confident in the Vital Hair formula that we offer a 30-day money-back guarantee. If you don't feel a difference in the quality of your hair and nails, we'll give you your money back. No questions asked.
          </p>
          <div className="pt-4">
            <a href="#offers" className="inline-block bg-white text-[#4c1d95] px-12 py-4 rounded-xl font-black text-sm tracking-widest hover:bg-pink-50 transition-colors">
              TRY IT RISK FREE
            </a>
          </div>
        </div>
      </section>

      <FAQ />

      {/* Modern Footer */}
      <footer className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <span className="text-3xl font-black text-[#db2777]">REJUV</span>
              <p className="text-gray-500 max-w-sm leading-relaxed">
                Empowering your journey to inner health and outer radiance. Our supplements are crafted with purity, science, and your confidence in mind.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholders */}
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-[#db2777] cursor-pointer transition-colors">f</div>
                <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-[#db2777] cursor-pointer transition-colors">ig</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[#4c1d95] mb-6 uppercase text-xs tracking-widest">Support</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="hover:text-[#db2777] cursor-pointer transition-colors">Order Status</li>
                <li className="hover:text-[#db2777] cursor-pointer transition-colors">Shipping Policy</li>
                <li className="hover:text-[#db2777] cursor-pointer transition-colors">Returns & Exchanges</li>
                <li className="hover:text-[#db2777] cursor-pointer transition-colors">Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#4c1d95] mb-6 uppercase text-xs tracking-widest">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="hover:text-[#db2777] cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-[#db2777] cursor-pointer transition-colors">Terms of Service</li>
                <li className="hover:text-[#db2777] cursor-pointer transition-colors">Accessibility</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-xs text-gray-400 font-medium tracking-wide">
                © 2024 REJUV HEALTH INC. ALL RIGHTS RESERVED.
              </p>
              <p className="text-[10px] text-gray-400 max-w-xl text-center md:text-left">
                *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
              </p>
            </div>
            <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <img src="https://img.icons8.com/color/48/visa.png" className="h-6" alt="Visa" />
              <img src="https://img.icons8.com/color/48/mastercard.png" className="h-6" alt="Master" />
              <img src="https://img.icons8.com/color/48/amex.png" className="h-6" alt="Amex" />
              <img src="https://img.icons8.com/color/48/paypal.png" className="h-6" alt="Paypal" />
            </div>
          </div>
        </div>
      </footer>

      <StickyCTA />
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
