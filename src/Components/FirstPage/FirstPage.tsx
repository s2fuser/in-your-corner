import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import JoinOurCommunityButton from '../JoinOurCommunity/JoinOurCommunitybutton';
import { Link } from "react-router-dom";
import LandingPageVideosComponent from '../LandingPageVideos/LandingPageVideos';
import Footer2 from '../Footer2/Footer2';
import FooterComponent from '../Footer/Footer';
import VideoSlider from '../VideoSlider/VideoSlider';

export const image_url = 'https://thumbs.dreamstime.com/z/microphone-professional-recording-radio-studio-equipment-blurry-background-production-talk-station-volume-video-142075121.jpg?w=992';

const FirstPageComponent = () => {
    return (
        <div className="h-screen relative" style={{ backgroundImage: "linear-gradient(190deg, red 50%, transparent 80%)" }}>
            <div className='pt-32 pl-20'>
                <div>
                    <p className='text-white text-3xl font-light'>
                        featuring
                    </p>
                    <p className='text-white text-3xl font-medium'>
                        the testimonies of
                    </p>
                    <p className='text-white text-3xl font-light'>
                        men and women <span className='text-white text-3xl font-medium'>of faith</span> 
                    </p>
                </div>
                <div className='pt-8'>
                    <Link  to="/KnowMore">
                        <button className='border-solid rounded-3xl border-2 border-white text-white pl-7 pr-7 pt-2 pb-2'>
                            Know More
                        </button>
                    </Link>
                    
                </div>
            </div>
            <div className='relative mt-36'>
                <div className="absolute top-auto right-auto mt-[-110px]">
                    <ImQuotesLeft className='text-pink-100 h-52 w-52' />
                </div>
                <div className='text-center mt-80'>
                    <p className='text-red-900 text-3xl font-medium'>
                        In Your Corner <span className='font-light'>Productions</span>
                    </p>
                    <p className='text-sm'>In Your Corner Productions specializes in creating Christian-themed television programs, <br />
                        acclaimed documentaries, gospel music, and ministry videos to help promote other faith-based non-profits.</p>
                </div>
            </div>
            <div className='text-center'>
                <JoinOurCommunityButton/>
            </div>
            <div className='mt-16'>

                <div className="h-5/6">
                    <div className=" bg-pink-100 pt-40 h-5/6">
                        <div className='flex items-center justify-center relative'>
                            <iframe width="720" height="365" src="https://www.youtube.com/embed/tWYsfOSY9vY?si=BS2cklqv3dV9wM8y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="mx-4 rounded-2xl absolute top-[-220px]" ></iframe>
                        </div>
                        <div className="flex items-center justify-center pb-40 pt-48">
                            <iframe width="560" height="235" src="https://www.youtube.com/embed/tWYsfOSY9vY?si=BS2cklqv3dV9wM8y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="mx-4 rounded-2xl" ></iframe>
                            <iframe width="560" height="235" src="https://www.youtube.com/embed/tWYsfOSY9vY?si=BS2cklqv3dV9wM8y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="mx-4 rounded-2xl" ></iframe>
                            <iframe width="560" height="235" src="https://www.youtube.com/embed/tWYsfOSY9vY?si=BS2cklqv3dV9wM8y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="mx-4 rounded-2xl" ></iframe>
                        </div>
                        <div className="text-center mt-[-100px] text-lg pb-24">
                            <Link to="/Videos">
                                <button className="text-red-900 px-14 py-2.5 border border-2 border-red-900 rounded-3xl">View All Videos</button>
                            </Link>
                        </div>
                        <div className="text-center pb-40">
                            <p className="text-red-900 text-4xl font-light mb-7">
                                How Kerry Came to Faith in <span className="text-red-900 text-4xl font-semibold">Jesus Christ</span>
                            </p>
                            <p>
                                Beyond the weekly TV show, Kerry Pharr expanded his ministry impact by creating compelling documentary
                            </p>
                            <p>
                                films. Among them are the award-winning “Hope Lives in Hohenwald” and “Fight the Good Fight,” a docu-
                            </p>
                            <p>
                                mentary highlighting champion boxers who discovered hope in Jesus Christ.
                            </p>
                        </div>
                    </div>
                    
                    
                </div>

                <div>
                <div className="mt-[-60px] pb-[40px]">
                    <VideoSlider prop1="true" />
                </div>
                <div className="relative h-screen flex items-center lg:justify-start justify-center mt-[0px] z-[-9]">
                    <div className="absolute inset-0 bg-black" style={{ backgroundImage: `url(${image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    
                    <div className="z-20 text-white lg:pl-36">
                        <div className="text-center lg:text-left">
                            <h2 className='md:text-5xl lg:text-5xl text-3xl font-bold py-2'>Reach out to us today</h2>
                            <p className='md:text-5xl lg:text-5xl text-3xl font-light'>to fulfill all your ministry <span className='md:text-5xl lg:text-5xl text-4xl font-semibold'>video</span></p>
                            <h2 className='md:text-5xl lg:text-5xl text-3xl font-bold pt-2'>production requirements</h2>
                        </div>
                        <div className="mt-14 text-center lg:text-left">
                            <button className="border border-2 border-white py-2 px-10 rounded-3xl lg:text-2xl text-2xl" >Contact Us</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div>
                <FooterComponent/>
            </div>
            <div className="">
                <Footer2/>
            </div>
        </div>
    )
}

export default FirstPageComponent