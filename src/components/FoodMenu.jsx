import React, { useState } from 'react';

function FoodMenu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [discount, setDiscount] = useState(0);

  function applyCategoryFilter(categoryName) {
    setSelectedCategory(categoryName);
  }

  function applyDiscountCode(percent, codeName) {
    setDiscount(percent);
    alert('Coupon Code Applied: ' + codeName + ' (' + percent + '% OFF)');
  }

  return (
    <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-red-500/30 bg-gradient-to-br from-zinc-900 via-black to-red-950 p-6 text-white shadow-2xl shadow-red-950/50 sm:p-10">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-red-600/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-red-500/10 blur-3xl"></div>

      <div className="relative">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
              Fresh & Delicious
            </span>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Quick Bites
              <span className="block bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                Food Corner
              </span>
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Big flavours. Better deals.
            </p>
          </div>

          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-600 to-red-950 text-4xl shadow-xl shadow-red-900/40 transition duration-300 hover:rotate-6 hover:scale-110 sm:h-24 sm:w-24 sm:text-5xl">
            🍔
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg backdrop-blur-sm">
          <div className="mb-4 flex items-center justify-between gap-2">
            <div>
              <p className="text-lg font-bold text-white">Explore Menu</p>
              <p className="text-xs text-zinc-400">Choose your favourite</p>
            </div>
            <span className="rounded-lg bg-red-500/10 px-3 py-1.5 text-xs font-bold text-red-400">
              MENU
            </span>
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-zinc-500">
            Filter Category
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => applyCategoryFilter('Burgers')}
              className={`rounded-xl border px-4 py-3 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                selectedCategory === 'Burgers'
                  ? 'border-red-500 bg-red-600 text-white shadow-lg shadow-red-900/40'
                  : 'border-white/10 bg-zinc-800 text-zinc-300 hover:border-red-500/60 hover:bg-red-950'
              }`}
            >
              🍔 Burgers
            </button>

            <button
              onClick={() => applyCategoryFilter('Pizzas')}
              className={`rounded-xl border px-4 py-3 text-sm font-bold transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                selectedCategory === 'Pizzas'
                  ? 'border-red-500 bg-red-600 text-white shadow-lg shadow-red-900/40'
                  : 'border-white/10 bg-zinc-800 text-zinc-300 hover:border-red-500/60 hover:bg-red-950'
              }`}
            >
              🍕 Pizzas
            </button>

            <button
              onClick={() => applyCategoryFilter('All')}
              className={`rounded-xl border px-4 py-3 text-sm font-bold transition duration-300 hover:-translate-y-1 ${
                selectedCategory === 'All'
                  ? 'border-red-500 bg-red-600 text-white shadow-lg shadow-red-900/40'
                  : 'border-white/10 bg-zinc-800 text-zinc-300 hover:border-red-500/60 hover:bg-red-950'
              }`}
            >
              ✨ Show All
            </button>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-zinc-900 to-amber-950/30 p-5 shadow-lg">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-lg font-bold text-white">Exclusive Offers</p>
              <p className="text-xs text-zinc-400">Unlock your savings</p>
            </div>
            <span className="text-3xl">🎁</span>
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-500">
            Apply Quick Promo
          </p>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => applyDiscountCode(10, 'WELCOME10')}
              className="group rounded-xl border border-amber-500/30 bg-gradient-to-br from-amber-500/15 to-orange-600/5 p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-500/20 hover:shadow-lg hover:shadow-amber-900/20"
            >
              <span className="block text-2xl font-black text-amber-400 transition group-hover:scale-105">
                10% OFF
              </span>
              <span className="mt-2 block text-xs font-bold text-zinc-300">
                WELCOME10
              </span>
              <span className="mt-1 block text-[11px] text-zinc-500">
                Welcome offer
              </span>
            </button>

            <button
              onClick={() => applyDiscountCode(20, 'FEAST20')}
              className="group rounded-xl border border-red-500/30 bg-gradient-to-br from-red-600/20 to-red-950/30 p-4 text-left transition duration-300 hover:-translate-y-1 hover:border-red-400 hover:bg-red-500/20 hover:shadow-lg hover:shadow-red-900/30"
            >
              <span className="block text-2xl font-black text-red-400 transition group-hover:scale-105">
                20% OFF
              </span>
              <span className="mt-2 block text-xs font-bold text-zinc-300">
                FEAST20
              </span>
              <span className="mt-1 block text-[11px] text-zinc-500">
                Feast special
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-950/70 to-zinc-900 p-5 shadow-lg transition duration-300 hover:border-red-400 hover:shadow-red-950/40">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Selected Category
              </span>
              <span className="text-2xl">🍽️</span>
            </div>
            <p className="text-2xl font-black text-white">{selectedCategory}</p>
            <p className="mt-2 text-xs text-zinc-500">
              Your current menu selection
            </p>
          </div>

          <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/40 to-zinc-900 p-5 shadow-lg transition duration-300 hover:border-amber-400 hover:shadow-amber-950/30">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Your Discount
              </span>
              <span className="text-2xl">🏷️</span>
            </div>
            <p className="text-3xl font-black text-amber-400">{discount}%</p>
            <p className="mt-2 text-xs text-zinc-500">
              Savings applied to your offer
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 border-t border-white/10 pt-5 text-xs text-zinc-500">
          <span className="text-red-500">♥</span>
          Made for food lovers
          <span className="text-red-500">♥</span>
        </div>
      </div>
    </div>
  );
}

export default FoodMenu;