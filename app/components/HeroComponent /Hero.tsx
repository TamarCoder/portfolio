import { ArrowRight, Mail } from "lucide-react";
import { useEffect, useState } from "react";




const HeroSection = () => {
  const [codeVisible, setCodeVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setCodeVisible(true), 300);
  }, []);


  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 opacity-50" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Hello , I am Tamar
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mt-2">
              Frontend Developer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
            create modern, interactive, and responsive web applications using React and the latest technologies
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              See projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:border-indigo-600 hover:text-indigo-600 dark:hover:border-indigo-400 dark:hover:text-indigo-400 transition-all duration-200"
            >
              Contact me
              <Mail className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Code Block */}
        <div className={`relative transition-all duration-1000 ${codeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center mb-4 space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <pre className="text-sm md:text-base overflow-x-auto">
              <code className="language-javascript">
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-400">developer</span> = {'{'}
                {'\n'}
                {'  '}<span className="text-green-400">name</span>:{' '}
                <span className="text-yellow-300">Tamar</span>,
                {'\n'}
                {'  '}<span className="text-green-400">skills</span>: [
                {'\n'}
                {'    '}<span className="text-yellow-300">React</span>,
                {'\n'}
                {'    '}<span className="text-yellow-300">TypeScript</span>,
                {'\n'}
                {'    '}<span className="text-yellow-300">Tailwind CSS</span>,
                {'\n'}
                {'    '}<span className="text-yellow-300">Next.js</span>
                {'\n'}
                {'  '}],
                {'\n'}
                {'  '}<span className="text-green-400">passion</span>:{' '}
                <span className="text-yellow-300">Building amazing UIs</span>
                {'\n'}
                {'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;