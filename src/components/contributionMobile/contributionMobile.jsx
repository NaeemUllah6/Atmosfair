import React from 'react'
import icon1 from '@/common/assets/images/co2.svg'
import icon2 from '@/common/assets/images/temprature.svg'
import icon3 from '@/common/assets/images/toodles.svg'
import Climate from '../Swiper/Swiper';
import Image from 'next/image'
const Contributions = () => {
    const cards = [
        {
            img: icon1,
            heading: 'Emissionen Vermeiden',
            paragraph: 'Machen Sie den ersten Schritt: erfahren Sie, wo Sie am effektivsten ansetzen können.',
        },
        {
            img: icon2,
            heading: 'Emissionen Reduzieren',
            paragraph: 'Entdecken Sie klimafreundliche Alternativen für Ihren Alltag - jede bewusste Entscheidung bringt uns dem 1,5°C-Ziel näher.',
        },
        {
            img: icon3,
            heading: 'Emissionen Kompensieren',
            paragraph: 'Gestalten Sie Klimaschutz mit: Ihre Unterstützung ermöglicht innovative Projekte und schafft neue Perspektiven im Globalen Süden.',
        },

    ]
    return (
        <div className='py-10 bg-[#CFDDEF]'>
       <div className='container'>
            <h2 className='font-lato text-2xl md:text-[36px] font-bold text-center'>Ihr Beitrag zum Klimaschutz führt über atmosfair</h2>

            <div className='flex gap-6 flex-col mt-5'>
                {
                    cards.map((items, index) => (
                        <div className={`relative bg-white rounded-3xl border border-[#EBF0BF] py-6 px-4 flex flex-col items-center justify-center ${index === 0 ? ' me-14' : ''} ${index === 1 ? ' ms-14 after' : ''} ${index === 2 ? ' me-14 after2' : ''}`}>
                            <Image src={items.img} alt="cardicon" />
                            <h3 className='text-center font-bold font-lato text-[#373940] text-base mt-4'>{items.heading}</h3>
                            <p className='text-center font-normal font-lato text-[#5D606D] text-sm mt-3'> {items.paragraph}</p>
                        </div>
                    ))
                }
            </div>
            {/* </div> */}
        </div>
       </div>
    )
}

export default Contributions
