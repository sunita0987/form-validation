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
      className="space-y-4 p-4 bg-sky-600 shadow-md max-w-md mx-auto rounded-xl mb-20"
    >
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full border p-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full border p-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        className="w-full border p-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
      <button
        type="submit"
        className="bg-fuchsia-700 text-white px-7 py-2 rounded-3xl cursor-pointer hover:bg-fuchsia-500 transition duration-300 hover:text-black font-bold shadow-lg"
      >
        Send
      </button>
    </form>
  );
};
export default Email;
