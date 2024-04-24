import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="text-white">
      <div className="mt-10 xl:flex xl:w-full">
        <Profile />
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default App;
