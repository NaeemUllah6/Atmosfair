import React from 'react';
import MainLogo from "@/assets/images/HeroBackground.png";

const Hersection = () => {
  const column = [
    {
      tillDate: 'Till Date we’ve collected',
      collected: ' 11,657,816',
      wasted: '11,657,816'
    },
    {
      tillDate: 'Till Date we’ve collected',
      collected: ' 11,657,816',
      wasted: '11,657,816'
    }
  ]
  return (

    <div
      style={{
        backgroundImage: `url(${MainLogo.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh-90px)",
      }}
      className='mt-[90px]'
    >
      <div className='container'>
        <div className='flex justify-center flex-col gap-5 h-[calc(100vh-90px)]'>
          <div className='w-full lg:w-[716px]'>
            <h2 className="text-[28px] md:text-[52px] text-center md:text-start font-bold text-white  font-Lato ">
              Klimaschutz Gemeinsam Gestalten
            </h2>
            <p className='font-medium text-sm md:text-[22px] text-center md:text-start text-white'>Kompensieren Sie Ihren CO₂-Fußabdruck oderUnterstützen Sie Klimaschutzprojekte direkt</p>
            <div className='flex  gap-3 mt-6 md:mt-8'>
              <button className='py-3 md:py-4 px-5 bg-[#D06735] rounded-[10px] font-bold text-white font-lato text-sm md:text-[18px]'>Flug kompensieren</button>
              <button className='py-3 md:py-4 px-5 bg-[#0000004D] backdrop-blur-[16px] z-0 rounded-[10px] font-bold text-sm md:text-[18px] text-white font-lato'>Projekt unterstützen</button>
            </div>
          </div>
          <div className='flex flex-col justify-start md:justify-end mt-10 md:mt-0 mb-3 md:mb-0'>
            <div className='flex justify-center md:justify-end'>
              {
                column.map((items, index) => (
                  <div key={index} className={`flex flex-col gap-1 items-center md:items-start ${index === 0 ? 'border-r-[0.6px] pe-6' : 'ps-6'}`}>
                    <p className='font-lato font-semibold text-xs md:text-[18px] text-white'>{items.tillDate}</p>
                    <h3 className='font-lato font-bold text-[18px] md:text-[28px] text-white'>{items.collected}</h3>
                    <p className='font-lato font-semibold text-xs md:text-[18px] text-white'>{items.wasted}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hersection;