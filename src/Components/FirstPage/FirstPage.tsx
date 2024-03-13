import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import JoinOurCommunityButton from '../JoinOurCommunity/JoinOurCommunitybutton';
import { Link } from "react-router-dom";
import LandingPageVideosComponent from '../LandingPageVideos/LandingPageVideos';
import Footer2 from '../Footer2/Footer2';
import FooterComponent from '../Footer/Footer';
import VideoSlider from '../VideoSlider/VideoSlider';
import VideoSlider2 from '../VideoSlider2/VideoSlider2';

export const image_url = 'https://thumbs.dreamstime.com/z/microphone-professional-recording-radio-studio-equipment-blurry-background-production-talk-station-volume-video-142075121.jpg?w=992';

const FirstPageComponent = () => {
    return (
        <div className="h-screen relative sm:h-[500px]" style={{ backgroundImage: "linear-gradient(190deg, red 50%, transparent 80%)" }}>
            <div className='pt-32 pl-20 sm:ml-[-45px]'>
                <div className='sm:mt-[-45px]'>
                    <p className='text-white text-3xl font-light font-sans'>
                        featuring
                    </p>
                    <p className='text-white text-3xl font-medium font-sans'>
                        the testimonies of
                    </p>
                    <p className='text-white text-3xl font-light font-sans'>
                        men and women <span className='text-white text-3xl font-medium font-sans'>of faith</span> 
                    </p>
                </div>
                <div className='pt-8'>
                    <Link  to="/KnowMore">
                        <button className='border-solid rounded-3xl border-2 border-white text-white pl-7 pr-7 pt-2 pb-2 font-sans'>
                            Know More
                        </button>
                    </Link>
                    
                </div>
            </div>
            <div className='relative mt-36'>
                <div className="absolute top-auto right-auto mt-[-60px]">
                    <ImQuotesLeft className='text-pink-100 h-52 w-52 sm:w-[80px] sm:h-[80px] sm:mt-[10px]' />
                </div>
                <div className='text-center mt-80 sm:mt-[170px] sm:pt-[20px] sm:pl-[10px] sm:pr-[10px]'>
                    <p className='text-red-900 text-3xl font-medium font-sans sm:mt-[40px]'>
                        In Your Corner <span className='font-light font-sans'>Productions</span>
                    </p>
                    <p className='text-sm font-sans'>In Your Corner Productions specializes in creating Christian-themed television programs, <br />
                        acclaimed documentaries, gospel music, and ministry videos to help promote other faith-based non-profits.</p>
                </div>
            </div>
            <div className='text-center'>
                <JoinOurCommunityButton/>
            </div>
            <div className='mt-16'>

                <div className="h-5/6 ">
                    <div className=" bg-pink-100 pt-40 h-5/6">
                        <div className='flex justify-center py-8 px-2 sm:mb-[-50px]'>
                            <iframe width="720" height="365" src="https://www.youtube.com/embed/tWYsfOSY9vY?si=BS2cklqv3dV9wM8y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="mt-[-300px] rounded-[20px] lg:w-[900px] lg:h-[450px] h-[220px] w-[500px] md:h-[260px]" ></iframe>
                        </div>
                        <div className='overflow-x-hidden'>
                            <VideoSlider2 />
                            {/* <VideoSlider prop1='false' /> */}
                        </div>
                        <div className="text-center mt-[150px] text-lg pb-24 sm:mt-[200px]">
                            <Link to="/Videos">
                                <button className="text-red-900 px-14 py-2.5 border border-2 border-red-900 rounded-3xl font-sans">View All Videos</button>
                            </Link>
                        </div>
                        <div className="text-center pb-40 font-sans">
                            <p className="text-red-900 text-4xl font-light mb-7 font-sans">
                                How Kerry Came to Faith in <span className="text-red-900 text-4xl font-semibold font-sans">Jesus Christ</span>
                            </p>
                            <p className='font-sans sm:pl-[10px] sm:pr-[10px] lg:w-[800px] lg:ml-[280px]'>
                                Beyond the weekly TV show, Kerry Pharr expanded his ministry impact by creating compelling documentary films. Among them are the award-winning “Hope Lives in Hohenwald” and “Fight the Good Fight,” a documentary highlighting champion boxers who discovered hope in Jesus Christ.
                            </p>
                        </div>
                    </div>
                    
                    
                </div>

                <div>
                <div className="mt-[-20px] pb-[20px] relative">
                    <div className="px-1 lg:ml-[130px]  absolute mt-[-40px] sm:ml-[5px] sm:w-[90px] sm:h-[90px] ">
                        <img className='w-48 h-48 rounded-2xl sm:w-[90px] sm:h-[90px]' src="https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg" alt="" />
                    </div>
                    <div className="px-1 lg:ml-[440px]  absolute mt-[-40px] sm:ml-[96px] sm:w-[90px] sm:h-[90px]">
                        <img className='w-48 h-48 rounded-2xl sm:w-[90px] sm:h-[90px]' src="https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg" alt="" />
                    </div>
                    <div className="px-1 lg:ml-[750px]  absolute mt-[-40px] sm:ml-[188px] sm:w-[90px] sm:h-[90px]">
                        <img className='w-48 h-48 rounded-2xl sm:w-[90px] sm:h-[90px]' src="https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg" alt="" />
                    </div>
                    <div className="px-1 lg:ml-[1040px]  absolute mt-[-40px] sm:ml-[280px] sm:w-[90px] sm:h-[90px]">
                        <img className='w-48 h-48 rounded-2xl sm:w-[90px] sm:h-[90px]' src="https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg" alt="" />
                    </div>
                </div>
                <div className="relative h-screen flex items-center lg:justify-start justify-center mt-[0px] z-[-9]">
                    <div className="absolute inset-0 bg-black" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    
                    <div className="z-20 text-white lg:pl-36">
                        <div className="text-center lg:text-left">
                            <h2 className='md:text-5xl lg:text-5xl text-3xl font-bold py-2 font-sans'>Reach out to us today</h2>
                            <p className='md:text-5xl lg:text-5xl text-3xl font-light font-sans'>to fulfill all your ministry <span className='md:text-5xl lg:text-5xl text-4xl font-semibold font-sans'>video</span></p>
                            <h2 className='md:text-5xl lg:text-5xl text-3xl font-bold pt-2 font-sans'>production requirements.</h2>
                        </div>
                        <div className="mt-14 text-center lg:text-left">
                            <button className="border border-2 border-white py-2 px-10 rounded-3xl lg:text-2xl text-2xl font-sans" >Contact Us</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className=''>
                <FooterComponent/>
            </div>
            <div className="">
                <Footer2/>
            </div>
        </div>
    )
}

export default FirstPageComponent