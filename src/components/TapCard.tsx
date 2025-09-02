import React from 'react';
import type { Beer } from '../data/mockBeerData';

interface TapCardProps {
  beer: Beer;
}

export const TapCard: React.FC<TapCardProps> = ({ beer }) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 tv:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Tap Number Badge */}
      <div className="flex justify-between items-start mb-4 tv:mb-6">
        <div className="bg-amber-500 text-black font-bold text-xl tv:text-3xl px-3 py-1 tv:px-5 tv:py-2 rounded-full">
          {beer.tapNumber}
        </div>
        <div className="flex gap-2">
          {beer.isNew && (
            <span className="bg-green-600 text-white text-xs tv:text-sm px-2 py-1 tv:px-3 tv:py-2 rounded-full font-medium">
              NEW
            </span>
          )}
          {beer.isFeatured && (
            <span className="bg-red-600 text-white text-xs tv:text-sm px-2 py-1 tv:px-3 tv:py-2 rounded-full font-medium">
              FEATURED
            </span>
          )}
        </div>
      </div>

      {/* Beer Info */}
      <div className="mb-4 tv:mb-6">
        <h3 className="text-2xl tv:text-4xl font-bold text-white mb-1 tv:mb-2">{beer.name}</h3>
        <p className="text-amber-400 text-lg tv:text-2xl font-medium">{beer.brewery}</p>
      </div>

      {/* Style and ABV */}
      <div className="mb-4 tv:mb-6">
        <p className="text-gray-300 text-lg tv:text-xl mb-1 tv:mb-2">{beer.style}</p>
        <div className="flex items-center gap-4 text-sm tv:text-lg text-gray-400">
          <span>{beer.abv}% ABV</span>
          {beer.ibu && <span>{beer.ibu} IBU</span>}
        </div>
      </div>

      {/* Description */}
      {beer.description && (
        <p className="text-gray-300 text-sm tv:text-base mb-4 tv:mb-6 line-clamp-2">{beer.description}</p>
      )}

      {/* Price */}
      <div className="text-right">
        <span className="text-3xl tv:text-5xl font-bold text-amber-500">${beer.price.toFixed(2)}</span>
        <span className="text-gray-400 text-sm tv:text-lg ml-1">/ pint</span>
      </div>
    </div>
  );
};