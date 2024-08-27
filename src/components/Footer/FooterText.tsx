import React from 'react'

interface FooterTextProps {
    text:string;
}
const FooterText = ({text}:FooterTextProps) => {
  return (
    <p className='text-black font-light'>
        {text}
    </p>
  )
}

export default FooterText
