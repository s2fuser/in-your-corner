import { Link } from "react-router-dom";

const LandingPageVideosComponent = () => {
    return (
        <div className="">
            <div className=" bg-pink-100 pt-40 font-sans">
                <div className="flex items-center justify-center pb-40">
                    <iframe width="560" height="235" src="https://www.youtube.com/embed/tWYsfOSY9vY?si=BS2cklqv3dV9wM8y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="mx-4 rounded-2xl" ></iframe>
                    <iframe width="560" height="235" src="https://www.youtube.com/embed/tWYsfOSY9vY?si=BS2cklqv3dV9wM8y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="mx-4 rounded-2xl" ></iframe>
                    <iframe width="560" height="235" src="https://www.youtube.com/embed/tWYsfOSY9vY?si=BS2cklqv3dV9wM8y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="mx-4 rounded-2xl" ></iframe>
                </div>
            </div>
            <div className="text-center mt-[-100px] text-lg font-sans">
                <Link to="/Videos">
                    <button className="text-red-900 px-14 py-2.5 border border-2 border-red-900 rounded-3xl font-sans">View All Videos</button>
                </Link>
            </div>
            <div className="text-center font-sans">
                <p className="text-red-900 text-4xl font-light font-sans">
                    How Kerry Came to Faith in <span className="text-red-900 text-4xl font-semibold font-sans">Jesus Christ</span>
                </p>
                <p className="font-sans">
                    Beyond the weekly TV show, Kerry Pharr expanded his ministry impact by creating compelling documentary
                </p>
                <p className="font-sans">
                    films. Among them are the award-winning “Hope Lives in Hohenwald” and “Fight the Good Fight,” a docu-
                </p>
                <p className="font-sans">
                    mentary highlighting champion boxers who discovered hope in Jesus Christ.
                </p>
            </div>
        </div>
    )
}

export default LandingPageVideosComponent