import React from "react";
import Image from "next/image";
import BlogCardButton from "./BlogCardButton";
import { BlogResponseType,AuthorResponseType } from '../../../type/type';


interface BlogCardProps {
  _id: string;
  title: string;
  description: string;
  skills: string[];
}



const BlogCard = ({_id,
  title,
  description,
  skills,
  }:BlogCardProps) => {
  return (
    <div className="px-10 py-10" key={_id}>
      <hr className="w-full bg-black mb-9" />
      <div className="flex flex-col gap-10">
        <div className="flex gap-6 h-fit">
          <div className="w-24 h-24 rounded-full relative">
            <Image src="/profilepicture.jpg" alt = "" fill className="absolute rounded-full"/>
          </div>
          <div className="flex flex-col text-[#3C3C3C] text-lg font-bold gap-5 ">
            <div className="flex gap-3 items-center">
                <p className="text-black font-semibold text-2xl">Chala Olani</p>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <p className="text-[#868686] font-medium text-lg">Apr 16, 2022</p>
            </div>
            <div>
            <p className="text-[#868686] font-semibold text-lg">SOFTWARE ENGINEER</p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 text-black h-full">
          <div className="flex flex-col">
            <p className="flex text-black font-bold text-3xl">{title}</p>
            <p className="flex text-[#868686] font-normal text-lg">{description}</p>
          </div>
          <div className="w-3/6 h-auto relative">
            <Image src="/profilepicture.jpg" alt = "" fill className="absolute"/>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          {
            skills.map((skill, index) => (
              <BlogCardButton key={index} text={skill} className="bg-[#F5F5F5] text-[#8E8E8E]"/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
