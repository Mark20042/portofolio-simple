import { experienceList } from "../../../../data/experience";

const Experience = () => {
  return (
    <div className="bg-white dark:bg-[#121212] rounded-lg p-4 sm:p-6 mt-6 h-full transition-colors duration-300">
      <h2 className="text-lg sm:text-xl font-bold mb-6 text-gray-700 dark:text-gray-100 flex items-center">
        Experience
      </h2>

      <div className="ml-2">
        {experienceList.map((item, index) => (
          <div key={index} className="relative pl-8 pb-8 last:pb-0">
            {index !== experienceList.length - 1 && (
              <div className="absolute left-1.75 top-2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
            )}

            <div
              className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 ${
                item.current
                  ? "bg-gray-800 border-gray-800 dark:bg-gray-200 dark:border-gray-200"
                  : "bg-white border-gray-300 dark:bg-[#1C1C1C] dark:border-gray-600"
              }`}
            ></div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h3 className="font-bold text-gray-800 dark:text-gray-100 text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                  {item.description}
                </p>
              </div>
              <span className="text-gray-400 dark:text-gray-500 text-xs font-medium mt-1 sm:mt-0">
                {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
