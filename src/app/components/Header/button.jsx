import React from 'react'

const Button = ({className = [], ButtonText=[]}) => {
  return (
    <div>
        <button 
        className={`py-[13px] px-20'${className? className :  ''}`}
        >{ButtonText}</button>
    </div>
  )
}

export default Button