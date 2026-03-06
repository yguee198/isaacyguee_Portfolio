import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  MessageSquare,
  Github
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    <section
      id="Contact"
      className="bg-[#0f0f0f] text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Contact Me
          </h1>
          <p className="text-gray-500 mt-2">
            Have a project or opportunity? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20">

          {/* Contact Info */}
          <div className="space-y-8 text-gray-300">

            <div className="flex items-center gap-4">
              <Mail className="text-gray-400" size={20} />
              <p className="text-gray-300">ygueeisaac@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-gray-400" size={20} />
              <p className="text-gray-300">0796918970</p>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-gray-400" size={20} />
              <p className="text-gray-300">Kigali, Rwanda</p>
            </div>

            {/* Socials */}
            <div className="flex gap-6 pt-6">

              <a
                href="https://instagram.com/ygueeisaac"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition duration-300"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://linkedin.com/in/yguee"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition duration-300"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://wa.me/250781897528"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition duration-300"
              >
                <MessageSquare size={20} />
              </a>

              <a
                href="https://github.com/yguee198"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-white hover:text-black transition duration-300"
              >
                <Github size={20} />
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 space-y-8 shadow-xl"
          >

            {/* Name */}
            <div>
              <p className="text-sm text-gray-500 mb-4">
                Name
              </p>

              <div className="flex flex-col md:flex-row gap-6">
                <input
                  required
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 focus:border-white focus:outline-none transition"
                />

                <input
                  required
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 focus:border-white focus:outline-none transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <p className="text-sm text-gray-500 mb-4">
                Email
              </p>

              <input
                required
                type="email"
                name="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 focus:border-white focus:outline-none transition"
              />
            </div>

            {/* Message */}
            <div>
              <p className="text-sm text-gray-500 mb-4">
                Message
              </p>

              <textarea
                required
                name="message"
                rows="4"
                placeholder="Write your message..."
                value={form.message}
                onChange={handleChange}
                className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 focus:border-white focus:outline-none transition resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full md:w-auto bg-white text-black px-10 py-3 rounded-full font-semibold tracking-wide hover:bg-gray-200 transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;