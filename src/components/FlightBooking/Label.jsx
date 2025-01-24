import React from 'react'

const Label = ({HTMLFor = [], InputLabel = []}) => {
  return (
    
      <label className='font-lato font-medium text-sm text-[#484A54]' htmlFor={HTMLFor}>{InputLabel}</label>

  )
}

export default Label
