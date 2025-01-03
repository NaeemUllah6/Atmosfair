'use client';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const Climate = ({ slides=null, imgWidth, imgHeight, paraclassName,className, headclassName,slidesPerView,SlideMobileView }) => {

    return (

        <Swiper
            className="overflow-x-hidden mt-8"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={24}
            slidesPerView={5}
            breakpoints={{
                320: { slidesPerView: SlideMobileView || 1 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: slidesPerView || 5 },
            }}
            navigation={false}
            pagination={false}
            scrollbar={false}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            speed={2000}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
        >

            {slides?.map((slide, index) => (
                <SwiperSlide key={index} className="!h-auto">
                    <div className={`rounded-[20px] flex gap-4 flex-col h-full dark:bg-gray-800 ${className ? className :''}`} id="contacts" role="tabpanel">     
                       <Image src={slide.img} alt="Image" width={imgWidth} height={imgHeight} />
                       <h2 className={` ${headclassName}`}>{slide.heading}</h2>                       
                        <p className={` ${paraclassName}`}>{slide.paragraph}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Climate
