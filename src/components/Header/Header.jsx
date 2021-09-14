import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';



const nav = [
   {
      name: 'Characters',
      url: 'characters',
   },
   {
      name: 'Comics',
      url: 'comics',
   },
   {
      name: 'Series',
      url: 'series',
   },
   {
      name: 'Events',
      url: 'events',
   }, {
      name: 'Stories',
      url: 'stories',
   },
   {
      name: 'Creators',
      url: 'creators',
   },

]

const Header = () => {

   const [isActive, setActive] = useState("false");

   const handleToggle = () => {
      setActive(!isActive);
      console.log("!")
   };


   return (
      <header>

         <nav className="navHeader">
            {
               nav.map(item =>

                  <Link to={item.url}    >
                     <span className={isActive ? "app" : null} onClick={handleToggle} >
                        {item.name}
                     </span>
                  </Link>
               )
            }

         </nav>
      </header >
   )
}

export default Header;


