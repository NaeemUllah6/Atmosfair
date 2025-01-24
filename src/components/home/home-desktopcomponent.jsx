import React from 'react'
import Header from '@/components/Header/Header'
import HeroSection from '@/components/HeroSection/hersection.jsx'
import Contributions from '@/components/Contributions/Contributions.jsx'
import Flightbooking from '@/components/FlightBooking/FlightBookingtabs'
import Support from '@/components/Support/support.jsx'
import Standard from '@/components/International Standard/Standard.jsx'
import Climate from '@/components/Climate change/Climate'
import Swiper from '@/components/Swiper/Swiper.jsx'
import Packages from '@/components/Packages/Packages'
import ContentHeading from '@/components/ContentHeading/ContentHeading'
import Maps from '@/components/Maps/maps.jsx'
import Kumulative from '@/components/Kumulative/Kumulative.jsx'
import Uber from '@/components/Uber/uber'
import Footer from '@/components/Footer/footer'

export default function HomePageDesktop() {
    return (
        <>
            <Header />
            <HeroSection />
            <Contributions />
            <Flightbooking />
            {/* <Support /> */}
            <Standard />
            <Climate />
            <Swiper />
            <Packages />
            <ContentHeading />
            <Maps />
            <Kumulative />
            <Uber />
            <Footer />
        </>
    )
}
