/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'


const RoomDetails = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const foundRoom = roomsDummyData.find((item) => item._id === id)

    if (foundRoom) {
      setRoom(foundRoom)
      setMainImage(foundRoom.images?.[0] || null)
    } else {
      setRoom(null)
      setMainImage(null)
    }
  }, [id])

  if (!room) return null

  return (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>
          {room.hotel.name}
          <span className='font-inter text-sm'> ({room.roomType || 'Room'})</span>
        </h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>
          20% OFF
        </p>
      </div>

      <div className='flex items-center gap-1 mt-2'>
        <StarRating />
        <p className='ml-2'>200+ Rating</p>
      </div>

      <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets.locationIcon} alt='location-icon' />
        <span>{room.hotel.address}</span>
      </div>

      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
         
         <div className='lg:w-1/2 w-full'>
            <img src={mainImage} alt='room img' className='w-full rounded-xl shadow-lg object-cover'/>
         </div>

         <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
           {room?.images.length > 1 && room.images.map((image, index)=>(
            <img onClick={()=> setMainImage(image)}
            key={index} src={image} alt='room image' className={'w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && "outline-3 outline-orange-500"}'}/>
           ))}
         </div>
      
      </div>

      <div className='flex flex-col md:flex-fom md:justify-between mt-10'>
            <div className='flex flex-col'>
            <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before in Your Life</h1>
             <div className='flex flex-wrap item-center mt-3 mb-6 gap-4'>
               {room.amenities.map((item, index)=>(
                  <div key={index} className='flex item-center gap-2 px-2 rounded-lg bg-gary-100'>
                     <img src={facilityIcons[item]} alt={item} className='w-5 h-5'/>
                     <p className='text-xs'>{item}</p>
                  </div>
               ))}
             </div>
          </div>
          <p className='text-2xl font-medium mt-6 md:mt-0'>${room.pricePerNight} /night</p>
      </div>

       <form className='flex flex-col md:flex-row itwm-start md:item-center justify-between ng-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 ronded-xl mx-auto mt-16 max-w-6xl'>
         <div className='flex flex-col flex-wrap md:flex-row item-start md:item-center gap-4 md:gap-10 text-gray-500'>
           
            <div className='flex flex-col'>
               <label htmlFor='chekIndate' className='font-medium'>Check In</label>
               <input type='date' id='chekIndate' placeholder='Check In' className='w-full founded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
            </div>

             <div className='flex flex-col'>
               <label htmlFor='chekOutdate' className='font-medium'>Check Out</label>
               <input type='date' id='chekOutdate' placeholder='Check Out' className='w-full founded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
            </div>

             <div className='flex flex-col'>
               <label htmlFor='guests' className='font-medium'>Guests</label>
               <input type='number' id='guests' placeholder='0' className='w-full founded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
            </div>

         </div> 
         <button type='submit' className='bg-primary hover:bg-orimary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'>Check Availability</button> 
       </form> 

       <div className='mt-6 space-y-4'>
         {roomCommonData.map((spec, index) => (
           <div key={index} className='flex items-start gap-2'>
             <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6 h-6' />
             <div>
               <p className='text-base'>{spec.title}</p>
               <p className='text-gray-500'>{spec.description}</p>
             </div>
           </div>
         ))}
       </div>
     

       <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gary-500'>
         <p>Guests will be allocated on the ground floor according to availability.You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling</p>
      </div>  

      <div className='rounded-[32px] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] max-w-lg'>
        <div className='flex items-center gap-4'>
          <div className='flex h-16 w-16 items-center justify-center rounded-full bg-black'>
            <img src={assets.owner} alt='Host' className='h-10 w-10 rounded-full object-cover' />
          </div>
          <div>
            <p className='text-lg font-semibold text-gray-900'>Hosted by {room.hotel.name}</p>
            <div className='mt-2 flex items-center gap-2 text-gray-500'>
              <StarRating />
              <span className='text-sm'>200+ reviews</span>
            </div>
          </div>
        </div>
        <button className='mt-6 w-full rounded-3xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700'>
          Contact Now
        </button>
      </div>

    </div>
  )
}

export default RoomDetails