'use client';
import React, { useState } from 'react';
import CardsComponent from './cards';

const Packages = () => {
    const Cards = [
        {
            title: 'Klein',
            pricing: '18€',
            package: '/per month',
            packageheading: 'Ihr Beitrag ermöglicht eine CO₂-Einsparung von 9 Tonnen ',
            packageparagraph: '(entspricht etwa dem jährlichen CO₂-Ausstoß eines New Yorker)',
            button: 'Auswählen'
        },
        {
            title: 'Mittel',
            pricing: '30€',
            package: '/per month',
            packageheading: 'Ihr Beitrag ermöglicht eine CO₂-Einsparung von 15 Tonnen',
            packageparagraph: '(entspricht etwa dem jährlichen CO₂-Ausstoß eines US-Bürger)',
            button: 'Auswählen'
        },
        {
            title: 'Groß',
            pricing: '45€',
            package: '/per month',
            packageheading: 'Ihr Beitrag ermöglicht eine CO₂-Einsparung von 22 Tonnen',
            packageparagraph: '(entspricht etwa dem jährlichen CO₂-Ausstoß eines Texaner)',
            button: 'Auswählen'
        }
    ];
    const Cards2 = [
        {
            title: 'Klein',
            pricing: '118€',
            package: '/per year',
            packageheading: 'Ihr Beitrag ermöglicht eine CO₂-Einsparung von 9 Tonnen ',
            packageparagraph: '(entspricht etwa dem jährlichen CO₂-Ausstoß eines New Yorker)',
            button: 'Auswählen'
        },
        {
            title: 'Mittel',
            pricing: '130€',
            package: '/per year',
            packageheading: 'Ihr Beitrag ermöglicht eine CO₂-Einsparung von 15 Tonnen',
            packageparagraph: '(entspricht etwa dem jährlichen CO₂-Ausstoß eines US-Bürger)',
            button: 'Auswählen'
        },
        {
            title: 'Groß',
            pricing: '145€',
            package: '/per year',
            packageheading: 'Ihr Beitrag ermöglicht eine CO₂-Einsparung von 22 Tonnen',
            packageparagraph: '(entspricht etwa dem jährlichen CO₂-Ausstoß eines Texaner)',
            button: 'Auswählen'
        }
    ]
    const [activeTab, setActiveTab] = useState('contact');

    return (
        <div className='py-[30px] md:py-[60px] bg-[#FAFAFA]'>
            <div className="container">
                <div>
                    <h2 className='font-lato text-2xl  md:text-[36px] font-bold text-center'>
                        Nachhaltiger Einsatz. <span className='font-lato text-2xl  md:text-[36px] font-bold text-customTextColor'>Dauerhaft</span> fördern.
                    </h2>
                    <p className='font-lato font-normal text-xs md:text-base text-customLight text-center mt-3'>
                        Ihre Spende finanziert Klimaschutzprojekte im Globalen Süden—direkt und transparent.
                    </p>
                    <div className="px-10"></div>
                </div>
                <div className="mb-4 border rounded-xl border-gray-200 dark:border-gray-700 mt-8 mx-auto max-w-[194px]">
                    <ul
                        className="flex flex-wrap mx-[6px] -mb-px text-sm font-medium text-center"
                        id="default-tab"
                        role="tablist"
                    >
                        <li className='py-2 me-2' role="presentation">
                            <button
                                className={`gap-2 py-[10px] w-full flex items-center text-sm justify-center font-medium font-lato rounded-md px-3  ${activeTab === 'contact' ? 'bg-[#FFFFFF] shadow-custom-all text-[#373940]' : "text-[#667085]"}`}
                                onClick={() => setActiveTab('contact')}
                                type="button"
                                role="tab"
                                aria-controls="contact"
                                aria-selected={activeTab === 'contact'}
                            >
                                Monatlich
                            </button>
                        </li>
                        <li className='py-2 me-2' role="presentation">
                            <button
                                className={`gap-2 py-[10px] w-full flex items-center justify-center text-sm font-medium font-lato rounded-md px-3  ${activeTab === 'Spende' ? 'bg-[#FFFFFF] shadow-custom-all text-[#373940]' : "text-[#667085]"}`}
                                onClick={() => setActiveTab('Spende')}
                                type="button"
                                role="tab"
                                aria-controls="Spende"
                                aria-selected={activeTab === 'Spende'}
                            >
                                Jährlich
                            </button>
                        </li>
                    </ul>
                </div>
                <div id='default-tab-content'>
                    {activeTab === 'contact' && (
                        <div className="p-4 rounded-lg !bg-gray-50 dark:bg-gray-800 max-w-[1000px] mx-auto" id="contacts" role="tabpanel">
                            <CardsComponent cards={Cards}/>
                        </div>
                    )}
                    {activeTab === 'Spende' && (
                        <div className="p-4 rounded-lg !bg-gray-50 dark:bg-gray-800 max-w-[1000px] mx-auto" id="contacts" role="tabpanel">
                            <CardsComponent cards={Cards2} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Packages;
