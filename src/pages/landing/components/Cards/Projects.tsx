import { projects } from "../../../../data/projects";

const Projects = () => {
  return (
    <div className="bg-white dark:bg-[#121212] rounded-lg p-4 sm:p-5 mt-4 md:mt-6 h-full transition-colors duration-300">
      <h2 className="text-lg sm:text-xl font-bold mb-3 md:mb-4 text-gray-700 dark:text-gray-100 flex items-center">
        Recent Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 md:gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-100 dark:border-gray-700 rounded-lg p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 bg-gray-100 dark:bg-[#2A2A2A] duration-300 cursor-pointer flex flex-col h-full justify-between"
          >
            <div>
              <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-1.5">
                {project.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 text-[11px] leading-snug mb-3">
                {project.description}
              </p>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:underline text-[10px] bg-slate-200 dark:bg-gray-700 px-2 py-1 rounded-full w-fit max-w-full truncate block"
            >
              {project.link.replace(/^https?:\/\//, "")}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
