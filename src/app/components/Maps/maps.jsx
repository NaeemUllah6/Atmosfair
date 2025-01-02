import React from 'react'
import Image from 'next/image'
import map from '@/assets/images/map.svg'
const Maps = () => {
  return (
    <div className='py-[30px] md:py-20'>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-7">
            <div>
            <h2 className='font-bold text-2xl text-center md:text-start  md:text-[36px] font-lato'>Nachhaltige Wirtschaft</h2>
            <p className='font-lato text-xs text-center md:text-start md:text-base mt-[18px] text-[#6B7280]'>Helfen Sie anderen, das zu tun, was wir nicht konnten: Eine Wirtschaft auf Basis erneuerbarer Energien aufbauen..</p>
            </div>
            <div>
                <Image src={map} alt='' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Maps
