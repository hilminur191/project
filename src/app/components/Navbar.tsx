"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <div className="text-xl font-bold text-blue-600">H Nurbani</div>

        {/* Hamburger button (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white shadow md:static md:block md:w-auto md:bg-transparent md:shadow-none`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0 px-4 py-4 md:p-0">
            <a href="#about" className="text-gray-700 hover:text-blue-500">
              About
            </a>
            <a
              href="#contactform"
              className="text-gray-700 hover:text-blue-500"
            >
              Contact
            </a>
            <a href="#experience" className="text-gray-700 hover:text-blue-500">
              Experience
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-500">
              Portfolio
            </a>
            <a href="#skills" className="text-gray-700 hover:text-blue-500">
              Skills
            </a>
            <a href="#testimoni" className="text-gray-700 hover:text-blue-500">
              Testimonials
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
