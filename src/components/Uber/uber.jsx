import React, { useState } from 'react';
import Link from 'next/link'

const Uber = () => {
    const [hover, setHover] = useState("")
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
        <div className=' py-[30px] md:py-20 bg-[#FEFEFE] '>
            <div className="container relative">
                <div className='bg-[#F6F8E0] rounded-xl px-4  py-6 md:p-20 chirya'>
                    <div className=''>
                        <h2 className='font-lato font-bold text-2xl md:text-4xl text-center'>
                            Über atmosfair
                        </h2>
                        <p className='text-[#5D606D] font-lato text-[24px] mt-6 text-center block md:hidden'>
                            Die atmosfair gGmbH ist eine gemeinnützige Berliner Klimaschutzorganisation, die seit 2004 wissenschaftliche Expertise mit konkreter Entwicklungsarbeit verbindet.
                        </p>
                        <p className='text-[#5D606D] font-lato text-[24px] mt-4 text-center block md:hidden'>
                            Aus einem Forschungsprojekt Bundesumweltministeriums entstanden, entwickeln und betreiben wir eigene Klimaschutzprojekte im Bereich erneuerbarer Energien.
                        </p>
                        <p className='text-[#5D606D] font-lato text-[24px] mt-4 text-center block md:hidden'>
                            Wir begleiten Unternehmen auf ihrem Weg zur Klimaneutralität und ermöglichen Ihnen und anderen umweltbewussten Menschen, unvermeidbare CO₂-Emissionen durch zertifizierte Projekte im Globalen Süden zu kompensieren.
                        </p>
                        <p className='text-[#5D606D] font-lato text-[24px] mt-6 text-center hidden md:block'>
                            Die atmosfair gGmbH ist eine gemeinnützige Berliner Klimaschutzorganisation, die seit 2004 wissenschaftliche Expertise mit konkreter Entwicklungsarbeit verbindet. Aus einem Forschungsprojekt des Bundesumweltministeriums entstanden, entwickeln und betreiben wir eigene Klimaschutzprojekte im Bereich erneuerbarer Energien. Wir begleiten Unternehmen auf ihrem Weg zur Klimaneutralität und ermöglichen Ihnen und anderen umweltbewussten Menschen, unvermeidbare CO₂-Emissionen durch zertifizierte Projekte im Globalen Süden zu kompensieren.
                        </p>
                    </div>
                    <div className='flex gap-3 flex-wrap md:flex-nowrap justify-center items-center'>
                    <button onClick={handleClick} href="/landingpage#flightBooking" className={`transition-all text-center duration-300 hover:bg-[#C0CF32] hover:text-black w-full md:w-fit px-5 py-[13px] text-base md:text-[18px] bg-[#D06735] mt-6 rounded-lg font-bold text-white ${hover?'hoveradded':''}`}>
                            Flug kompensieren
                        </button>
                        <button className='hidden md:block transition-all duration-300  hover:border-[#C0CF32] hover:border-[1px] w-full md:w-fit px-6 py-[10px]  text-base md:text-[18px] border-[1px] bg-white  border-black mt-6 rounded-lg font-bold text-black'>
                            Projekte fördern
                        </button>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Uber;
