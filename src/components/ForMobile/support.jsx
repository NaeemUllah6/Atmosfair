import React, { useState } from 'react';
import "@/common/assets/css/customcss.css";

const Support = () => {
    const [selected, setSelected] = useState(""); // State to track the selected radio button

    const Data = [
        {
            label: 'One-time Donation',
            for: 'radio1',
          
        },
        {
            label: 'Monthly recurring',
            for: 'radio2',
          
        },
        {
            label: 'Quartly recurring',
            for: 'radio3',
          
        },
        {
            label: 'Yearly recurring',
            for: 'radio4',
            
        },
    ];

    return (
        <div className='bg-[#FAFAFA] py-[30px] md:py-[60px]'>
            <div className='container'>
                <h2 className='font-bold font-lato text-2xl text-center'>
                    Nachhaltiger Einsatz. <span className='text-[#C0CF32]'>Dauerhaft</span> fördern.
                </h2>
                <div className='flex flex-col md:flex-row gap-8 mt-4'>
                    <div className='flex items-center gap-2'>
                        <input
                            className='h-[40px] w-full lg:w-[250px] placeholder:text-[#C6C8D0] ps-3 font-lato text-sm text-[#5D606D] border border-[#D0D5DD] rounded-lg'
                            type="text"
                            placeholder='35 €'
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        {Data.map((item, index) => (
                            <div key={index}>
                                <label
                                    className={`px-3 py-2 border w-full flex flex-col gap-2 cursor-pointer rounded-[10px]  font-lato  text-sm ${
                                        selected === item.for ? "bg-[#EBF0BF] font-bold text-[#030303]" : "font-medium dark:bg-white text-[#5D606D]"
                                    }`}
                                    htmlFor={item.for}
                                >
                                    <input
                                        id={item.for}
                                        className=''
                                        type="radio"
                                        name="radio"
                                        onChange={() => setSelected(item.for)} 
                                    />
                                    {item.label}
                                    <span className='text-sm'>{item.labeltext}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
