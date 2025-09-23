"use client";
import Image from "next/image";
import { Code, Coffee, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              About Me
            </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Get to know more about me and my journey
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Photo Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl overflow-hidden">
                                {/* Placeholder for photo - replace with your actual image */}
                                <Image
                                    src="/api/placeholder/400/400"
                                    alt="Profile"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                                {/* If no image yet, show placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20">
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <Code className="w-10 h-10 text-white" />
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400">Your Photo Here</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements around photo */}
                            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg">
                                <Coffee className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg">
                                <Code className="w-6 h-6 text-purple-600" />
                            </div>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                        <div className="space-y-6">

                            {/* Main Info */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Your Tamar</span>
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    I am a passionate developer with experience in building modern web applications.
                                    I love creating clean, efficient code and turning ideas into reality through technology.
                                </p>
                            </div>

                            {/* Quick Info Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <MapPin className="w-4 h-4 text-indigo-600" />
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Location</span>
                                    </div>
                                    <p className="text-gray-900 dark:text-white">Tbilisi, Georgia</p>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Calendar className="w-4 h-4 text-purple-600" />
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Experience</span>
                                    </div>
                                    <p className="text-gray-900 dark:text-white">3+ Years</p>
                                </div>
                            </div>

                            {/* Skills or Technologies */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    Technologies I work with
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Javascript', 'Zustand', 'React Form', 'Yup'].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    My diverse background in operations and healthcare economics gives me a unique advantage
                                    in understanding both technical and business needs. I approach every project with a strategic
                                    mindset, always aiming for efficiency and user satisfaction.
                                </p>
                            </div>

                            {/* CTA Button */}
                            <button className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                                Download Resume
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;