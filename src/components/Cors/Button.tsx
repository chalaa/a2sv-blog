import React from 'react'


interface ButtonProps {
    text:string
} 
const Button = ({text}:ButtonProps) => {
  return (
    <button className='flex items-center justify-center bg-[#264FAD] rounded-lg text white px-10 py-4 h-[59px] text-white'>
        {text}
    </button>
  )
}

export default Button
