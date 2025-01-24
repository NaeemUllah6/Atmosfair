import Image from 'next/image'
import React from 'react'

const GlobalCards = ({
    img ,
    heading ,
    paragraph ,
    className ,
    width ,
    height,
    paraclassName,
    headclassName

}) => {
  return (
    
      <div className="p-4 rounded-lg  flex gap-4 flex-col dark:bg-gray-800 max-w-[1000px] mx-auto" id="contacts" role="tabpanel">
                    <Image  src={img} alt="Heading" width={width} height={height} />
                    <h2 className={` ${ headclassName}`}>{heading}</h2>
                    <p className={` ${ paraclassName }`}>{paragraph}</p>
                </div>
    
  )
}

export default GlobalCards
