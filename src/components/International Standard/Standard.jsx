import React from 'react';
import Climate from '../Swiper/Swiper';
import IStandard from '@/common/assets/images/Istandard.svg';

const Standard = () => {
  // Define slides with proper `img` property
  const slides = [
    { img: IStandard },
    { img: IStandard },
    { img: IStandard },
    { img: IStandard },
   
  ];

  return (
    <div className="bg-[#1B3D6D] py-8 md:py-10">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
          <div className="px-6 md:px-[60px] bg-[#102541] py-4 md:py-[50px] max-w-full md:max-w-[277px]">
            <p className="text-white font-lato text-[15px] md:text-lg">
              We work with 30+ startups from small to big
            </p>
          </div>
          <div className="w-fit overflow-x-hidden mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
            {/* Pass slides to the Climate component */}
            <Climate
              slides={slides}
              imgWidth={176}
              imgHeight={60}
              className="custom-slide-class !bg-transparent justify-center w-fit"
              cardclassName="bg-"
              slidesPerView={4}
              SlideMobileView={2}
              SlideTabview={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standard;
