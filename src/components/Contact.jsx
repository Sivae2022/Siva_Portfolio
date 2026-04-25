import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contact_info = [
    { logo: "mail-outline", text: "elusiva007@gmail.com" },
    { logo: "logo-whatsapp", text: "+91 8608507236" },
    { logo: "location-outline", text: "Salem, Tamil Nadu" },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple mail redirect (no backend needed)
    const mailtoLink = `mailto:elusiva007@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message} (Email: ${form.email})`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        
        {/* Title */}
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">
          Let’s connect and build something amazing
        </p>

        {/* Container */}
        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-4 rounded-lg mx-auto">

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5">
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-cyan-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-cyan-600"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
              className="p-3 rounded bg-gray-700 outline-none focus:ring-2 focus:ring-cyan-600"
            ></textarea>

            <button
              type="submit"
              className="btn-primary w-fit hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-7 justify-center">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex items-center gap-4 text-left"
              >
                <div className="min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full text-2xl">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="text-sm md:text-base break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;