'use client'
import { useState } from 'react';
import React from 'react'
import Label from './Label';
import Image from 'next/image';
import Plane from '@/common/assets/images/inputplane.svg'
import icon from '@/common/assets/images/chevronDown.svg'

const BookingInput = () => {
    const options = [
        {
            option: 'Stadt, Land oder Flughafen'
        },
    ];
    const selectors = [
        { id: 1, options: ["First", "Business", "Premium", "Economy"], label: 'Flight Class' },
        { id: 2, options: ["Chartered", "Scheduled"], label: 'Flight Type' },
        { id: 3, options: ['Economy', "Chartered", "Jumbo3"], label: 'Aircraft Type' },

    ];


    const [selectedOptions, setSelectedOptions] = useState(
        selectors.reduce((acc, selector) => {
            acc[selector.id] = selector.options[0];
            return acc;
        }, {})
    );

    const [isOpen, setIsOpen] = useState(null);


    const handleSelect = (id, option) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [id]: option,
        }));
        setIsOpen(null);
    };

    const toggleDropdown = (id) => {
        setIsOpen((prev) => (prev === id ? null : id));
    };

    return (
        <>
            <div className='grid grid-cols-1 gap-3 justify-between md:grid-cols-2'>
                <div className='flex flex-col justify-between h-full gap-6'>
                    <div className='flex flex-col gap-[6px] relative'>
                        <Label
                            HTMLFor='countrySelect'
                            InputLabel='Departure Airport'
                        />
                        <input id='countrySelect' className='h-[40px] placeholder:text-[#C6C8D0] text-[#5D606D] ps-9 font-lato text-sm border border-[#D0D5DD] rounded-lg w-full' type="text" placeholder='Stadt, Land oder Flughafen' />
                        <span className='font-lato font-semibold text-[#163157] text-sm'>+ Add/remove via airport</span>
                        <div className='absolute top-9 left-[13px]'>
                            <Image src={Plane} alt="contribution images" />
                        </div>
                    </div>
                    {/* <div className='block md:hidden'>
                        <div className='flex flex-col gap-[6px] relative'>
                            <Label
                                HTMLFor='Arrival Airport'
                                InputLabel='Arrival Airport'
                            />
                            <input id='countrySelect' className='h-[40px] placeholder:text-[#C6C8D0] text-[#5D606D] ps-9 font-lato text-sm border border-[#D0D5DD] rounded-lg w-full' type="text" placeholder='Stadt, Land oder Flughafen' />
                            <div className='absolute top-9 left-[13px]'>
                                <Image src={Plane} alt="contribution images" />
                            </div>
                        </div>
                    </div> */}
                    <div className='flex flex-col gap-[6px] relative '>
                        <Label
                            HTMLFor='Airport'
                            InputLabel='Arrival Airport'
                        />
                        <input id='Airport' className='h-[40px] placeholder:text-[#C6C8D0] ps-9 font-lato text-sm text-[#5D606D] border border-[#D0D5DD] rounded-lg w-full' type="text" placeholder='Stadt, Land oder Flughafen' />
                        <div className='absolute top-9 left-[13px]'>
                            <Image src={Plane} alt="contribution images2" />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 justify-between '>
                    <div className='flex gap-3 w-full items-center flex-wrap md:flex-nowrap'>
                        {selectors.map((selector) => (
                            <div key={selector.id} className={`custom-selector  flex flex-col gap-[6px] ${selector.id === 3 ? 'w-full md:w-[calc(50%-6px)]' : 'w-[calc(50%-6px)]'}`}>
                                <label className='font-lato font-medium text-sm text-[#484A54]' htmlFor=''>{selector.label}</label>
                                <div className='relative'>
                                    <div
                                        className="md:w-full selected-option rounded-lg border h-[40px] flex items-center ps-3 font-normal text-sm font-lato text-[#5D606D]"
                                        onClick={() => toggleDropdown(selector.id)}>
                                        {selectedOptions[selector.id]}
                                    </div>
                                    <div className='absolute top-4 right-3'>
                                        <Image src={icon} alt='icons' />
                                    </div>
                                </div>
                                {isOpen === selector.id && (
                                    <ul className="options">
                                        {selector.options.map((option, index) => (
                                            <li
                                                key={index}
                                                className="option"
                                                onClick={() => handleSelect(selector.id, option)}>
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                            </div>
                        ))}
                    </div>



                    <div className='flex gap-3 w-full items-center mt-0 '>
                        <div className='flex w-full gap-[6px] flex-col'>
                            <Label
                                InputLabel="Anz. Flüge"
                                HTMLFor="AnzFluege"
                            />
                            <input className='h-[40px] text-[#5D606D] ps-3 font-lato text-sm placeholder:text-[#C6C8D0] border border-[#D0D5DD] rounded-lg w-full' type="number" placeholder='1' />
                        </div>
                        <div className='flex w-full gap-[6px] flex-col'>
                            <Label
                                InputLabel="Anz. Personen"
                                HTMLFor="AnzPersonen"
                            />
                            <input className='h-[40px] text-[#5D606D] ps-3 font-lato text-sm placeholder:text-[#C6C8D0] border border-[#D0D5DD] rounded-lg w-full' type="number" placeholder='1' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center md:justify-end mt-8 gap-4'>
                <button className='px-6 md:px-6 py-[10px] border rounded-lg font-semibold border-[#373940] text-[#484A54] text-sm md:text-base w-full md:w-fit '>Reset</button>
                <button className='px-6 py-[10px] bg-[#C0CF32] rounded-lg font-semibold border-[#373940] text-[#484A54] w-full md:w-fit text-sm md:text-base'>Calculate</button>
            </div>
        </>
    );
}

export default BookingInput;
