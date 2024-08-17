import { useState } from "react";
import CInput from "./components/Input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (username === "" && password == "") {
      return navigate("/admin");
    }

    alert("Wrong Username or Password");

    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex flex-col gap-10 mx-auto justify-center h-96 w-[40%] text-white">
      <form action="" className="flex flex-col justify-center gap-4">
        <CInput
          type="text"
          name="username"
          placeholder="Username"
          setState={setUsername}
          value={username}
        />
        <CInput
          type="password"
          name="password"
          placeholder="Password"
          setState={setPassword}
          value={password}
        />
      </form>
      <button className="border p-4 hover:bg-sky-800" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Login;
