import { useState } from 'react'
import populatedDestination from '../data/populatedDestination'
import reactLogo from './assets/react.svg' 
import DestinationCard from '../components/destinationCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <body class="bg-gray-100">
    <nav class="bg-white border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-100">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        {/* <div> */}
      <img class="h-20 bg-white" src="/public/airbnb.jpg" alt="airbnb logo"/>
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
<div><h2 className="font-semibold p-4">Become a Host</h2><img className="h-5" src="/public/icons8-world-64.png"/></div>
</div>
</nav>
{/* </div> */}
<div class="grid gap-3 ">
      <div class="mt-4 space-x-3 sm:mt-6">
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black" href='#'> OMG! </a>
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black" href='#'>National park </a>
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black" href='#'> Amazing pools </a>
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black" href='#'>Islands </a>
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black" href='#'> Arctic </a>
          <a class="font-normal transition duration-50 border-b-2 border-transparent hover:border-black" href='#'>Tiny homes </a>
        </div>
      {/* <div class="px-8 py-12 max-w-md  sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
        <div class="xl:max-w-xl">
        <img class="mt-1 rounded-lg shadow-xl sm:mt-5 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden " src='/public/img1.jpg' alt='woman workcationing on the beach'/>
        <h1 class="mt-1 text-2xl font-normal text-gray-900 sm:mt-8 sm:text-4xl lg:txt-3xl xl:text-4xl">you can work from anywhere. <br class='hidden lg:inline'/><span class="text-brand">Take advantage of it.</span></h1>
        <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
          Bootcamps are the best places you can learn and meet new people.
        </p>
        <div class="mt-4 space-x-2 sm:mt-6">
          <a class="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition" href='#'>Book you bootCamp Now</a>
          <a class="btn btn-secondary" href='#'>Learn more</a>
        </div>
        </div> */}
    {/* </div> */}
    {/* <div class="hidden relative lg:block 2xl:col-span-3">
    <img  class="absolute inset-0 w-full h-full object-cover object-center" src='/public/img1.jpg' alt='woman workcationing on the beach'/>
    </div> */}
    </div>
    
    </body>
    <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto  lg:px-12 py-10 px-20">
      {/* <h2 class="text-xl text-gray-900">Popular Destinations in Rwanda</h2>
      <p class="mt-2 text-gray-700">A selection of great work-friendly cities with lots to see and explore.</p> */}
      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-20 object-full">
      {populatedDestination.map(destination => (
      <DestinationCard destination={destination} key={destination.city}/>
    ))} 
      </div>
    </div>
  
    <footer class="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-white">
    <span class="text-sm text-gray-500 sm:text-center dark:text-black">© 2022 Airbnb,Inc
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-black sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy . </a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Terms . </a>
        </li>
        <li>
            <a href="#" class="hover:underline">sitemap</a>
        </li>
    </ul>
</footer>
    </div>
  )
}

export default App
