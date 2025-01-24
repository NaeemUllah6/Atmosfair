"use client"
import React, { useEffect, useState } from 'react'
import HomePageDesktop from './home-desktopcomponent'
import HomeMobileComponent from './home-mobile.component';

export default function HomeComponent() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function ResizeBrowser() {

            setIsMobile(window.innerWidth <= 768);
        }


        ResizeBrowser();

        window.addEventListener('resize', ResizeBrowser);
        return () => {
            window.removeEventListener('resize', ResizeBrowser);
        };
    }, []);

    return (
        <>
            {isMobile ? <HomeMobileComponent /> : <HomePageDesktop />}
        </>
    )
}
