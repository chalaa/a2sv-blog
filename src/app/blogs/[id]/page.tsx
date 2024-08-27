import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import BlogDetailAvatar from "@/components/BlogDetail/BlogDetailAvatar";
import BlogDetailHeader from "@/components/BlogDetail/BlogDetailHeader";
import BlogDetailContent from "@/components/BlogDetail/BlogDetailContent";
import { IM_Fell_French_Canon } from "next/font/google";
import RelatedBlogCard from "@/components/RelatedBlogs/RelatedBlogCard";

const im_fell_french_canon = IM_Fell_French_Canon({
  weight: "400",
  subsets: ["latin"],
});
const cards = [
  { title: "Card 1", description: "This is the first card." ,buttons : ["Ui/Ux","developer"]},
  { title: "Card 2", description: "This is the second card." ,buttons : ["Ui/Ux","developer"]},
  { title: "Card 3", description: "This is the third card." ,buttons : ["Ui/Ux","developer"]},
];
export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-72">
        <BlogDetailHeader />
        <BlogDetailAvatar />
        <div className="px-16">
          <p
            className={`${im_fell_french_canon} text-black font-serif text-2xl mt-5`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <BlogDetailContent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          <BlogDetailContent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          <BlogDetailContent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          <BlogDetailContent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          <BlogDetailContent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          <BlogDetailContent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <p className="">Related Blogs</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <RelatedBlogCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc="/profilepicture.jpg"
              date="Jan 10, 2020"
              avatarSrc="/profilepicture.jpg"
              name="chala"
              buttons={card.buttons}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
