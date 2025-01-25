import React from 'react'
import Image from 'next/image'
import Map2 from '@/common/assets/images/Map.png'
const Maps = () => {
  return (
    <React.Fragment>
      <div className='bg-white pt-[30px] pb-4 md:pt-[80px] md:pb-[30px]'>
      <div className='container'>
        <div className='max-w-[682px] mx-auto'>
          <h3 className='text-center text-2xl md:text-4xl font-bold font-lato'>Nachhaltige Wirtschaft</h3>
          <p className='text-center font-lato text-xs md:text-lg text-[#777B8B] mt-[18px]'>Nachhaltige Wirtschaft
          Helfen Sie anderen, das zu tun, was wir nicht konnten: Eine Wirtschaft auf Basis erneuerbarer Energien aufbauen.</p>
        </div>
       <div className='max-w-full mx-auto mt-7'>
       <Image className='w-full' src={Map2} alt='map'/>
       </div>
      </div>
      </div>
    </React.Fragment>
  )
}

export default Maps
