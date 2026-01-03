import { BriefcaseBusiness } from "lucide-react";

import { experienceList } from "../../data/experience";

const Experience = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6 h-full">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6 text-gray-700 flex items-center">
        <BriefcaseBusiness className="mt-1 mr-2" size={22} />
        Experience
      </h2>

      {/* Timeline Container */}
      <div className="ml-2">
        {experienceList.map((item, index) => (
          <div key={index} className="relative pl-8 pb-8 last:pb-0">
            {/* The Vertical Line */}
            {index !== experienceList.length - 1 && (
              <div className="absolute left-1.75 top-2 h-full w-0.5 bg-gray-200"></div>
            )}

            {/* The Dot (Circle) */}
            <div
              className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 ${
                item.current
                  ? "bg-gray-800 border-gray-800"
                  : "bg-white border-gray-300"
              }`}
            ></div>

            {/* 4. The Content */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div>
                <h3 className="font-bold text-gray-800 text-md">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{item.description}</p>
              </div>
              <span className="text-gray-400 text-sm font-medium mt-1 sm:mt-0">
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
