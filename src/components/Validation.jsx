import React, { useState } from "react";

function Validation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log(formData);
      setFormData({ name: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 w-1/2 mx-auto mt-10">
      <div>
        <h2 className="text-2xl font-bold text-green-800 text-center">Validation Form</h2>
        <p className="text-sm text-gray-500">Please fill in the form below:</p>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name" 
          className="border-2 border-black rounded-md p-2"
            placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          className="border-2 border-black rounded-md p-2"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <br />
        <input
          type="password"
          name="password"
            className="border-2 border-black rounded-md p-2"
            placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
       <button
          type="submit"
          className=" w-20 h-10 rounded-2xl bg-blue-500 text-white text-xl cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Submit
        </button>
    </form>
  );
}

export default Validation;
