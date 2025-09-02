import React from 'react';
import { TapCard } from './TapCard';
import { mockBeers } from '../data/mockBeerData';

export const TapList: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-800 py-8 px-8 tv:py-12 tv:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl tv:text-8xl 4k:text-9xl font-bold text-center text-black mb-2 tv:mb-4">
            ON TAP NOW
          </h1>
          <p className="text-center text-black text-xl tv:text-3xl 4k:text-4xl">
            {mockBeers.length} Fresh Brews Available
          </p>
        </div>
      </div>

      {/* Beer Grid */}
      <div className="max-w-7xl mx-auto px-8 py-8 tv:px-12 tv:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 tv:grid-cols-3 4k:grid-cols-4 gap-6 tv:gap-8">
          {mockBeers.map((beer) => (
            <TapCard key={beer.id} beer={beer} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 py-4 px-8 mt-8 tv:py-8 tv:px-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p className="text-lg tv:text-2xl">Ask your server about daily specials and flights</p>
        </div>
      </div>
    </div>
  );
};