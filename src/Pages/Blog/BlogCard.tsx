import { MdCalendarMonth } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

type BlogCardTypes = {
  title: string;
  description: string;
  index: number;
};

const BlogCard = ({ title, description, index }: BlogCardTypes) => {
  return (
    <Link
      to={`${index + 1}`}
      state={{ title: title, description: description }}
    >
      <div key={index} className="bg-gray-800 text-white mb-4">
        <div>
          <img
            src={require(`../../Assets/blogimages/blog${index + 1}.jpg`)}
            alt=""
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2 w-[80%]">{title}</h2>
          <p className="text-gray-400">{description}</p>
        </div>
        <div className="flex justify-between px-4 pb-4 pt-2 border border-1 border-white">
          <div className="flex items-center gap-2">
            <GoPerson color="#e91e63" size={20} />
            <p className="raleway text-sm font-semibold">By - Admin</p>
          </div>
          <div className="flex items-center gap-2">
            <MdCalendarMonth color="#e91e63" size={20} />
            <p className="raleway text-sm font-semibold">September 1, 2023</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
