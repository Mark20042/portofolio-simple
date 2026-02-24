import Header from "./components/Header";
import Body from "./components/Body";
import Bottom from "./components/Bottom";
const LandingPage = () => {
  return (
    <div className="max-w-220 mx-auto px-4 md:px-0">
      <Header />
      <Body />
      <Bottom />
    </div>
  );
};

export default LandingPage;
