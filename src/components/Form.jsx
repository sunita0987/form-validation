import { useState } from "react";
import React from "react";
function form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col gap-4 w-1/2 mx-auto mt-10  p-10 rounded-lg shadow-lg bg-teal-600"
      >
        <h1 className="text-3xl font-bold text-red-300 text-center mt-5 mb-5">
          Controlled Components
        </h1>
        <input
          type="text"
          className="border-2 border-black rounded-md p-2"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your E-mail"
          className="border-2 border-black rounded-md p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border-2 border-black rounded-md p-2"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          className="border-2 border-black rounded-md p-2"
          placeholder=" your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          type="submit"
          className=" w-20 h-10 rounded-2xl bg-blue-500 text-white text-xl cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          submit
        </button>
      </form>
    </div>
  );
}
export default form;
