import Header from "./components/Header";
import Body from "./components/Body";
import Bottom from "./components/Bottom";
import Gallery from "./components/Cards/Gallery";
import Footer from "./components/Footer";
const LandingPage = () => {
  return (
    <div className="max-w-220 mx-auto px-4 md:px-0">
      <Header />
      <Body />
      <Bottom />
      <Gallery />
      <Footer />
    </div>
  );
};

export default LandingPage;
