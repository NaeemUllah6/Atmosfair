
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Plane from '@/common/assets/images/plane.svg';
import calendar from '@/common/assets/images/calendar.svg';
import Cloud from '@/common/assets/images/cloud.svg';
import Gift from '@/common/assets/images/gift.svg';
import Users from '@/common/assets/images/users.svg';
import BookingInput from './BookingInput';
import Icons from '@/common/icons/index'

const tabsData = [
  {
    id: 'profile',
    icon: <Icons.Plane/>,
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
    icon: <Icons.Carbon/>,
    label: 'Wunschmenge CO₂',
    content: (
      <div className="p-4 rounded-lg border h-[300px] dark:bg-white" role="tabpanel">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          CONTENT FOR THIS TAB APPEAR HERE
          <strong className="font-medium text-white dark:text-white">Dashboard tab's associated content</strong>.
        </p>
      </div>
    ),
  },
  {
    id: 'settings',
    icon: <Icons.Calendar/>,
    label: 'Abonoment',
    content: (
      <div className="p-4 rounded-lg border h-[300px] dark:bg-white" role="tabpanel">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          CONTENT FOR THIS TAB APPEAR HERE
          <strong className="font-medium text-white dark:text-white">Dashboard tab's associated content</strong>.
        </p>
      </div>
    ),
  },
  {
    id: 'contacts',
    icon: <Icons.Gift/>,
    label: 'Verschenken',
    content: (
      <div className="p-4 rounded-lg border h-[300px] dark:bg-white" role="tabpanel">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          CONTENT FOR THIS TAB APPEAR HERE
          <strong className="font-medium text-white dark:text-white">Dashboard tab's associated content</strong>.
        </p>
      </div>
    ),
  },
  {
    id: 'kompensieren',
    icon: <Icons.User/>,
    label: 'Event kompensieren',
    content: (
      <div className="p-4 rounded-lg border h-[300px] dark:bg-white" role="tabpanel">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          CONTENT FOR THIS TAB APPEAR HERE
          <strong className="font-medium text-white dark:text-white">Dashboard tab's associated content</strong>.
        </p>
      </div>
    ),
  },
  {
    id: 'Spende',
    icon: <Icons.User/>,
    label: 'Spende',
    content: (
      <div className="p-4 rounded-lg border h-[300px] dark:bg-white" role="tabpanel">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          CONTENT FOR THIS TAB APPEAR HERE
          <strong className="font-medium text-white dark:text-white">Dashboard tab's associated content</strong>.
        </p>
      </div>
    ),
  },
];

const Flightbooking = () => {
  const [activeTab, setActiveTab] = useState('profile'); // Default tab

  return (
    <div id='flightBooking' className="py-[30px] md:py-[60px] scroll-mt-14">
      <div className="container">
        <div className="max-w-full lg:max-w-[939px] mx-auto">
          <div  className="max-w-full lg:max-w-[850px] mx-auto">
            <h2 className="font-lato text-2xl md:text-[36px] font-bold text-center">Flug kompensieren</h2>
            <p className="hidden sm:block font-lato font-normal text-sm md:text-base text-customLight text-center mt-3">
              Einfach Reisedaten eingeben und unverbindlich berechnen lassen. "Von Stiftung Warentest als beste
              Kompensationsplattform ausgezeichnet"
            </p>
          </div>
          <div className="mb-4 border rounded-xl border-gray-200 dark:border-gray-700 mt-8">
            <ul
              className="flex overflow-x-auto mx-[6px] -mb-px text-sm font-medium text-center justify-between"
              role="tablist"
            >
              {tabsData.map((tab) => (
                <li key={tab.id} className="me-2 py-2" role="presentation">
                  <button
                    className={`gap-2 py-[10px] whitespace-nowrap grid grid-cols-[20px_1fr] items-center text-sm font-medium font-lato rounded-md px-3 w-full ${activeTab === tab.id?'svgColor': 'svgColorBlack'} ${activeTab === tab.id ? 'bg-[#163157] text-white' : 'bg-[#F3F3F5]'
                      }`}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={activeTab === tab.id}
                  >
                    <div className={` `}>{tab.icon}</div> 
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div id="default-tab-content">
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
    </div >
  );
};

export default Flightbooking;
