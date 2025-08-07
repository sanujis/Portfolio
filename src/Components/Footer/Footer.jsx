import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Use Gmail as the email client
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=sanujis1102@gmail.com&su=Contact from ${form.name}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    setSent(true);
  };

  return (
    <footer id="Footer" className="w-full bg-[#465697] text-white pt-10 pb-4 px-0 md:mt-10 scroll-mt-20">
      <div className="max-w-5xl mx-auto flex flex-col px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center tracking-wide">
          Contact Me
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Contact Info */}
          <div className="flex-1 mb-8 md:mb-0">
            <div className="text-lg md:text-2xl font-normal mb-4">
              Have a project in mind?
            </div>
            <p className="mb-4 text-sm md:text-base">
              Contact me today to discuss your ideas and requirements.
            </p>
            
            
          </div>
          {/* Contact Form */}
          <div className="flex-1 w-full max-w-md bg-white bg-opacity-10 rounded-xl p-6 shadow-lg">
            <div className="text-lg font-semibold mb-4">Let's Chat</div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="rounded-lg px-4 py-2 text-black focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={handleChange}
                className="rounded-lg px-4 py-2 text-black focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={3}
                value={form.message}
                onChange={handleChange}
                className="rounded-lg px-4 py-2 text-black focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-[#465697] font-bold py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Send
              </button>
              {sent && (
                <span className="text-green-200 text-sm mt-2">Thank you! Gmail should open now.</span>
              )}
            </form>
          </div>
        </div>
        {/* Footer copyright */}
        <footer className="w-full text-center mt-8 font-semibold opacity-100 bg-[#465697] py-3">
  Made with ❤️ using <span className="font-semibold">React</span> & <span className="font-semibold">Tailwind CSS</span>
</footer>



      </div>
    </footer>
  );
};

export default Footer;