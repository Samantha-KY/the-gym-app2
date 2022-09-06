import React from "react";

export default function destinationCard({destination}){
    return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
      <div class="absolute top-2 right-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                      
                </div>
      <img class="h-36  rounded-tl-md rounded-tr-md object-contain rounded-lg" src={destination.imageUrl} alt={destination.imageAlt} />
      <div class="px-3 py-2">
        <h3 class="text-lg font-semibold text-gray-800 uppercase">{destination.city}</h3>
        <p class="text-gray-600">{destination.averegePrice} / night average</p>
        <div class="mt-4">
          <a href="#" class="text-indigo-500 hover:text-indigo-400 font-semibold text-sm ">Explore {destination.properCount} properties</a>
        </div>
      </div>
      
    </div>
    );
}