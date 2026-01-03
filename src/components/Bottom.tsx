import Projects from "./Cards/Projects";
import Certificates from "./Cards/Certificates";
const Bottom = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-6 ">
      <div className="w-full md:w-[55%] flex flex-col">
        <Projects />
      </div>

      <div className="w-full md:w-[45%] flex flex-col">
        <Certificates />
      </div>
    </div>
  );
};

export default Bottom;
