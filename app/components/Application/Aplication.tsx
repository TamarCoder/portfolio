"use client"
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import HeroSection from "../HeroComponent /Hero";
import SkillsSection from "../Skills/Skils";
 





const Application = () => {


   const [theme, setTheme] = useState('light');
    useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);
  

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };


      return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navigation theme={theme} toggleTheme={toggleTheme} />
          <HeroSection/>
          <SkillsSection/>
        </div>
      )
 

}


export default Application;
