import { useState } from 'react'
import populatedDestination from '../data/populatedDestination'
import reactLogo from './assets/react.svg' 
import DestinationCard from '../components/destinationCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <body class="flex flex-col bg-white m-auto p-auto text-s">
    <nav class="bg-white border-gray-200 h-15 sm:px-2 lg:px-5 md:px-4 dark:bg-gray-100 ">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        {/* <div> */}
      <img class="h-20 bg-white " src="airbnb.jpg" alt="airbnb logo"/>
      {/* </div> */}
      <form> 
    <label for="default-search" class="mb-2 text-sm font-medium text-white sr-only dark:text-white ">Search</label>
    <div class="relative ">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Where to?" required/>
        <button type="submit" class="text-black absolute right-2.5 bottom-2.5 bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-4 py-2 dark:bg-white dark:hover:bg-white dark:focus:ring-black-300">Search</button>
    </div>
</form>
{/* <h2 className="font-semibold">Become a Host</h2>
<img className="h-5 px-0" src="icons8-world-64.png"/> */}
<ul class="flex flex-wrap  mt-3 text-sm text-gray-500 dark:text-black sm:mt-0">
        <li>
        <h2 className="font-semibold">Become a Host</h2>
        </li>
        <li>
        <img className="h-5 px-0" src="icons8-world-64.png"/>
        </li>
    </ul>
</div>
</nav>
    </body>
    <div class="flex flex-col bg-white m-auto p-auto text-s">
      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black" href='#'><img className="h-5 px-3" src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"/>OMG!</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black" href='#'> <img className="h-5 px-3" src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"/>National park</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"/>Amazing pools</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"/>Islands</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg"/>Arctic</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg"/>Tiny homes</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"/>Design</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'> <img className="h-5 px-3" src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"/>Surfing</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"/>Cabins</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"/>Lakefront</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg"/>Camping</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg"/>Bed & breakfasts</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg"/>Cave</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/>Tropical</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/>Shared homes</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/>Earth homes</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/>Countryside</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/>Luxe</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/>Farms</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/>Amazing views</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/>Castles</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/>Beach</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/>A-frame</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/>Mansions</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/>Golfing</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/>Historical homes</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/>Windmills</a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
          <div class="inline-block px-3">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black m-auto" href='#'><img className="h-5 px-3" src=""/></a>
          </div>
        </div>
      </div>
</div>
    
    <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto  lg:px-12 py-10 px-20">
      {/* <h2 class="text-xl text-gray-900">Popular Destinations in Rwanda</h2>
      <p class="mt-2 text-gray-700">A selection of great work-friendly cities with lots to see and explore.</p> */}
      <div class="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-5 object-full">
      {populatedDestination.map(destination => (
      <DestinationCard destination={destination} key={destination.city}/>
    ))} 
      </div>
    </div>
  
    <footer class="  p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-white">
    <span class="text-sm text-gray-500 sm:text-center dark:text-black">
    
    <ul class="flex flex-wrap  mt-3 text-sm text-gray-500 dark:text-black sm:mt-0">
    <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">© 2022 Airbnb,Inc.</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">.    Privacy. </a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">  Terms . </a>
        </li>
        <li>
            <a href="#" class="hover:underline"> sitemap  .  </a>
        </li>
        <li>
            <a href="#" class="hover:underline">  Destinations      . </a>
        </li>
    </ul>
    </span>
</footer>
    </div>
  )
}

export default App
