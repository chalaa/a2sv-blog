import Image from "next/image";
import React from "react";

const BlogDetailAvatar = () => {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-20 h-20 flex justify-centerrounded-full relative ">
          <Image
            src="/profilepicture.jpg"
            alt=""
            fill
            className="absolute rounded-full"
          />
        </div>
      </div>
      <p className=" w-full text-center text-black font-light text-lg mt-6">
        Programming, tech | 6 min Read
      </p>
      <p className=" w-full text-center text-[#264FAD] font-light text-lg">
        @chaltu_kebede
      </p>
    </div>
  );
};

export default BlogDetailAvatar;
