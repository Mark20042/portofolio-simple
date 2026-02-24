import { TechStacks } from "../../../../data/techstack";

const TechStack = () => {
  return (
    <div className="bg-white dark:bg-[#121212] rounded-lg p-4 sm:p-6 mt-6 transition-colors duration-300">
      <h1 className="text-lg sm:text-xl font-bold mb-6 text-gray-700 dark:text-gray-100 flex items-center">
        Tech Stack
      </h1>
      <div className="flex flex-col gap-5">
        {TechStacks.map((category, index) => (
          <div key={index}>
            <h3 className="text-sm font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider mb-4">
              {category.title}
            </h3>

            {category.skills.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="inline-block bg-gray-100 dark:bg-[#2A2A2A] text-gray-800 dark:text-gray-200 text-[11px] font-semibold mr-2 mb-2 px-2.5 py-1.5 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
