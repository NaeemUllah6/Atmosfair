import React from 'react'
import Climate from '../Swiper/Swiper';
import img1 from '@/assets/images/bulb.svg';
import img3 from '@/assets/images/bulb.svg';
import img2 from '@/assets/images/bulb.svg';
import img4 from '@/assets/images/bulb.svg';
const Kumulative = () => {
  const SLIDES_DATA = [
    {
      id: 1,
      img: img1,
      heading: 'Historische Emissionen der USA',
      paragraph: 'Seit 1750 haben die USA beim Aufbau ihrer Wirtschaft über 399 Milliarden Tonnen Treibhausgase ausgestoßen - 25 % der globalen Gesamtemissionen.',
    },
    {
      id: 2,
      img: img3,
      heading: 'Afrikas globaler Emissionsanteil',
      paragraph: 'Im gleichen Zeitraum hat der gesamte afrikanische Kontinent nur 43 Milliarden Tonnen - etwa 3 % der weltweiten Emissionen - verursacht.',
    },
    {
      id: 3,
      img: img2,
      heading: 'Afrikas unverhältnismäßiges Klimarisiko',
      paragraph: 'Dennoch leidet der Kontinent überproportional unter den steigenden globalen Temperaturen.',
    },
    {
      id: 4,
      img: img4,
      heading: 'Historische Emissionen der USA',
      paragraph: 'Kontinuierliche Betreuung und Optimierung Ihrer digitalen Initiativen',
    },
    {
      id: 5,
      img: img4,
      heading: 'Historische Emissionen der USA',
      paragraph: 'Kontinuierliche Betreuung und Optimierung Ihrer digitalen Initiativen',
    },
  ];
  return (
    <div className="container">
      <div className='p-4 md:p-8 bg-[#1B3D6D] rounded-xl'>
        <div className=''>
          <h2 className='font-lato font-bold text-2xl text-white text-center'>Kumulative CO2 Emissionen 2022 </h2>
          <p className='text-[#C6C8D0] font-lato text-xs mt-3 text-center'>Summe aller CO₂-Emissionen aus Industrie und fossilen Energieträgern seit Messbeginn, in Tonnen. Exklusive Landnutzungsänderungen.</p>
          </div>
          <div className=' flex  gap-3 rounded-[20px]'>
            <Climate className='bg-[#102541] p-6 h-[246px]'
              slides={SLIDES_DATA}
              height={60}
              width={60}
              headclassName="font-lato font-[600] text-[20px] text-white"
              paraclassName="font-lato font-[500] text-[16px] text-[#E8ECF0]"
              spaceBetween={24}
              slidesPerView={3}
            />
          </div>
        
      </div>
    </div>
  )
}

export default Kumulative