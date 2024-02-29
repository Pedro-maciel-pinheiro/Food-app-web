"use client"
import { useState } from 'react';
import "./nav.css"



const NavFunction: React.FC = () => {
  const [btnst, setBtnst] = useState(true);

  const handleClick = () => {
    const toggleSpan = document.querySelector('.toggle span') as HTMLElement;
    const sidebar = document.getElementById('sidebar') as HTMLElement;

    if (btnst) {
      toggleSpan.classList.add('toggle');
      sidebar.classList.add('sidebarshow');
    } else {
      toggleSpan.classList.remove('toggle');
      sidebar.classList.remove('sidebarshow');
    }
    setBtnst(!btnst);
  };

  return (
    <button className="toggle bg-black" onClick={handleClick}>
      {/* Button content */}
    </button>
  );
};

export default NavFunction;
