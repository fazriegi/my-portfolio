import Profile from "./components/Profile";
import PortfolioAdmin from "./components/PortfolioAdmin";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [modal, setModal] = useState(false);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigate("/login");
    }

    setToken(token);
  }, []);

  return (
    <div className="text-white w-full">
      <div className="flex flex-col xl:flex-row xl:min-h-[90vh] xl:w-full xl:px-6">
        <Profile modal={modal} />
        <PortfolioAdmin modal={modal} setModal={setModal} />
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
