import React from "react";
import Image from "next/image";
import BlogCardButton from "../BlogCard/BlogCardButton";
interface RelatedBlogCardProps {
  title: string;
  description: string;
  imageSrc: string;
  avatarSrc: string;
  name: string;
  date: string;
  buttons: string[];
}
const RelatedBlogCard = ({
  imageSrc,
  avatarSrc,
  name,
  description,
  title,
  date,
  buttons
}: RelatedBlogCardProps) => {
  return (
    <div className="bg-white mt-16">
      <div className="relative w-full h-48 mb-2">
        <Image src={imageSrc} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-[#5E5873] font-medium text-lg pl-3">{title}</p>
        <div className="flex items-center pl-4 ">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-1">
            <Image src={avatarSrc} alt={name} width={48} height={48} />
          </div>
          <p className="text-sm text-[#6E6B7B] font-semibold"><span className="text-[#B9B9C3] text-sm px-1">by</span>{name}</p>
          <p className="text-[#B9B9C3] text-sm pl-4">{date}</p>
        </div>
      </div>
      <div className="flex flex-row gap-3 pt-3">
        {buttons.map((button) => (
            <div key={button}>
                <BlogCardButton  text={button} className="bg-[#F5F5F5] text-[#8E8E8E] h-9"/>
            </div>
                
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogCard;
