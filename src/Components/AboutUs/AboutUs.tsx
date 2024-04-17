import React from "react";
import Image3 from "../../Assets/Images/image3.jpg";
import Image4 from "../../Assets/Images/image4.jpg";
import Image5 from "../../Assets/Images/Image5.png";
import AOS from "aos";
import 'aos/dist/aos.css';

const AboutUsComponent = () => {
  AOS.init();
  return (
    <div className="sm:px-[10px] sm:h-[100%] bg-gradient-to-l from-pink-100 to-pink-200 overflow-x-hidden ">
      <div className="lg:flex lg:justify-center md:mx-auto font-medium sm:mx-8 py-14 sm:block md:block lg:w-[1140px]">
        <div className="lg:px-[50px] sm:w-[100%]" data-aos="fade-right">
          <p className="raleway sm:text-3xl font-bold md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-sans mb-[60px] ">
            In Your Corner Ministries
          </p>
          <p className="raleway font-sans sm:text-lg   md:text-lg   lg:text-xl   xl:text-xl   2xl:text-2xl mb-[30px]  ">
            In 2008, Kerry Pharr founded In Your Corner Ministries as an
            internationally syndicated weekly television program. The ministry’s
            purpose was and is to reach the lost through media by featuring the
            testimonies of men and women of faith. Over the following twelve
            years, In Your Corner Ministries produced more than 500 television
            programs.
          </p>
          <p className="raleway sm:text-lg   md:text-lg   lg:text-xl   xl:text-xl   2xl:text-2xl font-sans">
            Throughout his ministry, Kerry has had the privilege of documenting
            and sharing inspiring words of faith from hundreds of men and women
            of God. This esteemed list includes renowned figures such as
            motivational speaker Zig Ziglar, Hall of Fame NASCAR driver Darrell
            Waltrip, former world champion boxers Evander Holyfield, James
            “Bonecrusher” Smith, Troy Dorsey, Gene Hatcher, Hall of Fame
            football player Raymond Berry, Hall of Fame country singer Jimmy
            Fortune, Platinum recording artist John Berry, Country music stars
            Barbara Fairchild, and Irlene Mandrell. Additionally, he has had the
            honor of featuring Dr. Martin Luther King’s niece, Dr. Alveda King,
            along with a multitude of others.
          </p>
        </div>
        <div className="mt-[40px] h-[200px] sm:mb-[50px]" data-aos="fade-left">
          <img
            src={Image4}
            alt=""
            className="md:mx-auto md:mt-[30px] md:h-[400px] md:max-w-[400px] lg:h-[400px] lg:max-w-[400px] xl:h-[400px] xl:max-w-[400px] 3xl:h-[600px] 3xl:max-w-[500px]"
          />
        </div>
      </div>
      <div className="lg:flex lg:justify-center md:mx-auto font-medium sm:mx-8 py-12 sm:block sm:mt-[260px] md:block md:mt-[250px] lg:mt-[0px] background-div lg:w-[1140px]" data-aos="fade-right" >
        <img
          className="md:mx-auto lg:h-[400px]  sm:h-[280px] sm:w-[292px] sm:mb-[30px] md:h-[200px] sm:mx-auto md:mb-[30px] md:w-[500px] md:h-[400px]"
          // lg:ml-[100px]
          src={Image3}
          alt=""
        />
        {/* <div className="raleway font-sans sm:text-lg   md:text-lg   lg:text-xl   xl:text-xl   2xl:text-2xl lg:ml-[50px] lg:pl-[10px] lg:pr-[50px] lg:mt-[100px] 2xl:mt-[140px] sm:w-[100%] sm:w-[100%] 3xl:w-[1500px] 3xl:mr-[438px] 5xl:w-[2500px] 5xl:mr-[574px]" data-aos="fade-left">
          <p>
            Beyond the weekly TV show, Kerry Pharr expanded his ministry impact
            by creating compelling documentary films. Among them are the
            award-winning “Hope Lives in Hohenwald” and “Fight the Good Fight,”
            a documentary highlighting champion boxers who discovered hope in
            Jesus Christ. Additionally, “Forgotten No More” sheds light on the
            plight of impoverished Haitian workers toiling in the sugar cane
            plantations of the Dominican Republic for meager wages as low as ten
            dollars a day.
          </p>
        </div> */}
      </div>
      <div className="md:mx-auto font-medium sm:mx-8 py-12 sm:block lg:w-[1140px]" data-aos="flip-left">

        <p className="lg:mx-auto raleway font-sans sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl sm:w-[100%]">
          Beyond the weekly TV show, Kerry Pharr expanded his ministry impact
          by creating compelling documentary films. Among them are the
          award-winning “Hope Lives in Hohenwald” and “Fight the Good Fight,”
          a documentary highlighting champion boxers who discovered hope in
          Jesus Christ. Additionally, “Forgotten No More” sheds light on the
          plight of impoverished Haitian workers toiling in the sugar cane
          plantations of the Dominican Republic for meager wages as low as ten
          dollars a day.
        </p>

        <p className="lg:mx-auto raleway font-sans sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl sm:w-[100%]">
          Our team is working on a pilot series of television programs from
          Country Stages to Gospel Hymns. This series features the testimonies
          of famous Country Singers who gladly share their faith in Jesus
          Christ., Kerry is also collaborating with Saylors Brothers
          Entertainment on an upcoming film, “Exorcism in America.” Alongside
          him, his accomplished gospel-singing wife, Latrelle Lindon Pharr,
          contributes to the ministry’s multifaceted endeavors.
        </p>
        <p className="lg:mx-auto raleway font-sans sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl sm:w-[100%] mt-[20px] sm:mt-[20px]">
          Kerry and Latrelle dedicate several weeks annually to travel abroad,
          where they engage in preaching, singing, and sharing the gospel with
          those whom Jesus identified as “the least of these.” Kerry expresses
          their shared aspiration, saying, “Our ultimate goal is to devote the
          remainder of our lives to the Lord’s work and actively support other
          ministries in building the Kingdom of God.”
        </p>
      </div>
      <div className="md:mx-auto font-medium sm:mx-8 py-12 sm:block lg:w-[1140px]" data-aos="flip-left" >
        <p className="lg:mx-auto sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-sans mb-[40px]">
          In Your Corner Productions
        </p>
        <p className="lg:mx-auto raleway font-sans sm:text-lg md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl sm:w-[100%] lg:mb-[30px]">
          In Your Corner Productions specializes in creating Christian-themed
          television programs, acclaimed documentaries, gospel music, and
          ministry videos to help promote other faith-based non-profits.
          Operating under the banner of In Your Corner Ministries, our
          production arm boasts a fully equipped television studio, a skilled
          cinematographer, and seasoned videographers. Reach out to us today to
          fulfill all your ministry video production requirements.
        </p>
        <img src={Image5} className="mx-auto mt-[30px]" alt="" />
      </div>
      <div className="md:mx-auto font-medium sm:mx-8 sm:block sm:ml-[-3%] sm:mr-[-3%] bg-red-700 sm:mt-[-140px] md:mt-[-400px] lg:w-[100%]">
        <div className="mx-auto py-12 sm:pt-[150px] md:pt-[400px]">
          <p className="raleway text-white sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-sans text-center mb-[30px]" data-aos="zoom-in">

            How Kerry Came to Faith in Jesus Christ
          </p>
          <iframe
            width="560"
            height="315"
            className="mx-auto sm:w-[300px] sm:h-[200px] sm:mb-[70px] 2xl:w-[800px] 2xl:h-[500px]"
            src="https://www.youtube.com/embed/RZduf4KA6Bs?si=kOiyhfRRo36O0geQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            data-aos="zoom-in"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
