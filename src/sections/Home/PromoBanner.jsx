import React from 'react'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const PromoBanner = () => {
  return (
    <div className='py-20'>
      <div className="relative overflow-hidden bg-black rounded-3xl p-6 sm:p-10 lg:p-16">

        {/* Bubble 1 */}
        <div className="absolute -right-10 -top-10 sm:-right-16 sm:-top-16 w-40 h-40 sm:w-72 sm:h-72 rounded-full bg-yellow-400 opacity-10" />
        
        {/* Bubble 2 */}
        <div className="absolute left-[30%] sm:left-[40%] -bottom-16 sm:-bottom-20 w-32 h-32 sm:w-52 sm:h-52 rounded-full bg-yellow-400 opacity-[0.06]" />

        {/* Content */}
        <div className="relative z-1 flex flex-col lg:flex-row lg:justify-between lg:items-center text-white gap-6">

          {/* Text */}
          <div>
            <h1 className='font-outfit text-gold text-sm sm:text-base'>
              LIMITED TIME OFFER
            </h1>

            <h1 className='py-3 sm:py-5 font-cormorant text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug'>
              Up to 40% Off <br />Summer Essentials
            </h1>

            <h1 className='text-gray-400 font-outfit text-sm sm:text-base'>
              Refresh your wardrobe with our handpicked summer picks
            </h1>
          </div>

          {/* Button */}
          <div className="w-full lg:w-auto">
            <Link to="/shop">
              <Button 
                text={"Shop the Sale"} 
                classNames={"w-full lg:w-auto hover:scale-103"} 
              />
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PromoBanner