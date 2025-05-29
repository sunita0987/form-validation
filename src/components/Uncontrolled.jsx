import React, { useRef } from "react";

function Uncontrolled() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const addressRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`your name: ${nameRef.current.value}`);
  };
  return (
    <div className="flex flex-col gap-4 w-1/2 mx-auto mt-10  p-10 rounded-lg shadow-lg bg-fuchsia-600">
      <h2 className="text-2xl font-bold text-green-950 text-center">
        Uncontrolled Component
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          ref={nameRef}
          placeholder="Enter your name"
          className="border-2 border-black rounded-md p-2"
        />
        <input
          type="text"
          ref={emailRef}
          placeholder="Enter your email"
          className="border-2 border-black rounded-md p-2"
        />
        <input
          type="text"
          ref={passwordRef}
          placeholder="Enter your password"
          className="border-2 border-black rounded-md p-2"
        />
        <input
          type="text"
          ref={addressRef}
          placeholder="Enter your address"
          className="border-2 border-black rounded-md p-2"
        />
        <button
          type="submit"
          className=" w-20 h-10 rounded-2xl bg-blue-500 text-white text-xl cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Uncontrolled;
