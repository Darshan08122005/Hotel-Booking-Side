import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={'/room/' + room._id}
      onClick={() => window.scrollTo(0, 0)}
      key={room._id}
      className='flex flex-col md:flex-row overflow-hidden rounded-xl bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.15)]'
    >
      <div className='relative md:w-[58%]'>
        <img src={room.images[0]} alt='' className='w-full h-72 md:h-full object-cover' />
        {index % 2 === 0 && (
          <p className='absolute top-3 left-3 px-3 py-1 text-xs bg-white text-gray-800 font-medium rounded-full'>Best Seller</p>
        )}
      </div>

      <div className='flex-1 p-4 md:p-6 flex flex-col justify-center'>
        <div className='flex items-center justify-between gap-2'>
          <p className='font-playfair text-2xl md:text-3xl font-medium text-gray-800'>{room.hotel.name}</p>
          <div className='flex items-center gap-1 text-sm text-gray-700'>
            <img src={assets.starIconFilled} alt='star-icon' className='h-4 w-4' />
            <span>4.0</span>
          </div>
        </div>

        <div className='flex items-center gap-1 text-sm text-gray-600 mt-3'>
          <img src={assets.locationIcon} alt='location-icon' className='h-4 w-4' />
          <span>{room.hotel.address}</span>
        </div>

        <div className='flex items-center justify-between mt-6'>
          <p className='text-gray-800'>
            <span className='text-2xl font-semibold'>${room.pricePerNight}</span>
            <span className='text-sm text-gray-500'> /night</span>
          </p>
          <button className='px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer'>
            Book Now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard