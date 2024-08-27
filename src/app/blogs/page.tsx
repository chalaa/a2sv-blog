import BlogCard from "@/components/BlogCard/BlogCard";
import BlogHeader from "@/components/BlogHeader/BlogHeader";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
        <BlogHeader />
      <div className="px-80">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />

      </div>
      <Footer />
    </div>
  );
}
