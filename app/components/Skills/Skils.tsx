import { ChevronRight, Code, Palette, Zap } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      skills: ["React & Next.js", "TypeScript", "HTML", "JavaScript"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX & Styling",
      skills: [
        "Tailwind CSS",
        "SASS/SCSS",
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Tools & Others",
      skills: [
        "Git & GitHub",
        "Axios",
          "Zustand"
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
       <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Skils</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Technologies and tools that I use
          </p>
        </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                {skillGroup.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skillGroup.title}
              </h3>
              <ul className="space-y-2">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                    <ChevronRight className="w-4 h-4 mr-2 text-indigo-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>


      </div>
    </section>
  );
};

export default SkillsSection;
