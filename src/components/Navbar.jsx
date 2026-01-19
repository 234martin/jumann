import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://i.ibb.co/xSCJyRvj/Whats-App-Image-2026-01-15-at-09-56-31-removebg-preview-1.png"
            alt="JobConnect Logo"
            className="w-14 h-14 object-contain"
          />
          <span className="text-white font-bold text-xl"></span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-6">
          {["/", "/about", "/jobs", "/contact"].map((path) => {
            const label = path === "/" ? "Home" : path.replace("/", "").toUpperCase();
            const isActive = location.pathname === path;

            return (
              <Link
                key={path}
                to={path}
                className={`relative font-semibold transition ${
                  isActive ? "text-red-600" : "text-gray-300 hover:text-white"
                }`}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-2 w-full h-0.5 bg-red-600 rounded"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="md:hidden bg-black border-t border-gray-800"
        >
          <div className="flex flex-col gap-2 px-6 py-4">
            {["Home", "About", "Jobs", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="py-3 text-gray-300 hover:text-white font-semibold"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
