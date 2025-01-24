import React from 'react'
import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/hersection.jsx'
import ContributionsMobile from '@/components/contributionMobile/contributionMobile'
import Flightbooking from '@/components/ForMobile/formobiletab'
import Support from '@/components/ForMobile/support'
import Standard from '@/components/International Standard/Standard.jsx'
import Climate from '@/components/Climate change/Climate'
import Swiper from '@/components/Swiper/Swiper.jsx'
import Packages from '@/components/Packages/Packages'
import ContentHeading from '@/components/ContentHeading/ContentHeading'
import Maps from '@/components/Maps/maps.jsx'
import Kumulative from '@/components/Kumulative/Kumulative.jsx'
import Uber from '@/components/Uber/uber'
import Footer from '@/components/Footer/footer'

export default function HomeMobileComponent() {
    return (
        <>
            <Header />
            <HeroSection />
            <ContributionsMobile />
            <Flightbooking />
            <Climate />
            <Swiper />
            {/* <Packages /> */}
            {/* <ContentHeading /> */}
            <Maps />
            {/* <Kumulative /> */}
            <Support />
            <Standard />
            <Uber />
            <Footer />
        </>
    )
}