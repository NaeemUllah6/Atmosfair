import React from 'react'
import Image from 'next/image'
import Label from '../FlightBooking/Label'
import QuestionMark from '@/common/assets/images/questionMark.svg'
import "@/common/assets/css/customcss.css"
const Support = () => {
    const Data = [
        {
            label: 'One-Off',
            for: 'radio1'
        },
        {
            label: 'Mothly',
            for: 'radio2'
        },
        {
            label: 'Quarterly',
            for: 'radio3'
        },
        {
            label: 'Yearly',
            for: 'radio4'
        },
    ]
    return (
        <div className='bg-[#F9FAEB] py-[60px]'>
            <div className='container'>
                <div className='max-w-[939px] mx-auto bg-white p-6 rounded-lg'>
                    <h2 className='font-bold font-lato text-base mt-4'>Your contribution to support renewable energy transition</h2>
                    <div className='flex flex-col md:flex-row gap-8 mt-4'>
                        <div className='flex items-center gap-2 '>
                            <input className='h-[40px] w-full lg:w-[250px] placeholder:text-[#C6C8D0] ps-3 font-lato text-sm text-[#5D606D] border border-[#D0D5DD] rounded-lg ' type="text" placeholder='35' />
                            <p className='font-semibold text-[18px] text-[#373940] font-lato'>€</p>
                        </div>
                        {
                            Data.map((items, index) => (
                                <div key={index} className='flex gap-4 items-center'>
                                    <input id={items.for} name='nothing' type="radio" />
                                    <Label
                                        InputLabel={items.label}
                                        HTMLFor={items.for}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className='flex gap-2 items-center mt-5'>
                        <Image src={QuestionMark} alt='img' />
                        <p className='text-customLight font-normal font-lato text-sm'>Subscriptions may be cancelled at any time.
                        </p>
                    </div>
                    <div className='flex justify-end mt-8    gap-4'>
                        <button className='text-xs
                 md:text-base px-3 w-fit md:w-fit md:px-6 py-[10px] md:text-[18px] border rounded-lg font-semibold border-[#373940] text-[#484A54]'>Directly to donation account</button>
                        <button className='text-xs
                 md:text-base px-3 w-fit md:w-fit md:px-6 py-[10px] bg-[#C0CF32] rounded-lg font-semibold border-[#373940] text-[#030303]'>Donate Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support
