import React from 'react';

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

  return <button style={buttonStyle}>{label}</button>;
};

interface ImageGalleryProps {
  topic: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ topic }) => {
  const imageContainerStyle: React.CSSProperties = {
    display: 'flex',
    overflowX: 'auto', // Allow horizontal scrolling if images exceed the container width
  };

  const uniqueImages: string[] = Array.from({ length: 5 }, (_, index) => `src/images${topic.toLowerCase()}/${topic.toLowerCase()}_image_${index + 1}.jpg`);

  return (
    <div style={imageContainerStyle}>
      {uniqueImages.map((image, index) => (
        <img key={index} src={image} alt={`${topic} Thumbnail ${index + 1}`} style={{ marginRight: '10px' }} />
      ))}
    </div>
  );
};

const SearchBox: React.FC = () => {
  const searchBoxStyle: React.CSSProperties = {
    background: '#ffffff',
    borderRadius: '25px', // Adjust the value to control the curvature
    padding: '5px 15px', // Adjust the padding to control the height
    margin: '15px 0', // Add space above and below the search box
    width: '400px', // Maintain the earlier length
    display: 'flex',
    alignItems: 'center',
  };

  const inputStyle: React.CSSProperties = {
    border: 'none',
    outline: 'none',
    width: '100%',
    height: '100%', // Ensure the input takes full height
  };

  return (
    <div style={searchBoxStyle}>
      <input type="text" placeholder="Search" style={inputStyle} />
    </div>
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
      <h1 style={headingStyle}>BROWSE BY TOPIC</h1>
      <div>
        <TopicButton label="Abuse" />
        <TopicButton label="Addiction" />
        <TopicButton label="Anger & forgiveness" />
        <TopicButton label="Anxiety & Depression" />
        <TopicButton label="Cancer" />
      </div>
      <SearchBox />
      <div style={subHeadingContainerStyle}>
        <h1 style={subHeadingStyle}>ABUSE</h1>
        <ImageGallery topic="Abuse" />
        <h1 style={subHeadingStyle}>ADDICTION</h1>
        <ImageGallery topic="Addiction" />
        <h1 style={subHeadingStyle}>ANGER & FORGIVENESS</h1>
        <ImageGallery topic="AngerForgiveness" />
        <h1 style={subHeadingStyle}>ANXIETY & DEPRESSION</h1>
        <ImageGallery topic="AnxietyDepression" />
        <h1 style={subHeadingStyle}>CANCER</h1>
        <ImageGallery topic="Cancer" />
      </div>
    </div>
  );
};

export default BrowseVideoPage;
