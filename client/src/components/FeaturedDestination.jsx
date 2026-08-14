import React from 'react'
import HotelCard from './HotelCard'
import Title from './Title'
import { roomsDummyData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const FeaturedDestination = () => { 


  const navigate = useNavigate();



  return (
    <section className='px-6 md:px-16 lg:px-24 xl:px-32 py-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center text-center mb-10'>
          <Title
            title='Featured Destinations'
            subTitle='Explore our most popular destinations and find your perfect stay.'
            align='center'
            font='font-playfair'
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
          {roomsDummyData.slice(0, 4).map((room, index) => (
            <HotelCard key={room._id} room={room} index={index} />
          ))}
        </div>
        <center><button onClick={()=>{navigate('/rooms'); scrollTo(0, 0)}}
          className='mt-8 px-6 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer'>
          View All Destinations
        </button></center>
      </div>
    </section>
  )
}

export default FeaturedDestination