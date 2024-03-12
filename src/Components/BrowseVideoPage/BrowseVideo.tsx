import React from 'react';
import VideoSlider from '../VideoSlider/VideoSlider';

interface ButtonProps {
  label: string;
}

const TopicButton: React.FC<ButtonProps> = ({ label }) => {
  const buttonStyle: React.CSSProperties = {
    background: 'transparent',
    color: '#ffffff',
    border: '2px solid #ffffff',
    borderRadius: '25px', // Adjust the value to control the curvature
    padding: '10px 20px',
    margin: '25px', // Add space around the button
    cursor: 'pointer',
    fontWeight: 'bold', // Make text bold
  };

  return <button className='bg-transparent text-white border-2 border-white rounded-[25px] px-8 py-2 m-4 cursor-pointer font-bold sm:block sm:ml-[-25px]' >{label}</button>;
  // style={buttonStyle}
};


const SearchBox: React.FC = () => {
  const searchBoxStyle: React.CSSProperties = {
    background: '#ffffff',
    borderRadius: '25px', // Adjust the value to control the curvature
    padding: '5px 15px', // Adjust the padding to control the height
    margin: '15px 0', // Add space above and below the search box
    // width: '400px', // Maintain the earlier length
    display: 'flex',
    alignItems: 'center',
  };

  const inputStyle: React.CSSProperties = {
    border: 'none',
    outline: 'none',
    // width: '100%',
    height: '100%', // Ensure the input takes full height
  };

  return (
    <div style={searchBoxStyle}>
      {/* style={searchBoxStyle} */}
      <input type="text" placeholder="Search"  className='w-[100%] h-[100%] border-none outline-none lg:w-[400px]' />
    </div>
    // style={inputStyle}
  );
};

interface BrowseVideoProps {
  // Add any props you need for your component
}

const BrowseVideoPage: React.FC<BrowseVideoProps> = (props) => {
  const containerStyle: React.CSSProperties = {
    background: 'linear-gradient(to right, #990000, #FF6666)',
    width: '100%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    alignItems: 'center', // Center horizontally
    color: '#ffffff',
    minHeight: '100vh',
  };

  const headingStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '2rem', // Adjust the font size to make it bigger
    marginBottom: '20px', // Add some space between heading and buttons
    marginTop: '20px', // Add some space between heading and buttons
  };

  const subHeadingContainerStyle: React.CSSProperties = {
    textAlign: 'left', // Align the subheading to the left
    marginLeft: '100px', // Adjust the margin for additional spacing
    width: '100%', // Ensure the container takes full width
  };

  const subHeadingStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '2rem', // Adjust the font size to make it bigger
    marginBottom: '20px', // Add some space between heading and buttons
    marginTop: '20px', // Add some space between heading and buttons
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle} className='font-bold'>BROWSE BY TOPIC</h1>
      <div>
        <TopicButton label="Abuse" />
        <TopicButton label="Addiction" />
        <TopicButton label="Anger & forgiveness" />
        <TopicButton label="Anxiety & Depression" />
        <TopicButton label="Cancer" />
      </div>
      <SearchBox />
      <div style={subHeadingContainerStyle}>
        <div className='ml-[-50px]'>
        <p  className=' font-bold text-2xl mb-20 mt-20'>ABUSE</p>
        {/* style={subHeadingStyle} */}
        <div className='flex justify-between mt-4 ml-0 overflow-x-hidden'>
            {/* <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl ml-0' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/> */}

            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>


            {/* <div className="">
              <VideoSlider prop1='false' />
            </div>  */}

        </div>
        </div>
        <div className='ml-[-50px]'>
        <p  className='font-bold text-2xl mb-20 mt-20'>ADDICTION</p>
        {/* style={subHeadingStyle} */}
        <div className='flex justify-between mt-4 ml-0 overflow-x-hidden'>
            {/* <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl ml-0' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/> */}

            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>

            {/* <div className="">
              <VideoSlider prop1='false' />
            </div>  */}

        </div>
        </div>
        <div className='ml-[-50px]'>
        <p  className='font-bold text-2xl mb-20 mt-20'>ANGER & FORGIVENESS</p>
        {/* style={subHeadingStyle} */}
        <div className='flex justify-between mt-4 ml-0 overflow-x-hidden'>
            {/* <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl ml-0' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/> */}

            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>

            {/* <div className="">
              <VideoSlider prop1='false' />
            </div>  */}

        </div>
        </div>
        <div className='ml-[-50px]'>
        <p  className='font-bold text-2xl mb-20 mt-20'>ANXIETY & DEPRESSION</p>
        {/* style={subHeadingStyle} */}
        <div className='flex justify-between mt-4 ml-0 overflow-x-hidden'>
            {/* <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl ml-0' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/> */}

            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>

            {/* <div className="">
              <VideoSlider prop1='false' />
            </div>  */}

        </div>
        </div>
        <div className='ml-[-50px]'>
        <p  className='font-bold text-2xl mb-20 mt-20'>CANCER</p>
        {/* style={subHeadingStyle} */}
        <div className='flex justify-between mt-4 ml-0 overflow-x-hidden'>
            {/* <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl ml-0' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/>
            <img className='w-60 h-40 object-cover rounded-t-xl rounded-b-xl' src='https://cdn.pixabay.com/photo/2018/07/06/19/48/charles-chaplin-3521070_1280.jpg' alt=''/> */}

            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>
            <div className="px-1">
                <iframe src="https://www.youtube.com/embed/yhB3BgJyGl8?si=bCkUnjDDE14xK6hB&amp;controls=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media;" allowFullScreen className="rounded-[25px] w-[250px] px-2"></iframe> 
            </div>

            {/* <div className="">
              <VideoSlider prop1='false' />
            </div>  */}

        </div>
        </div>
{/*        
        <h1 style={subHeadingStyle}>ADDICTION</h1>
        <h1 style={subHeadingStyle}>ANGER & FORGIVENESS</h1>
        <h1 style={subHeadingStyle}>ANXIETY & DEPRESSION</h1>
        <h1 style={subHeadingStyle}>CANCER</h1> */}
      </div>
    </div>
  );
};

export default BrowseVideoPage;