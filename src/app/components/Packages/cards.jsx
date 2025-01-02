'use client'
import React, { useState } from 'react'

const Cards = () => {
    const Card = [
        {
            title: 'Klein',
            pricing: '18€',
            package: '/per month',
            packageheading: 'Ihr Beitrag ermöglicht eine CO₂-Einsparung von 9 Tonnen ',
            packageparagraph:'(entspricht etwa dem jährlichen CO₂-Ausstoß eines New Yorker)',
            button:'Auswählen'
        },
        {
            title: 'Mittel',
            pricing: '30€',
            package: '/per month',
            packageheading: 'Ihr Beitrag ermöglicht eine CO₂-Einsparung von 15 Tonnen',
            packageparagraph:'(entspricht etwa dem jährlichen CO₂-Ausstoß eines US-Bürger)',
             button:'Auswählen'
        },
        {
            title: 'Groß',
            pricing: '45€',
            package: '/per month',
            packageheading: 'Ihr Beitrag ermöglicht eine CO₂-Einsparung von 22 Tonnen',
            packageparagraph:'(entspricht etwa dem jährlichen CO₂-Ausstoß eines Texaner)',
             button:'Auswählen'
        }
    ]
    const [activecard, setActiveCard] = useState(null)
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center lg:grid-cols-3 gap-4'>
                {
            Card.map((cards, index)=>(
                
                <div key={index}
                onMouseEnter={() =>setActiveCard (index)}
                onMouseLeave={() => setActiveCard(null)}
                 className={`p-5 border border-[#E5E7EB] rounded-lg  transition-all duration-300 ${activecard === index ? 'bg-[#EBF0BF]' : ''}`}>
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
export default Cards
