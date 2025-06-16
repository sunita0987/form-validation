import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Email = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.error(error.text);
        }
      );
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="space-y-4 p-4 bg-emerald-700 shadow-md max-w-md mx-auto rounded"
    >
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full border p-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full border p-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="w-full border p-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition duration-300"
      >
        Send
      </button>
    </form>
  );
};
export default Email;

