import React from 'react';

const CustomSelect = ({ type, options, value, placeholder }) => {
  return (
    <>
      {type === 'select' && (
        <select
          className="h-[40px] font-lato text-sm text-[#5D606D] w-full p-2 border border-gray-300 rounded-md "
          value={value}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
</>
  );
};

export default CustomSelect;
