import React from 'react';
import type { Beer } from '../data/mockBeerData';

interface TapCardProps {
  beer: Beer;
}

export const TapCard: React.FC<TapCardProps> = ({ beer }) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Tap Number Badge */}
      <div className="flex justify-between items-start mb-4">
        <div className="bg-amber-500 text-black font-bold text-xl px-3 py-1 rounded-full">
          {beer.tapNumber}
        </div>
        <div className="flex gap-2">
          {beer.isNew && (
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              NEW
            </span>
          )}
          {beer.isFeatured && (
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              FEATURED
            </span>
          )}
        </div>
      </div>

      {/* Beer Info */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-1">{beer.name}</h3>
      </div>

      {/* Style and ABV */}
      <div className="mb-4">
        <p className="text-gray-300 text-lg mb-1">{beer.style}</p>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>{beer.abv}% ABV</span>
          {beer.ibu && <span>{beer.ibu} IBU</span>}
        </div>
      </div>

      {/* Description */}
      {beer.description && (
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{beer.description}</p>
      )}

      {/* Price */}
      <div className="text-right">
        <span className="text-3xl font-bold text-amber-500">${beer.price.toFixed(2)}</span>
        <span className="text-gray-400 text-sm ml-1">/ pint</span>
      </div>
    </div>
  );
};