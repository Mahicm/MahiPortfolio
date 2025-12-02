import React, { useState, useRef, useEffect } from "react";
import { PERSONAL_INFO } from "../constants.js";
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  X,
  CircleCheckBig,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMail = (e) => {
    setLoading(true);
    console.log("Called inside");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aps4zhn",
        "template_70w7ebt",
        form.current,
        "6FpzhV267I_vh7bKp"
      )
      .then(
        (result) => {
          console.log("Called Pass--------->", result.text);
          setMessage("Message Sent Successfully!");
          setLoading(false);
          e.target.reset();
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
          
        },
        (error) => {
          console.log("Called Fail--------->", error.text);
          setMessage("Something went wrong. Please try again.");
          setLoading(false);
          e.target.reset();
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        }
      );
  };

  return (
    <footer id="contact" className="bg-zinc-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
          {showToast && (
          <div 
            className="fixed top-[70px] right-[40px] flex items-center w-full max-w-md p-3 mb-8 text-white bg-gray-500 rounded-lg border border-zinc-700 shadow-lg animate-slide-in-right"
            role="alert"
          >
            <div className="w-7 h-7 flex items-center justify-center bg-zinc-700 rounded-full">
              {message.includes("Successfully") ? (
                <CircleCheckBig className="text-green-400" />
              ) : (
                <X className="text-red-400" />
              )}
            </div>

            <div className="ml-3 text-md font-medium font-bold">{message}</div>

            <button
              onClick={() => setMessage("")}
              className="ml-auto text-black-400 hover:text-white"
            >
              <X />
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Let's work together.</h2>
            <p className="text-zinc-400 mb-8 max-w-md leading-relaxed">
              I'm actively looking for new opportunities. Feel free to reach out
              — I usually respond within a few hours.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center text-zinc-300">
                <Mail className="w-5 h-5 mr-3 text-zinc-500" />
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center text-zinc-300">
                <MapPin className="w-5 h-5 mr-3 text-zinc-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
              >
                <Github size={20} />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700">
            {/* <form className="space-y-4" target="_blank" action="https://formsubmit.co/mahichinu02@gmail.com" method="POST"> */}
            <form ref={form} onSubmit={sendMail} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors"
                  placeholder="youremail@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-zinc-900 font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        

        <div className="border-t border-zinc-800 mt-20 pt-8 text-center text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
