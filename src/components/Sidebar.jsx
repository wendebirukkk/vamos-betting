import React from 'react';

const SidebarItem = ({ imageSrc, item }) => (
  <div className="flex m-1 p-0 text-white hover:bg-[#185181] bg-[#1F1F1F]">
    <img 
      src={imageSrc} 
      alt={item} 
      className="w-10 h-10 px-2" 
    />
    <h2>{item}</h2>
  </div>
);

const Sidebar = () => {
  const items = [
    "Ethiopia-Premier-League", "Europe-UEFA Nations", "Europe-UEFA Europa", "Europe-UEFA Champions", "Europe-UEFA Conference",
    "England-Premier-League", "Spain-La Liga", "Italy-Serie A", "Germany-Bundesliga", "France-Ligue 1", "USA - Major League",
    "USA-NBA", "USA-NHL", "Russia-KHL", "Russia-Superleague", "Brazil-Superliga", 
  ];

  const imageGroups = [
    { start: 0, end: 3, imageSrc: '/ball.png' },
    { start: 4, end: 5, imageSrc: '/basket.png' },
    { start: 6, end: 7, imageSrc: '/khl.png' },
    { start: 8, end: 9, imageSrc: '/ball.png' }
  ];

  return (
    <div className='w-1/6 bg-[#131313] mt-3 mr-3'>
      <h2 className='rounded-t-lg bg-[#3F3F3F] p-4 text-white'>Top Leagues</h2>
      
      <div className='h-64 overflow-x-hidden'>
        {imageGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            {items.slice(group.start, group.end + 1).map((item, index) => (
              <SidebarItem key={index} imageSrc={group.imageSrc} item={item} />
            ))}
          </div>
        ))}
      </div>

      <div className='mt-1.5 border-8 border-black p-2 bg-[#FFC221]'>
        <h2 className='text-white'>Filter by Time</h2>
      </div>

      <div className='h-96 overflow-x-hidden'>
        {items.map((item, index) => (
          <SidebarItem key={index} imageSrc="/ball.png" item={item} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
