'use client'
import React, { useState } from 'react'

const CardsComponent = ({cards}) => {

    const [activecard, setActiveCard] = useState(null)

    return (
        <div className='flex md:flex-wrap gap-4 justify-center'>
            {
                cards?.map((cards, index) => (

                    <div key={index}
                        onMouseEnter={() => setActiveCard(index)}
                        onMouseLeave={() => setActiveCard(null)}
                        className={`p-5 border border-[#E5E7EB] rounded-lg  md:w-[48%] lg:w-[calc(33%-16px)] transition-all duration-300 ${index === 1 ? '!bg-[#EBF0BF] hover:border hover:border-blue-800   ': 'bg-white'} ${activecard === index ? 'hover:border-blue-800 border ' : ''}`}>
                        <div className='flex flex-col'>
                            <p className='font-bold font-lato text-sm'>{cards.title}</p>
                            <h3 className='font-bold text-[28px] pt-4'>{cards.pricing} <span className='font-medium font-lato text-base text-[#4B5563]'>{cards.package}</span></h3>
                            <hr />
                            <h4 className='font-medium  text-sm pt-4'>{cards.packageheading}</h4>
                            <p className='font-normal font-lato text-xs pt-2 text-[#6B7280]'>{cards.packageparagraph}</p>
                            <button className={`py-2 px-3 border-[#1B3D6D] border rounded-[10px] transition-all duration-300 mt-4 ${activecard === index ? 'bg-[#1B3D6D] text-white' : ''}`}>{cards.button}</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default CardsComponent
