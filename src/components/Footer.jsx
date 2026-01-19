import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-black border-t border-gray-800 mt-12"
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="text-white font-bold text-xl">JobConnect</div>
            <div className="text-gray-400 mt-1">
              Premium job agency connecting Africans to Canada & UK.
            </div>
          </div>

          <div className="flex gap-6">
            <a href="/jobs" className="text-gray-300 hover:text-white font-semibold">
              Jobs
            </a>
            <a href="/about" className="text-gray-300 hover:text-white font-semibold">
              About
            </a>
            <a href="/contact" className="text-gray-300 hover:text-white font-semibold">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} JobConnect. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}
