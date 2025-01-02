import React from 'react'
import icon1 from '@/assets/images/co2.svg'
import icon2 from '@/assets/images/temprature.svg'
import icon3 from '@/assets/images/toodles.svg'
import Climate from '../Swiper/Swiper';
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
        {
            img: icon3,
            heading: 'Emissionen Kompensieren',
            paragraph: 'Gestalten Sie Klimaschutz mit: Ihre Unterstützung ermöglicht innovative Projekte und schafft neue Perspektiven im Globalen Süden.',
        },
        {
            img: icon3,
            heading: 'Emissionen Kompensieren',
            paragraph: 'Gestalten Sie Klimaschutz mit: Ihre Unterstützung ermöglicht innovative Projekte und schafft neue Perspektiven im Globalen Süden.',
        },
        {
            img: icon3,
            heading: 'Emissionen Kompensieren',
            paragraph: 'Gestalten Sie Klimaschutz mit: Ihre Unterstützung ermöglicht innovative Projekte und schafft neue Perspektiven im Globalen Süden.',
        },
    ]
    return (
        <div className='container py-10 bg-[#FAFAFA]'>
            <h2 className='font-lato text-2xl md:text-[36px] font-bold text-center'>Ihr Beitrag zum <span className='font-lato text-2xl md:text-[36px] font-bold text-customTextColor'>Klimaschutz führt</span> über atmosfair</h2>
            <p className='font-lato font-normal text-xs md:text-base text-customLight text-center'>Unterstützen Sie geprüfte Klimaschutzprojekte mit nachgewiesener Wirkung</p>
            
               
               <Climate 
               className='flex rounded-2xl border-[1px] border-[#EBF0BF] flex-col gap-4  h-full items-center px-4 py-6 bg-white '
                slides={cards}
                slidesPerView={3}
                SlideMobileView = {1}
                headclassName='font-bold text-lg font-lato'
                paraclassName='text-[16px] text-center font-normal text-[#5D606D] font-lato'
                imgHeight={36}
                imgWidth={36}
                />
              
            {/* </div> */}
        </div>
    )
}

export default Contributions
