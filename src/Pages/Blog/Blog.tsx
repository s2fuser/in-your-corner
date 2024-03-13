import { useState } from "react";
import Header from "../../Components/Header/Header";
import LandingPageNavigationBar from "../../Components/LandingPageNavigation/LandingPageNavigation";
import BlogCard from "./BlogCard";
import Footer2 from "../../Components/Footer2/Footer2";
import FooterComponent from "../../Components/Footer/Footer";

const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "What Makes Content Engaging Is Relevancy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,centuries",
    },
    {
      title: "david",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,centuries",
    },
    {
      title: "david",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,centuries",
    },
    {
      title: "david",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,centuries",
    },
    {
      title: "david",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,centuries",
    },
    {
      title: "david",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,centuries",
    },
  ]);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <LandingPageNavigationBar />
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 py-10">
          {blogs.map((item, index) => (
            <BlogCard
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
      <div>
        <FooterComponent />
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
};

export default Blog;
