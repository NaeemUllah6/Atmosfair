'use client'
import React, { useState } from 'react';
import Link from 'next/link'
import MainLogo from "@/common/assets/images/HeroBackground.png";

const Hersection = () => {
  const [hover, setHover] = useState('')
  const column = [
    {
      tillDate: 'Over ',
      collected: ' 11,657,816',
      wasted: 'tons of CO2 avoided'
    },
    {
      tillDate: 'More than',
      collected: ' 225,587',
      wasted: 'people helped'
    }
  ];

  let handleClick = () => {
    const targetSection = document.querySelector("#flightBooking");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    setHover(true);
    setTimeout(() => {
      setHover(false)
    }, 1000);
  };

    
  return (
    <div
      style={{
        backgroundImage: ` url(${MainLogo.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className='mt-[60px] md:mt-[90px] '
    >
      <div className='container'>
        <div className='flex justify-center flex-col gap-5 h-full pt-[80px] pb-[60px] md:pt-[60px] md:pb-[80px]'>
          <div className='w-full lg:w-[716px]'>
            <h2 className="text-[28px] md:text-[52px] text-center md:text-start font-bold text-white font-Lato mt-3 leading-[33px] md:leading-[72px]">
              Klimaschutz Gemeinsam Gestalten
            </h2>
            <p className='font-medium text-sm mt-4 md:mt-5 md:text-[22px] text-center md:text-start text-white leading-[17px] md:leading-[26px]'>
              Kompensieren Sie Ihren CO₂-Fußabdruck oder Unterstützen Sie Klimaschutzprojekte direkt
            </p>
            <div className='flex gap-3 mt-14 sm:mt-6 md:mt-8 justify-center md:justify-start '>
              <button onClick={handleClick} className={`transition-all duration-300 py-3 md:py-3 px-[58px] sm:px-5  hover:bg-[#C0CF32] hover:text-black md:w-fit bg-[#D06735] rounded-[10px] font-bold text-white font-lato text-sm md:text-[18px] colorchang ${hover? 'hoveradded':''}`}>
                Flug kompensieren
              </button>
              <button className='transition-all duration-300 border border-transparent hover:border-[#C0CF32] hover:border py-3 md:py-3 px-5 hidden md:block  bg-[#0000004D] backdrop-blur-[16px] z-0 rounded-[10px] font-bold text-sm md:text-[18px] text-white font-lato'>
                Projekt unterstützen
              </button>
            </div>
          </div>
          <div className='flex flex-col justify-start md:justify-end mt-10 md:mt-0 mb-3 md:mb-0'>
            <div className='flex justify-center md:justify-end'>
              {column.map((items, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-1 items-center ${index === 0 ? 'border-r-[0.6px] pe-6' : 'ps-6'
                    }`}
                >
                  <p className='font-lato font-semibold text-xs md:text-[18px] text-white'>{items.tillDate}</p>
                  <h3 className='font-lato font-bold text-[18px] md:text-[28px] text-white'>{items.collected}</h3>
                  <p className='font-lato font-semibold text-xs md:text-[18px] text-white'>{items.wasted}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hersection;
