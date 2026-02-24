
import { About as AboutData } from "../../../../data/about";
const About = () => {
  return (
    <div className="bg-white dark:bg-[#121212] rounded-lg p-4 sm:p-6 mt-6 transition-colors duration-300">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-700 dark:text-gray-100 flex items-center">
        {AboutData.title}
      </h2>

      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 leading-relaxed">
        {AboutData.paragraphs[0]}
      </p>

      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4 leading-relaxed">
        {AboutData.paragraphs[1]}
      </p>

      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">
        {AboutData.paragraphs[2]}
      </p>
    </div>
  );
};

export default About;
