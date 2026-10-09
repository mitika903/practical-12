import React from 'react';
import FoodMenu from './components/FoodMenu';

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080808] px-4 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-red-500">
          Premium Food Experience
        </p>
        <h1 className="text-3xl font-black text-white sm:text-5xl">
          Taste The
          <span className="ml-2 text-red-500">Difference.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-zinc-400 sm:text-base">
          Discover your favourites and enjoy exclusive offers, all in one place.
        </p>
      </div>

      <FoodMenu />

      <p className="mt-8 text-center text-xs tracking-wide text-zinc-600">
        QUICK BITES © 2026
      </p>
    </div>
  );
}

export default App;