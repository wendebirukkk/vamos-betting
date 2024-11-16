import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Right from './Right';

const Match = ({ league, date, teams }) => (
  <div className="bg-[#2B2B2B] border-b border-[#545454]">
    {/* Match Header */}
    <div className="flex justify-between p-1">
      <h1 className="text-xs text-blue-500">{league}</h1> {/* Set the color of the league */}
      <h1 className="text-xs text-green-500">{date}</h1>   {/* Set the color of the date */}
    </div>
    
    {/* Match Teams and Button */}
    <div className="flex justify-between p-1  border-[#545454]">
      <h1 className="text-xs text-white">{teams}</h1>    {/* Set the color of the teams */}
      <button className="bg-yellow-500 px-1 py-0.5 text-xs">+1234 Slide Bets</button>
    </div>
    
    {/* Betting Buttons */}
    <div className="flex justify-evenly items-center p-1 border-b border-[#545454] text-white">
      {['1', 'x', '2', '1x', '2x', '12', 'Yes', 'No'].map((label, index) => (
        <button 
          key={label} 
          className={`w-28 p-2 bg-black text-xs ${index !== 0 ? 'border-l border-[#545454]' : ''}`}  // Increased width to w-24
        >
          {label}
        </button>
      ))}
    </div>
  </div>
);

const Banner = () => {
  const images = [
    "/sport.jpg", // Replace with actual image path
    "/sport2.jpg",
    "/sport3.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="h-48 mt-4 mr-4 relative overflow-hidden "> {/* Added px-4 for padding */}
      {/* Display images with fade-in and fade-out effect */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Banner"
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'} ml-4 mr-4`} // Added ml-4 and mr-4 for margins
        />
      ))}
    </div>
  );
};

const Main = () => {
  const matches = [
    { league: 'African Cup of Nations', date: '13/11 05:00', teams: 'Angola vs Morocco' },
    { league: 'African Cup of Nations', date: '13/11 05:00', teams: 'Angola vs Morocco' },
    { league: 'African Cup of Nations', date: '13/11 05:00', teams: 'Angola vs Morocco' },
    { league: 'African Cup of Nations', date: '13/11 05:00', teams: 'Angola vs Morocco' },
    { league: 'African Cup of Nations', date: '13/11 05:00', teams: 'Angola vs Morocco' },
    { league: 'African Cup of Nations', date: '13/11 05:00', teams: 'Angola vs Morocco' },
  ];

  return (
    <div className="flex h-screen bg-[#131313]">
      <Sidebar />
      <div className="w-4/6 bg-black overflow-y-auto">
        
        {/* Banner Section */}
        <Banner /> {/* Image carousel component */}
        
        {/* Header Tabs */}
        <div className="m-4">
          <div className="flex items-center border-b border-gray-500">
            <div className="flex-1 p-2 text-center border-r border-gray-300 hover:bg-[#045EAB] text-[#545454] bg-[#2B2B2B] hover:text-black">
              UPCOMING MATCHES
            </div>
            <div className="flex-1 p-2 text-center bg-[#0071D1] text-white">
              TOP LEAGUES
            </div>
          </div>

          {/* Match Header */}
          <div className="flex items-center text-[#0467A1] border-t border-b border-[#545454] bg-[#2B2B2B] text-sm">
            <div className="flex-1 text-center border-r border-[#545454]">Match Result</div>
            <div className="flex-1 text-center border-r border-[#545454]">Double Chance</div>
            <div className="flex-1 text-center">Both Score</div>
          </div>

          {/* Match List with manually added margin between items */}
          <div>
            {matches.map((match, index) => (
              <Match 
                key={index} 
                league={match.league} 
                date={match.date} 
                teams={match.teams} 
              />
            ))}
          </div>
        </div>
      </div>
      <Right />
    </div>
  );
};

export default Main;
