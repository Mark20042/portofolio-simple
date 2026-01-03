import Header from "./components/Header";
import Body from "./components/Body";
import Bottom from "./components/Bottom";
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans p-2 md:p-5">
      <div className="max-w-290 mx-auto">
        <Header />
        <Body />
        <Bottom />
      </div>
    </div>
  );
};

export default App;
