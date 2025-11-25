import { motion } from "framer-motion";
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input changes
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Submit form
  async function sendMessage(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(
        "https://kyawmgmglwin.site:3000/api/v1/mail/send-mail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" }); // clear form
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <motion.section
      id="contact"
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>

      <form
        onSubmit={sendMessage}
        className="card max-w-2xl mx-auto text-center space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          className="w-full border p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
        ></textarea>

        <button
          type="submit"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors"
        >
          Send Message
        </button>

        {/* STATUS MESSAGES */}
        {status === "sending" && (
          <p className="text-yellow-500">Sending...</p>
        )}
        {status === "success" && (
          <p className="text-green-500">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-500">Failed to send message.</p>
        )}
      </form>

      <div className="flex justify-center space-x-6 mt-8">
        <a
          href="https://github.com/kyawmgmglwin2004"
          target="_blank"
          className="text-2xl hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          className="text-2xl hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          LinkedIn
        </a>
      </div>
    </motion.section>
  );
};

export default Contact;
