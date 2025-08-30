import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: '#', label: 'GitHub' },
    { icon: <Linkedin className="w-6 h-6" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-6 h-6" />, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 hover:text-white text-gray-600 dark:text-gray-400 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            © 2025 Portfolio. All rights reserved..
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer