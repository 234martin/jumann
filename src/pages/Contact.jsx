import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-400 mt-3">
            We respond within 24 hours. Send your inquiry and our team will assist you.
          </p>
        </div>

        {/* Main */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {/* Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>

            <form className="space-y-4">
              <input
                className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white"
                type="text"
                placeholder="Full Name"
              />

              <input
                className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white"
                type="email"
                placeholder="Email Address"
              />

              <input
                className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white"
                type="text"
                placeholder="Subject"
              />

              <textarea
                className="w-full p-4 rounded-2xl bg-gray-800 border border-gray-700 text-white"
                rows="5"
                placeholder="Your Message"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-red-700 hover:bg-red-800 transition font-bold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Socials */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>

            <p className="text-gray-400 mb-4">
              Use WhatsApp for fast response, or reach out on our social platforms.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/+1 (579) 900-7528"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-green-600 hover:bg-green-700 transition"
              >
                <div className="flex items-center gap-3">
                  <FaWhatsapp size={24} />
                  <div>
                    <div className="font-bold">WhatsApp Inquiry</div>
                    <div className="text-sm text-gray-200">Fast response within 24 hours</div>
                  </div>
                </div>
                <span className="text-white font-bold">Message</span>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 rounded-2xl bg-gray-800 border border-gray-700 hover:bg-gray-700 transition"
                >
                  <FaInstagram size={24} />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 rounded-2xl bg-gray-800 border border-gray-700 hover:bg-gray-700 transition"
                >
                  <FaFacebook size={24} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 rounded-2xl bg-gray-800 border border-gray-700 hover:bg-gray-700 transition"
                >
                  <FaLinkedin size={24} />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 rounded-2xl bg-gray-800 border border-gray-700 hover:bg-gray-700 transition"
                >
                  <FaTwitter size={24} />
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
