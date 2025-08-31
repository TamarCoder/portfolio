import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Menu,
  X,
  ArrowRight,
  Code,
  Palette,
  Zap,
  ShoppingBag,
  BarChart3,
  MessageSquare,
  Send,
  User,
  ChevronRight,
  Layers,
  Terminal,
  Briefcase,
} from "lucide-react";

const Navigation = ({ theme, toggleTheme }: any) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skils" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? theme === "dark"
            ? "rgba(17, 24, 39, 0.8)"
            : "rgba(255, 255, 255, 0.8)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span
              className="text-2xl font-bold"
              style={{
                background: "linear-gradient(to right, #6366f1, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium transition-colors"
                  style={{
                    color: theme === "dark" ? "#d1d5db" : "#374151",
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.color = "#6366f1";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.color =
                      theme === "dark" ? "#d1d5db" : "#374151";
                  }}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                style={{
                  backgroundColor: theme === "dark" ? "#1f2937" : "#f3f4f6",
                  color: theme === "dark" ? "#fbbf24" : "#6366f1",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.backgroundColor =
                    theme === "dark" ? "#374151" : "#e5e7eb";
                  e.currentTarget.style.transform = "rotate(180deg)";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.backgroundColor =
                    theme === "dark" ? "#1f2937" : "#f3f4f6";
                  e.currentTarget.style.transform = "rotate(0deg)";
                }}
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full"
              style={{
                backgroundColor: theme === "dark" ? "#1f2937" : "#f3f4f6",
                color: theme === "dark" ? "#fbbf24" : "#6366f1",
              }}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                style={{
                  color: theme === 'dark' ? '#d1d5db' : '#374151'
                }}
                 onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.color = '#6366f1';
                  e.currentTarget.style.backgroundColor = theme === 'dark' ? '#1f2937' : '#f9fafb';
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.color = theme === 'dark' ? '#d1d5db' : '#374151';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
