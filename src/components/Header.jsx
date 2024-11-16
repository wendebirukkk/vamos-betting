function Header() {
   const menuItems = [
     "HOME",
     "SPORT",
     "LIVE",
     "VIRTUAL GAMES",
     "JACKPOT",
     "VIRTUAL SPORT",
     "PROMOTIONS",
     "DEPOSIT",
     "CHECK TICKET",
     "RULES",
   ];
 
   return (
     <>
       <header className="bg-[#131313] ">
         <nav className="p-2 flex justify-between">
           <div>
             <img src="/animal.png" className="w-10 h-15" alt="" />
           </div>
           <div className="space-x-4">
             <input type="text" className="px-3 p-2 bg-[#D3D3D3]" />
             <button className="border-2 px-6 p-2 border-[#25283A] text-white bg-[#FFC221]">Login</button>
             <button className="border-2 px-4 p-2 border-[#25283A] bg-[#0071D1] text-white">Register</button>
           </div>
         </nav>
       </header>
       <div className="bg-[#0071D1] text-center w-500 h-500 justify-center  flex space-x-4 text-white ">
         {menuItems.map((item) => (
           <h2 key={item} className="w-auto h-10 hover:bg-[#131313] p-1">
             {item}
           </h2>
         ))}
       </div>
     </>
   );
 }
 
 export default Header;
 