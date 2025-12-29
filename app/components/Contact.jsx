"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message Sent Successfully!");
        setForm({ email: "", name: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error sending message.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-8 bg-gradient-to-b from-[#2e0f3a] via-[#4a154b] to-[#0a0a23] text-white"
      style={{ scrollMarginTop: "80px" }}
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
        📬 Contact
      </h1>
      <p className="text-gray-400 mb-6 text-center text-sm sm:text-base max-w-md">
     Let’s connect and Collaborate..
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-[#111132] p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
          Connect With Me 🚀
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 p-3 rounded bg-[#1c1c3b] text-white outline-none"
          required
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-3 p-3 rounded bg-[#1c1c3b] text-white outline-none"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full mb-3 p-3 rounded bg-[#1c1c3b] text-white outline-none"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full mb-3 p-3 rounded bg-[#1c1c3b] text-white outline-none h-28"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:opacity-90 transition"
        >
          Send
        </button>
      </form>

      {status && <p className="mt-4 text-center">{status}</p>}
    </section>
  );
}
