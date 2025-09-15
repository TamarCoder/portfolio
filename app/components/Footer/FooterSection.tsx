import {Github, Instagram, Linkedin, Mail, Code} from "lucide-react";

const Footer = () => {
    const socialLinks = [
        {icon: <Github className="w-6 h-6"/>, href: 'https://github.com/TamarCoder', label: 'GitHub'},
        {
            icon: <Linkedin className="w-6 h-6"/>,
            href: 'https://www.linkedin.com/in/tamar-khukisvadze',
            label: 'LinkedIn'
        },
        {icon: <Instagram className="w-6 h-6"/>, href: 'https://www.instagram.com/tamar.coder/', label: 'Instagram'}
    ];

    const navigationLinks = [
        {name: 'Home', href: '#home'},
        {name: 'About', href: '#about'},
        {name: 'Projects', href: '#projects'},
        {name: 'Skills', href: '#skills'},
        {name: 'Contact', href: '#contact'}
    ];

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-16">
            <div className="max-w-7xl mx-auto px-4">

                {/* Main Footer Content */}
                <div className="grid lg:grid-cols-3 gap-8 mb-12">

                    {/* Logo & Contact Section */}
                    <div className="space-y-6">
                        {/* Logo/Name */}
                        <div className="flex items-center space-x-3">
                            <div
                                className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Code className="w-6 h-6 text-white"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Tamar
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    React Developer
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-3 group">
                            <div
                                className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-600 transition-all duration-200">
                                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white"/>
                            </div>
                            <a
                                href="mailto:thamuna.khuskivadze@gmail.com"
                                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                            >
                                thamuna.khuskivadze@gmail.com
                            </a>
                        </div>

                        {/* Additional Info */}
                        <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">
                            Building modern web applications with passion and precision.
                            Let&#39;s create something amazing together.
                        </p>
                    </div>

                    {/* Navigation Section */}
                    <div className="lg:flex lg:justify-center">
                        <div className="space-y-6">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Navigation
                            </h4>
                            <div className="flex flex-col space-y-3">
                                {navigationLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 py-1"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="lg:flex lg:justify-end">
                        <div className="space-y-6">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Connect With Me
                            </h4>
                            <div className="flex space-x-4">
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

                            {/* Additional Social Text */}
                            <p className="text-sm text-gray-500 dark:text-gray-500">
                                Follow me for updates and insights
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-8"></div>

            </div>
        </footer>
    );
};

export default Footer;