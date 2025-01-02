import React from 'react';

const Uber = () => {
    return (
        <div className='py-[30px] md:py-20'>
            <div className="container">
                <div className='bg-[#F6F8E0] rounded-xl px-4 py-6 md:p-20'>
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
                    <div className='flex justify-center'>
                        <button className='px-6 py-[10px] text-base md:text-[18px] bg-[#D06735] mt-6 rounded-lg font-bold text-white'>
                            Flug kompensieren
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Uber;
