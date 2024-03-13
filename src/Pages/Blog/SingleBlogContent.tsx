import { useLocation, useParams } from "react-router-dom";
import { MdCalendarMonth } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import TextTab from "../../Components/TextTab/TextTab";

const SingleBlogContent = () => {
  const location = useLocation();
  let { id } = useParams();
  const { title, description } = location.state;

  return (
    <div className="flex justify-center py-4">
      <div className="p-4 bg-gray-800 lg:w-[60%] w-[90%] mx-2">
        <div>
          <img
            src={require(`../../Assets/blogimages/blog${id}.jpg`)}
            alt=""
          />
        </div>
        <div className="py-8">
            <div className="flex items-center gap-6 text-white">
                <div className="flex items-center gap-1">
                    <GoPerson color="white" size={20} />
                    <p className="text-sm font-semibold">By - Admin</p>
                </div>
                <div className="flex items-center gap-1">
                    <MdCalendarMonth color="white" size={20} />
                    <p className="text-sm font-semibold">September 1, 2023</p>
                </div>
            </div>
            <div className="py-6">
                <p className="text-gray-300">{description}</p>
            </div>  
            <div className="flex items-center gap-4 flex-wrap"> 
                <p className="text-white font-semibold">Posted in</p>
                <div className="flex">
                    <TextTab title={"Podcast"} styles={{backgroundColor: '#e91e63'}} />
                    <TextTab title={"Video Blog"} styles={{backgroundColor: '#e91e63'}} />
                    <TextTab title={"Vimeo"} styles={{backgroundColor: '#e91e63'}} />
                </div> 
            </div>
            <div className="flex items-center gap-4 py-4">
                <p className="text-white font-semibold">Tagged in</p> 
                <div className="flex">
                    <TextTab title={"Podcast"} styles={{backgroundColor: '#e91e63'}} />
                    <TextTab title={"Video Blog"} styles={{backgroundColor: '#e91e63'}} />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogContent;
