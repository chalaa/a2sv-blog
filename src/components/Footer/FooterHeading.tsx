import React from 'react'


interface FooterHeadingProps {
    text:string;
}   
const FooterHeading = ({text}:FooterHeadingProps) => {
  return (
    <p className='text-black font-semibold text-5 pb-10'>{text}</p>
  )
}

export default FooterHeading
