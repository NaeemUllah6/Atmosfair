'use client';
// import Cards from '../Packages/cards';
// import Image from 'next/image';
import img1 from '@/common/assets/images/Frame.svg';
import img3 from '@/common/assets/images/puzzle.svg';
import img2 from '@/common/assets/images/Group.svg';
import img4 from '@/common/assets/images/Group2.svg';
import Climate from '../Swiper/Swiper';

const ContentHeading = () => {

    const SLIDES_DATA = [
        {
            id: 1,
            img: img1,
            heading: 'Premier CRE',
            paragraph: 'Strategische Planung und Konzeption für digitale Transformation.',
        },
        {
            id: 2,
            img: img3,
            heading: 'Solution',
            paragraph: 'Entwicklung maßgeschneiderter Lösungen',
        },
        {
            id: 3,
            img: img2,
            heading: 'Implementation',
            paragraph: 'Einführung und Integration digitaler Prozesse und Systeme',
        },
        {
            id: 4,
            img: img4,
            heading: 'Support',
            paragraph: 'Kontinuierliche Betreuung und Optimierung Ihrer digitalen Initiativen',
        },
       
    ];
    return (
        <div className='py-[30px] md:py-[80px]  bg-[#142E52]'>
            <div className="container">
                <div className='max-w-[900px] mx-auto text-center'>
                    <h2 className='font-lato font-bold text-2xl  md:text-[36px] text-white'>Content Heading </h2>
                    <p className='text-[#C6C8D0] font-lato text-xs  md:text-[18px] mt-4 leading-8'>Take a look at our wide range of featured properties. We provide the best and quality housing and Hotels at very affordable prices for you and your family</p>
                </div>
                <div className=' flex  gap-3 rounded-[20px] mt-8'>
                    <Climate className='bg-[#102541] px-6 py-10 h-[239px]'
                        slides={SLIDES_DATA}
                        height={60}
                        width={60}
                        headclassName="font-lato font-bold text-[18px]  md:text-[24px] text-white"
                        paraclassName="font-lato font-[500] text-[14px] text-white"
                        spaceBetween={24}
                        slidesPerView={4}
                        SlideTabview={3}
                    />
                </div>
            </div>
        </div>

    );
};

export default ContentHeading;
