"use client";
import BlogCard from "@/components/BlogCard/BlogCard";
import BlogHeader from "@/components/BlogHeader/BlogHeader";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useGetAllBlogsQuery } from "../../Services/api";

export default function Home() {
  console.log("treq  alue is", useGetAllBlogsQuery());
  const { data: data,error, isLoading } = useGetAllBlogsQuery();



  const datas = data?.slice(0, 5);
  return (
    <div>
      <Header />
      <BlogHeader />
      {isLoading ? (
        <div className="text-black text-center mt-10">Loading...</div>
      ) : error ? (
        <div className="text-red-600 text-center mt-10"> OOppps sorrry the server is not available</div>
      ) : (
        <div className="px-80">
          {datas?.map((d) => (
            <BlogCard
              key={d._id}
              _id={d._id}
              title={d.title}
              description={d.description}
              skills={d.skills}
            />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}
