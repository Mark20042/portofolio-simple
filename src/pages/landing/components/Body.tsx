import About from "./Cards/About";
import TechStack from "./Cards/TechStack";
import Experience from "./Cards/Experience";

const Body = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-6">
      <div className="w-full md:w-[57%]">
        <About />
        <TechStack />
      </div>

      <div className="w-full md:w-[43%] flex flex-col">
        <Experience />
      </div>
    </div>
  );
};

export default Body;
