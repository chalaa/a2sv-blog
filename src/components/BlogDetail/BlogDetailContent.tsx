import React from "react";

interface BlogDetailContentProps {
  text: string;
}
const BlogDetailContent = ({ text }: BlogDetailContentProps) => {
  return <p className="text-[#737373] font-normal text-lg mt-12">{text}</p>;
};

export default BlogDetailContent;
