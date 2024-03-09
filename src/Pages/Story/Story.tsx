import ButtonComponent from "../../Components/Button/Button";
import Contact from "../../Components/Contact/Contact";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";

const Story = () => {
    return (
        <div>
            <div className="text-center pt-10 pb-4">
                <h2 className="font-bold text-4xl font-nunito">I Am Second Day</h2>
            </div>
            <div className="px-2">
                <p className="text-center text-lg text-red-900 font-semibold pb-3">We’re celebrating all God has done over the last 15 years and encouraging you to take action!</p>
            </div>
            <div className="px-2 flex justify-center">
                <h5 className="text-center text-red-900 w-[424px]">Check back here throughout the day for more interviews
                    with special guests,short films and a bunch of surprises.
                    Remember,you can go from VIEWING TO DOING.
                    <span className="font-semibold">And today is the day to start!</span></h5>
            </div>
            <VideoPlayer />
            <div className="flex justify-center px-2 pt-2 pb-8">
                <ButtonComponent name={'View All Videos'} style="text-red-700 px-8 py-2 border border-2 border-red-700 rounded-3xl font-medium" />
            </div>
            <div>
                <Contact />
            </div>
        </div>
    );
};

export default Story;