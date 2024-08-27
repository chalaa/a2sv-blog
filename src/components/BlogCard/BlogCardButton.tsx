import React from 'react'


interface BlogCardButtonProps {
  text:string;
  className: string;
}
const BlogCardButton = ({text, className}:BlogCardButtonProps) => {
  return (
    <button className={`flex items-center justify-center ${className} rounded-full px-10 py-4 h-[59px]`}>
        {text}
    </button>
  )
}

export default BlogCardButton
