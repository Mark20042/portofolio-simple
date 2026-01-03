import { TechStacks } from "../../data/techstack";
import { FlaskConical } from "lucide-react";
const TechStack = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-700 flex items-center">
        <FlaskConical className="mt-1 mr-2" size={22} />
        Tech Stack
      </h1>
      <div className="flex flex-col gap-5">
        {TechStacks.map((category, index) => (
          <div key={index}>
            <h3 className="text-md font-bold text-gray-600 uppercase tracking-wider mb-4">
              {category.title}
            </h3>

            {category.skills.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold mr-3 mb-3 px-3 py-2 shadow  rounded-md"
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
