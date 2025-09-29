import React, { useState, useContext } from "react";
import UserContext from "./../context/UserContext";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({name, password})
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
  <div className="flex flex-col items-center gap-3 border border-gray-500 rounded-3xl p-8 w-96 bg-white">
    <h2 className="text-3xl italic">Login</h2>
    <input
      className="border-2 border-gray-300 px-4 py-2 rounded-3xl mt-6 w-full"
      type="text"
      placeholder="username"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input
      className="border-2 border-gray-300 px-4 py-2 rounded-3xl mt-3 w-full"
      type="password"
      placeholder="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <button
      className="border-2 border-gray-300 px-3 py-2 rounded-3xl mt-3 mb-3 bg-cyan-700 hover:bg-cyan-900 text-white w-full"
      onClick={handleSubmit}
    >
      Submit
    </button>
  </div>
</div>

  );
}

export default Login;
