import React from 'react';
import Slider from './components/Slider';
// import CategoryList from './components/CategoryList';
import BigPoster from './components/BigPoster';
import Round from './components/Round';
// import { HiMiniSquares2X2 } from 'react-icons/hi2';
import Products from './products/page';

function Home() {
  return (
    <div className="w-full  items-center justify-between  ">
      <hr />
      <Slider />

      <br />

      {/* Flash Sale
      <div className='flex gap-3 max-w-screen-2xl mx-auto'>
        {<div className='text-sm font-semibold text-teal-500 ml-6 font-sans md:ml-12 mt-10'>Today&apos;s Collection</div>}
      </div> */}
{/* 
      <div className='max-w-screen-2xl mb-10 flex mx-auto'>
        <div className="text-teal-500 text-3xl sm:text-2xl ml-6  mt-10 md:mt-6" aria-label="Shopping Cart Icon">
          <HiMiniSquares2X2 size={40} />
        </div>
        <h2 className=' lg:text-3xl xl:text-4xl text-gray-700  ml-2 my-6 text-3xl sm:text-4xl font-semibold mb-6 mt-10 md:mt-6'>Unique Collections</h2>
      </div> */}

      {/* <div className='max-w-screen-2xl mx-auto'>
        <CategoryList />
      </div> */}

      <div>
        <Products/>
      </div>
      <div className='my-6'>
        <BigPoster />
      </div>
      <div className='my-6'>
        <Round />
      </div>

    </div>
  );
}

export default Home;
