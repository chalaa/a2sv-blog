import React from 'react'
import Image from "next/image"
import { IM_Fell_French_Canon } from "next/font/google";


const im_fell_french_canon = IM_Fell_French_Canon({
    weight: "400",
    subsets: ["latin"],
  });
const BlogDetailHeader = () => {
    
  return (
    <div>
      <h1
          className={`${im_fell_french_canon} text-black font-serif font-normal text-5xl w-full text-center mb-6`}
        >
          The essential guide to Competitive Programming
        </h1>
        <p className=" w-full text-center text-black font-light text-lg mb-16">
          Programming, tech | 6 min Read
        </p>
        <div className="w-full h-[600px] relative mb-16">
          <Image
            src="/profilepicture.jpg"
            alt=""
            fill
            className="absolute "
          />
        </div>
    </div>
  )
}

export default BlogDetailHeader
