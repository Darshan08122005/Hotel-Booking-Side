import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 bg-slate-50 pt-20 pb-30'>
      <Title title='What Our Guests Say' subTitle='Read the experiences of our satisfied guests.' align='center' />

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-7xl mt-10'>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className='bg-white p-6 rounded-xl shadow h-full flex flex-col'>
            <div className='flex items-center gap-3'>
              <img className='w-12 h-12 rounded-full' src={testimonial.image} alt={testimonial.name} />
              <div>
                <p className='font-playfair text-xl'>{testimonial.name}</p>
                <p className='text-gray-500'>{testimonial.address}</p>
              </div>
            </div>

            <div className='flex items-center gap-1 mt-4'>
              <StarRating rating={testimonial.rating} />
            </div>

            <p className='text-gray-500 mt-4'>"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial