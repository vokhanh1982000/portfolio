"use client";
import { FacebookFilled, MailFilled, PhoneFilled } from "@ant-design/icons";
import Image from "next/image";
import React from "react";
import githubIcon from "/public/images/github.png";

const contacts = [
  {
    title: "gmail",
    icons: <MailFilled className="text-red-400 text-3xl" />,
    value: "vokhanh1982000@gmail.com",
    href: "mailto:vokhanh1982000@gmail.com"
  },
  {
    title: "phone",
    icons: <PhoneFilled className="text-green-400 text-3xl" />,
    value: "0359812581",
    href: "tel:0359812581"
  },
  {
    title: "facebook",
    icons: <FacebookFilled className="text-blue-600 text-3xl" />,
    value: "Khanh Minh Vo",
    href: "https://www.facebook.com/minhkhanh2000"
  },
  {
    title: "github",
    icons: <Image src={githubIcon} alt="Github Icon" width={30} height={30} className="bg-white rounded-full" />,
    value: "vokhanh1982000",
    href: "https://github.com/vokhanh1982000"
  },
];

const Contact = () => {
  return (
    <div id="contact" className="text-white pb-12">
      <div className="flex items-center my-16">
        <div className="flex-grow border-t border-gray-600"></div>
        <h2 className="px-10 text-center text-4xl font-bold text-white">
          Contact Me
        </h2>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        {/* Left Column: Contact Cards */}
        <div className="flex flex-col gap-6">
          <p className="text-gray-300 text-lg mb-4">
            I&apos;m currently looking for new opportunities. My inbox is always open.
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((contact, index) => (
              <div 
                key={index}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-[#121212]/50 border border-white/10 transition-colors duration-300 shadow-lg group"
              >
                <div className="p-3 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                  {contact.icons}
                </div>
                <p className="text-sm font-medium text-gray-300 truncate w-full text-center group-hover:text-white">{contact.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full">
          <form 
            action="mailto:vokhanh1982000@gmail.com"
            method="post"
            encType="text/plain"
            className="flex flex-col gap-4 p-8 rounded-2xl bg-[#121212]/50 border border-white/10 shadow-2xl backdrop-blur-sm"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
              <input 
                type="text" 
                id="name"
                name="Name"
                placeholder="John Doe"
                required
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder-gray-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
              <input 
                type="email" 
                id="email"
                name="Email"
                placeholder="john@example.com"
                required
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder-gray-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                id="message"
                name="Message"
                rows="4"
                placeholder="Let's talk about..."
                required
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder-gray-500 resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="mt-4 px-6 py-3 w-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-bold transition-transform hover:scale-[1.02] active:scale-95 shadow-lg"
            >
              Send mail
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
