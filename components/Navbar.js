"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // X icon for closing menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest(".nav-container")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-[#0A192F] border-b border-gray-800 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4 nav-container">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src="/Logo.png" alt="Survivor Steps" className="h-16 sm:h-20" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <a href="/find-help" className="text-white hover:text-[#00F5A0]">Find Help</a>
          <a href="/support" className="text-white hover:text-[#00F5A0]">Support & Resources</a>
          <a href="/learning" className="text-white hover:text-[#00F5A0]">Learning</a>
          <a href="/Report" className="text-white hover:text-[#00F5A0]">Report</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden flex flex-col bg-[#0A192F] px-4 py-4 space-y-3 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
        <a href="/find-help" className="text-white hover:text-[#00F5A0]">Find Help</a>
        <a href="/support" className="text-white hover:text-[#00F5A0]">Support & Resources</a>
        <a href="/learning" className="text-white hover:text-[#00F5A0]">Learning</a>
        <a href="/Report" className="text-white hover:text-[#00F5A0]">Report</a>
      </div>
    </nav>
  );
}

export default Navbar;
