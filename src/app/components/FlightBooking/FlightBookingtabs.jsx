'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Plane from '@/assets/images/plane.svg';
import calendar from '@/assets/images/calendar.svg';
import Cloud from '@/assets/images/cloud.svg';
import Gift from '@/assets/images/gift.svg';
import Users from '@/assets/images/users.svg';
import BookingInput from './BookingInput';

const tabsData = [
  {
    id: 'profile',
    icon: Plane,
    label: 'Flug Kompensieren',
    content: (
      <div className="rounded-lg border p-6 dark:bg-gray-800" role="tabpanel">
        <h3 className="font-bold text-[20px] font-lato">Nur Hinflug</h3>
        <div className="mt-[20px]">
          <BookingInput />
        </div>
      </div>
    ),
  },
  {
    id: 'dashboard',
    icon: Cloud,
    label: 'Wunschmenge CO₂',
    content: (
      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content for the{' '}
          <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>.
        </p>
      </div>
    ),
  },
  {
    id: 'settings',
    icon: calendar,
    label: 'Abonoment',
    content: (
      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content for the{' '}
          <strong className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>.
        </p>
      </div>
    ),
  },
  {
    id: 'contacts',
    icon: Gift,
    label: 'Verschenken',
    content: (
      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content for the{' '}
          <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>.
        </p>
      </div>
    ),
  },
  {
    id: 'kompensieren',
    icon: Users,
    label: 'Event kompensieren',
    content: (
      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some content for the{' '}
          <strong className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>.
        </p>
      </div>
    ),
  },
  {
    id: 'Spende',
    icon: Users,
    label: 'Spende',
    content: (
      <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" role="tabpanel">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content for the{' '}
          <strong className="font-medium text-gray-800 dark:text-white">Spende tab's associated content</strong>.
        </p>
      </div>
    ),
  },
];

const Flightbooking = () => {
  const [activeTab, setActiveTab] = useState('profile'); // Default tab

  return (
    <div className="py-[30px] md:py-[60px]">
      <div className="container">
        <div className="max-w-full lg:max-w-[939px] mx-auto">
          <div className="max-w-full lg:max-w-[850px] mx-auto">
            <h2 className="font-lato text-2xl md:text-[36px] font-bold text-center">Flug kompensieren</h2>
            <p className="font-lato font-normal text-sm md:text-base text-customLight text-center">
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
                    className={`gap-2 py-[10px] whitespace-nowrap grid grid-cols-[20px_1fr] items-center text-sm font-medium font-lato rounded-md px-3 w-full ${
                      activeTab === tab.id ? 'bg-[#163157] text-white' : 'bg-[#F3F3F5]'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={activeTab === tab.id}
                  >
                    <Image width={20} height={20} src={tab.icon} alt={tab.label} />
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
    </div>
  );
};

export default Flightbooking;
