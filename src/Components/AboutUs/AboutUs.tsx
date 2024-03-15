import React from "react";
import Image3 from '../../Assets/Images/image3.jpg'
import Image4 from '../../Assets/Images/image4.jpg'
import Image5 from '../../Assets/Images/Image5.png'

const AboutUsComponent = () => {
    return (
        <div className="sm:px-[10px] sm:h-[100%]">
            <div className="flex justify-center mx-8 my-12 sm:block">
                <div className="lg:px-[50px] sm:w-[100%]">
                    <p className="text-4xl font-sans mb-[60px]">
                        In Your Corner Ministries
                    </p>
                    <p className="font-sans mb-[30px]">
                        In 2008, Kerry Pharr founded In Your Corner Ministries as an internationally syndicated weekly television program. The ministry’s purpose was and is to reach the lost through media by featuring the testimonies of men and women of faith. Over the following twelve years, In Your Corner Ministries produced more than 500 television programs.
                    </p>
                    <p className="font-sans">
                        Throughout his ministry, Kerry has had the privilege of documenting and sharing inspiring words of faith from hundreds of men and women of God. This esteemed list includes renowned figures such as motivational speaker Zig Ziglar, Hall of Fame NASCAR driver Darrell Waltrip, former world champion boxers Evander Holyfield, James “Bonecrusher” Smith, Troy Dorsey, Gene Hatcher, Hall of Fame football player Raymond Berry, Hall of Fame country singer Jimmy Fortune, Platinum recording artist John Berry, Country music stars Barbara Fairchild, and Irlene Mandrell. Additionally, he has had the honor of featuring Dr. Martin Luther King’s niece, Dr. Alveda King, along with a multitude of others.
                    </p>

                </div>
                <div className="mt-[80px] h-[200px] sm:mb-[50px]">
                    <img src={Image4} alt="" />
                </div>
            </div>
            <div className="flex justify-center mx-8 my-12 sm:block sm:mt-[260px]">
                <img className="lg:h-[400px] lg:ml-[100px] sm:h-[280px] sm:w-[292px] md:ml-[6%] sm:mb-[30px] md:h-[200px] md:mr-[20px]" src={Image3} alt="" />
                <div className="font-sans lg:ml-[50px] lg:pl-[10px] lg:pr-[50px] lg:mt-[180px] sm:w-[100%] sm:w-[100%]">
                    <p>
                        Beyond the weekly TV show, Kerry Pharr expanded his ministry impact by creating compelling documentary films. Among them are the award-winning “Hope Lives in Hohenwald” and “Fight the Good Fight,” a documentary highlighting champion boxers who discovered hope in Jesus Christ. Additionally, “Forgotten No More” sheds light on the plight of impoverished Haitian workers toiling in the sugar cane plantations of the Dominican Republic for meager wages as low as ten dollars a day.
                    </p>
                </div>
            </div>
            <div className="mx-8 my-12 sm:block">
                {/* <p className="font-sans">
                    Beyond the weekly TV show, Kerry Pharr expanded his ministry impact by creating compelling documentary films. Among them are the award-winning “Hope Lives in Hohenwald” and “Fight the Good Fight,” a documentary highlighting champion boxers who discovered hope in Jesus Christ. Additionally, “Forgotten No More” sheds light on the plight of impoverished Haitian workers toiling in the sugar cane plantations of the Dominican Republic for meager wages as low as ten dollars a day.
                </p> */}
                <p className="font-sans sm:w-[100%]">
                    Our team is working on a pilot series of television programs from Country Stages to Gospel Hymns. This series features the testimonies of famous Country Singers who gladly share their faith in Jesus Christ., Kerry is also collaborating with Saylors Brothers Entertainment on an upcoming film, “Exorcism in America.” Alongside him, his accomplished gospel-singing wife, Latrelle Lindon Pharr, contributes to the ministry’s multifaceted endeavors.
                </p>
                <p className="font-sans sm:w-[100%] mt-[20px] sm:mt-[20px]">
                    Kerry and Latrelle dedicate several weeks annually to travel abroad, where they engage in preaching, singing, and sharing the gospel with those whom Jesus identified as “the least of these.” Kerry expresses their shared aspiration, saying, “Our ultimate goal is to devote the remainder of our lives to the Lord’s work and actively support other ministries in building the Kingdom of God.”
                </p>
            </div>
            <div className="mx-8 my-12 sm:block">
                <p className="text-4xl font-sans mb-[40px]">
                    In Your Corner Productions
                </p>
                <p className="font-sans sm:w-[100%] lg:mb-[30px]">
                    In Your Corner Productions specializes in creating Christian-themed television programs, acclaimed documentaries, gospel music, and ministry videos to help promote other faith-based non-profits. Operating under the banner of In Your Corner Ministries, our production arm boasts a fully equipped television studio, a skilled cinematographer, and seasoned videographers.  Reach out to us today to fulfill all your ministry video production requirements.
                </p>
                <img src={Image5} className="sm:mt-[30px] lg:h-[200px] lg:w-[900px] lg:h-[500px] lg:ml-[15%] md:w-[70%] md:ml-[5%] md:mt-[20px]" alt="" />
            </div>
            <div className="mx-8 my-12 sm:block">
                <p className="text-4xl font-sans mb-[60px] lg:ml-[25%]">
                    How Kerry Came to Faith in Jesus Christ
                </p>
                <iframe width="560" height="315" className="sm:w-[300px] sm:h-[200px] sm:mb-[70px] lg:ml-[28%]" src="https://www.youtube.com/embed/RZduf4KA6Bs?si=kOiyhfRRo36O0geQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default AboutUsComponent