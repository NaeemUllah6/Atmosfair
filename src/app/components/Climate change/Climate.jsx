'use client';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Payroll1 from "@/assets/images/Payroll.png";
import Payroll2 from "@/assets/images/payroll2.png";
import Payroll3 from "@/assets/images/not.png";
import Arrow from '@/assets/images/arrowuprigh.svg';

const Climate = () => {
    const slides = [
        {
            id: 1,
            icon: Payroll1,
            heading: 'Lokale Energie-Pioniere fördern',
            paragraph: 'Regenerative Energie aus lokaler Hand, finanziert durch Sie.'
        },
        {
            id: 2,
            icon: Payroll2,
            heading: 'Lokale Energie-Pioniere fördern',
            paragraph: 'Schaffen Sie Zugang zu nachhaltiger Energie, wo sie am dringendsten gebraucht wird.'
        },
        {
            id: 3,
            icon: Payroll3,
            heading: 'Lokale Energie-Pioniere fördern',
            paragraph: 'Schaffen Sie Zugang zu nachhaltiger Energie, wo sie am dringendsten gebraucht wird.'
        },
        {
            id: 4,
            icon: Payroll1,
            heading: 'Lokale Energie-Pioniere fördern',
            paragraph: 'Schaffen Sie Zugang zu nachhaltiger Energie, wo sie am dringendsten gebraucht wird.'
        },
        {
            id: 5,
            icon: Payroll2,
            heading: 'Lokale Energie-Pioniere fördern',
            paragraph: 'Investieren Sie in lokale Strukturen für langfristigen Wandel.'
        }
    ];

    return (
        <div className='py-[30px] md:py-[60px] bg-white'>
            <div className="container">
                <div>
                    <h2 className='font-lato text-2xl  md:text-[36px] font-bold text-center '>
                        Ihr Beitrag und unsere Expertise bewirken <span className='font-lato text-2xl  md:text-[36px] font-bold text-customTextColor'>Climate Action</span>
                    </h2>
                    <p className='font-lato font-normal text-xs mt-3 md:text-base text-customLight text-center'>
                        Unterstützen Sie geprüfte Klimaschutzprojekte mit nachgewiesener Wirkung
                    </p>
                    <div className="">
                        <Swiper
                            className="overflow-x-hidden mt-8 bg-white"
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={5}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 3 },
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
                            {slides.map((items) => (
                                <SwiperSlide key={items.id} className="h-auto">
                                    <div className='p-4 z-50 group border shadow-custom-all rounded-2xl hover:border-[#C0CF32] transition-transform duration-300 hover:bg-[#fafdd9] overflow-hidden relative'>
                                        <div className='transition-transform duration-300 group-hover:scale-5'>
                                            <Image src={items.icon} alt='sliderImage' className='transition-transform duration-300 group-hover:scale-105' />
                                        </div>
                                        <div className='mt-2 '>
                                            <p className='font-bold text-[18px] text-[#373940] font-lato'>{items.heading}</p>
                                            <p className='text-base text-[#5D606D] font-lato pt-1'>{items.paragraph}.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button className='px-6 py-[10px] bg-[#C0CF32] rounded-lg font-semibold border-[#373940] text-[#030303] flex items-center gap-2'>
                            View All Pages <Image src={Arrow} alt='' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Climate;
