"use client"
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
 
import SkillsSection from "../Skills/Skils";
import ProjectsSection from "../Projects/ProjectsSection";
import ContactSection from "../Contact/ContactSection";
import Footer from "../Footer/FooterSection";
import HeroSection from "../HeroComponent /Hero";

const Application = () => {
   
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
     
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-all duration-300">
      <Navigation   />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Application;