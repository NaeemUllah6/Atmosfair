import React from 'react'
import icon1 from '@/common/assets/images/co2.svg'
import icon2 from '@/common/assets/images/temprature.svg'
import icon3 from '@/common/assets/images/toodles.svg'
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
        
    ]
    return (
        <div className='py-8 md:py-10 bg-[#FAFAFA]'>
            <div className="container">
                <h2 className='font-lato text-2xl md:text-[36px] font-bold text-center leading-[42px]'>Ihr Beitrag zum <span className='text-[#C0CF32]'>Klimaschutz führt</span> über atmosfair</h2>
                <p className='font-lato font-normal text-xs md:text-base text-customLight text-center mt-3'>Unterstützen Sie geprüfte Klimaschutzprojekte mit nachgewiesener Wirkung</p>


                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <Climate
                        className=' rounded-2xl border border-[#EBF0BF] flex flex-col   h-full items-center px-4 py-6 !bg-white'
                        slides={cards}
                        headclassName='font-bold text-lg font-lato text-center'
                        paraclassName='text-[16px] text-center font-normal text-[#5D606D] font-lato'
                        imgHeight={36}
                        imgWidth={36}
                        imgclassName="mx-auto"/>
                        
                        
                </div>

                {/* </div> */}
            </div>
        </div >
    )
}

export default Contributions
