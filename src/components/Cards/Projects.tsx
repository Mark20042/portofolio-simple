import { projects } from "../../data/projects";
import { Layers } from "lucide-react";
const Projects = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 h-full">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">
        <Layers className="inline mb-1 mr-2" size={22} />
        Recent Projects
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow bg-gray-100 duration-300 cursor-pointer"
          >
            <h3 className="text-md font-bold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:underline text-xs bg-slate-200 px-2 py-1 rounded-full"
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
