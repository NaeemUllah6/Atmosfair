import React from 'react'
import Label from './Label'
import Select from './Select'
const labelSelect = (
    {
        htmlFor = [],
        inputLabel = [],  
        selectID = []  
    }
) => {
  return (
    <div>
       <div className='flex flex-col gap-[6px]'>
            <Label
                HTMLFor={htmlFor}
                InputLabel={inputLabel}
                />
                <Select
                id = {selectID}
                />
            </div>
    </div>
  )
}

export default labelSelect
