import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="text-white w-full">
      <div className="flex flex-col xl:flex-row xl:min-h-[90vh] xl:w-full xl:px-6">
        <Profile />
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};


export default App;
