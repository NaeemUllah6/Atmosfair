'use client';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const Climate = ({ slides = null, imgWidth, imgHeight,imgclassName, paraclassName, className, headclassName, slidesPerView, SlideMobileView, SlideTabview }) => {

    return (

        // <div
        //     className="overflow-x-hidden mt-0 md:mt-0"
        //     modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        //     spaceBetween={24}
        //     slidesPerView={5}
        //     breakpoints={{
        //         320: { slidesPerView: SlideMobileView || 1 },
        //         768: { slidesPerView: SlideTabview || 1 || 3 },
        //         1024: { slidesPerView: slidesPerView || 5 },
        //     }}
        //     navigation={false}
        //     pagination={false}
        //     scrollbar={false}
        //     autoplay={false}
        //     speed={2000}
        //     onSwiper={(swiper) => console.log(swiper)}
        //     onSlideChange={() => console.log("slide change")}
        // >

            
                slides?.map((slide, index) => (
                <div className={`${className? className : ''}`}>
                <div key={index} className="!h-auto flex flex-col">
                    <div className={`rounded-[20px] flex gap-4 flex-col h-full dark:bg-gray-800 `} id="contacts" role="tabpanel">
                       <div className={`${className? imgclassName: ""}`}>
                       <Image src={slide.img} alt="Image" width={imgWidth} height={imgHeight} />
                       </div>
                        <h2 className={` ${headclassName}`}>{slide.heading}</h2>
                        <p className={` ${paraclassName}`}>{slide.paragraph}</p>
                    </div>
                </div>
                </div>
            ))
        
    )
}

export default Climate
