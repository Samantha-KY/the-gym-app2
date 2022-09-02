import React from "react";

export default function destinationCard({destination}){
    return (
    <div class="flex flex-col bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md ">
      <img class="h-36  rounded-tl-md rounded-tr-md object-full" src={destination.imageUrl} alt={destination.imageAlt} />
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