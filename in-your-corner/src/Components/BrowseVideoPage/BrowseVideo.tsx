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
    margin: '10px',
    cursor: 'pointer',
    fontWeight: 'bold', // Make text bold
  };

  return <button style={buttonStyle}>{label}</button>;
};

const SearchBox: React.FC = () => {
  const searchBoxStyle: React.CSSProperties = {
    background: '#ffffff',
    borderRadius: '25px', // Adjust the value to control the curvature
    padding: '8px 20px', // Adjust the padding to control the height
    margin: '10px',
    width: '400px', // Make the search box longer
    display: 'flex',
    alignItems: 'center',
  };

  const inputStyle: React.CSSProperties = {
    border: 'none',
    outline: 'none',
    width: '100%',
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
    marginBottom: '20px', // Add some space between heading and buttons
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
      {/* Add your JSX for displaying videos or any other content */}
    </div>
  );
};

export default BrowseVideoPage;
