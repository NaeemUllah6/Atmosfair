'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import BookingInput from '../FlightBooking/BookingInput';
import chevron from '@/common/assets/images/whitechevron.svg';
import Icons from '@/common/icons/index'


const tabsData = [
    {
        id: 'profile',
        icon:<Icons.Plane/>,
               label: 'Flug Kompensieren',
        content: (
            <div className="rounded-lg border p-6 dark:bg-white" role="tabpanel">
                <h3 className="font-bold text-[20px] font-lato">Nur Hinflug</h3>
                <div className="mt-[20px]">
                    <BookingInput />
                </div>
            </div>
        ),
    },
    {
        id: 'dashboard',
        icon:<Icons.Carbon/>,
               label: 'Wunschmenge CO₂',
        content: (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-white" role="tabpanel">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content for the{' '}
                    <strong className="font-medium text-white dark:text-white">Dashboard tab's associated content</strong>.
                </p>
            </div>
        ),
    },
    {
        id: 'settings',
        icon:<Icons.Calendar/>,

        label: 'Abonoment',
        content: (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-white" role="tabpanel">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content for the{' '}
                    <strong className="font-medium text-white dark:text-white">Settings tab's associated content</strong>.
                </p>
            </div>
        ),
    },
    {
        id: 'contacts',
        icon:<Icons.Hands/>,
              label: 'Verschenken',
        content: (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-white" role="tabpanel">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content for the{' '}
                    <strong className="font-medium text-white dark:text-white">Contacts tab's associated content</strong>.
                </p>
            </div>
        ),
    },
    {
        id: 'kompensieren',
        icon:<Icons.Gift/>,
               label: 'Event kompensieren',
        content: (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-white" role="tabpanel">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is some content for the{' '}
                    <strong className="font-medium text-white dark:text-white">Contacts tab's associated content</strong>.
                </p>
            </div>
        ),
    },
    {
        id: 'Spende',
        icon:<Icons.User/>,
               label: 'Spende',
        content: (
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-white" role="tabpanel">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content for the{' '}
                    <strong className="font-medium text-white dark:text-white">Spende tab's associated content</strong>.
                </p>
            </div>
        ),
    },
];

const Flightbooking = () => {
    const [activeTab, setActiveTab] = useState('profile'); 
    const [curTab, setCurTab] = useState(tabsData[0])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const handleSelect = (tab) => {
        setActiveTab(tab?.id);
        setCurTab(tab)

        setIsDropdownOpen(false); 
    };

    console.log({curTab})

    return (
        <div id='flightBooking' className="py-[30px] md:py-[60px]">
            <div className="container">
                <div className="max-w-full lg:max-w-[939px] mx-auto">
                    <div className="max-w-full lg:max-w-[850px] mx-auto">
                        <h2 className="font-lato text-2xl md:text-[36px] font-bold text-center">Flug kompensieren</h2>
                        <p className="font-lato font-normal text-sm md:text-base text-customLight text-center">
                            Einfach Reisedaten eingeben und unverbindlich berechnen lassen. "Von Stiftung Warentest als beste
                            Kompensationsplattform ausgezeichnet"
                        </p>
                    </div>
                    <div className="mt-8 relative">
                        <div className="relative w-full">
                            <button
                                className="w-full py-3 pl-10 pr-4 text-white border rounded-md bg-[#163157] flex items-center justify-between "
                                onClick={toggleDropdown}
                            >
                                <span>{tabsData.find(tab => tab.id === activeTab)?.label} </span>
                                <div className="ml-2 absolute left-1">
                                    <div className={`${activeTab? 'svgColor' : ''}`}>{curTab?.icon}</div>
                                </div>
                                <div className="ml-2 absolute right-3 ">
                                    <Image className={`${isDropdownOpen? 'rotate-180 transition-all duration-300':'rotate-360 transition-all duration-300'}`} src={chevron} alt="icon for select" />
                                </div>
                            </button>
                            {isDropdownOpen && (
                                <div className={`absolute z-30 bg-white border-[#EAECF0] p-2  mt-1 w-full flex flex-col gap-1 border  dark:border-gray-700 rounded-xl `}>
                                    {tabsData.map((tab) => (
                                        <button
                                            key={tab.id}
                                            className="w-full text-[#838799] bg-[#F3F3F5]   py-5  px-2 text-left flex gap-2 items-center"
                                            onClick={() => handleSelect(tab)}
                                        >
                                           <div className='!w-5 !h-5'> {tab.icon}</div>
                                            {tab.label}                            
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div id="default-tab-content" className="mt-4">
                        {tabsData.map(
                            (tab) =>
                                activeTab === tab.id && (
                                    <div key={tab.id} id={tab.id} role="tabpanel">
                                        {tab.content}
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flightbooking;
