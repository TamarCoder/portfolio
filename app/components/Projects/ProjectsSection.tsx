import {
    ArrowRight,
    BarChart3,
    ExternalLink,
    Github, ListTodo,
    MessageSquare,
    ShoppingBag,
} from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "E-Commerce Platform",
      description:
        "E-commerce page built with React, TypeScript, Tailwind,  Zustand  and Yup. Features search, filtering, and simulated checkout",
      technologies: ["React", "TypeScript" ,"Node.js",  "Tailwind", "Lucide React", "Yup", 'Zustand'],
      gradient: "from-blue-500 to-purple-600",
      demoLink: "https://main.d19cnu2jqlon6l.amplifyapp.com/",
      githubLink: "https://github.com/TamarCoder/EcommerceApp",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Analytics Dashboard",
      description:
        " Modern Analytics Dashboard with React, TypeScript, and Tailwind CSS. Features responsive dark theme with animations.",
      technologies: ["React", "TypeScript", "Tailwind", "Lucide React" ],
      gradient: "from-pink-500 to-rose-600",
      demoLink: "https://main.d3dg9l789ktxpo.amplifyapp.com/",
      githubLink: "https://github.com/TamarCoder/Analytics-Dashboard",
    },
    {
      icon: <ListTodo  className="w-12 h-12" />,
      title: "Todo List Application",
      description:
        "Create, edit, complete, and delete tasks with rich details",
      technologies: ["React", "TypeScript", "Tailwind", "Lucide React", "Gradient Backgrounds ","Zustand",
      "Ant Design", ],
      gradient: "from-yellow-500 to-orange-600",
      demoLink: "https://main.dqmslwbl1hzzb.amplifyapp.com/",
      githubLink: "https://github.com/TamarCoder/ToDo-App-",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Recent tasks/projects completed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white`}
              >
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-medium rounded-full hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 transition-all duration-200">
            See all projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
