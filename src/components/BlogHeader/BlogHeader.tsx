import React from 'react'
import BlogCardButton from '../BlogCard/BlogCardButton'

const BlogHeader = () => {
  return (
    <div className='flex justify-between items-center pl-72 pr-96'>
        <p className='text-black font-semibold text-3xl'>Blog</p>
        <div className='flex flex-row gap-5'>
            <input type="text" className='border-2 rounded-full text-center ' placeholder='search' />
            <BlogCardButton text= "+ New Blog" className='bg-[#264FAD] text-white font-semibold text-xl'/>
        </div>
    </div>
  )
}

export default BlogHeader
