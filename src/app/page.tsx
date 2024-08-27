"use client"
import BlogCard from "@/components/BlogCard/BlogCard";
import BlogHeader from "@/components/BlogHeader/BlogHeader";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useGetAllBlogsQuery,  } from '../../Services/api';
import type { AppProps } from 'next/app';
import { wrapper } from '../../Services/store'

export default function Home({ Component, pageProps }: AppProps) {
  const { data: data, error, isLoading } = useGetAllBlogsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading blogs</div>;

  const datas = data?.slice(0,5)
  return (
    <div>
      <Header />
        <BlogHeader />
      <div className="px-80">
        {
          datas?.map((d)=>(
            <BlogCard 
            _id={d._id} 
            title={d.title}
            description={d.description}
            skills={d.skills}
            />
          ))
        }

      </div>
      <Footer />
    </div>
  );
}
