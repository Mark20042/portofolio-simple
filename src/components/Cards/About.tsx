import { BriefcaseBusiness } from "lucide-react";
import { About as AboutData } from "../../data/about";
const About = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700 flex items-center">
        <BriefcaseBusiness className="mt-1 mr-2" size={22} />
        {AboutData.title}
      </h2>

      <p className="text-gray-500 font-medium mb-4 leading-relaxed">
        {AboutData.paragraphs[0]}
      </p>

      <p className="text-gray-500 font-medium mb-4 leading-relaxed">
        {AboutData.paragraphs[1]}
      </p>

      <p className="text-gray-500 font-medium leading-relaxed">
        {AboutData.paragraphs[2]}
      </p>
    </div>
  );
};

export default About;
