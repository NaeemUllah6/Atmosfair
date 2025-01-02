import React from 'react'
import Label from './Label';
import Select from './Select';
import Image from 'next/image';
import Plane from '@/assets/images/inputplane.svg'

const BookingInput = () => {
    const options = [
        {
            option: 'Stadt, Land oder Flughafen'
        },

    ]
    const selecFields = [
        {
            label: 'First Class',
            for: 'FirstClass'
        },
        {
            label: 'Flight Type',
            for: 'FlightTYpe'

        },
        {
            label: 'AirCraft',
            for: 'Aircraft'

        }
    ];
    const selecFields1 = [
        {
            label: 'First Class',
            for: 'FirstClass'
        },
        {
            label: 'Flight Type',
            for: 'FlightTYpe'
        },
      
    ]

    const optionsArray = [
        { label: 'Economy', value: 'Economy' },
        { label: 'Chartered', value: 'Chartered' },
        { label: 'Jumbo', value: 'Jumbo' },
    ];
    return (
<>
        <div className='grid grid-cols-1 gap-3 justify-between items-start md:grid-cols-2 '>
            <div className='flex flex-col gap-[6px] '>
                <Label
                    HTMLFor='countrySelect'
                    InputLabel='Departure Airport'
                />
                <input id='countrySelect' className='h-[40px] placeholder:text-[#C6C8D0] text-[#5D606D] ps-9 font-lato text-sm  border border-[#D0D5DD] rounded-lg w-full' type="text" placeholder='Stadt, Land oder Flughafen' />
                <span className='  font-lato font-semibold text-[#163157] text-sm'>+ Add/remove via airport</span>
                <div className='absolute top-9 left-[13px]'>
                    <Image src={Plane} alt="contribution images" />
                </div>
            </div>
            <div className='flex gap-3  items-center'>
                {
                    selecFields.map((items, index) => (
                        <div key= {index} className='flex gap-[6px] flex-col'>
                            <Label
                                InputLabel={items.label}
                                HTMLFor={items.for}
                            />
                            <Select 
                                type="select"
                                options={optionsArray}
                                placeholder="Select an option"
                            />
                        </div>
                    ))
                } 

            </div>
            <div className='flex flex-col gap-[6px] relative mt-0 md:mt-9'>
                <Label
                    HTMLFor='Airport'
                    InputLabel='Arrival Airport'
                />
                <input id='Airport' className='h-[40px] placeholder:text-[#C6C8D0] ps-9 font-lato text-sm text-[#5D606D] border border-[#D0D5DD] rounded-lg w-full' type="text" placeholder='Stadt, Land oder Flughafen' />
                <div className='absolute top-9 left-[13px]'>
                    <Image src={Plane} alt="contribution images" />
                </div>
            </div>
            <div className='flex gap-3 w-full items-center mt-0 md:mt-9 '>
                {
                    selecFields1.map((items, index) => (
                        <div key= {index} className='flex w-full  gap-[6px] flex-col'>
                            <Label
                                InputLabel={items.label}
                                HTMLFor={items.for}
                            />
                            <input className='h-[40px] text-[#5D606D] ps-3  font-lato text-sm placeholder:text-[#C6C8D0] border border-[#D0D5DD] rounded-lg w-full' type="text" placeholder='1' />
                        </div>
                    ))
                }

            </div>
            
        </div>
        <div className='flex justify-center md:justify-end mt-8  gap-4'>
                <button className='px-4 md:px-6 py-[10px] border rounded-lg font-semibold border-[#373940] text-[#484A54] text-sm md:text-base w-full md:w-fit '>Reset</button>
                <button className='px-6 py-[10px] bg-[#C0CF32] rounded-lg font-semibold border-[#373940] text-[#484A54] w-full md:w-fit text-sm md:text-base'>Calculate</button>
            </div>
            </>
    )
}

export default BookingInput
