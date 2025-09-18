"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navbarItems = [
  { name: "About", href: "#AboutUs" },
  { name: "Contact Us", href: "#ContactPage" },
  { name: "What We Do", href: "#WhatWeDo" },
  { name: "Services", href: "#Services" },
];

const NavItems = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop nav */}
      <div className="hidden md:flex gap-6">
        {navbarItems.map((nav, key) => (
          <Link
            key={key}
            href={nav.href}
            className="text-gray-800 hover:text-sky-600"
          >
            {nav.name}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <div className="absolute top-16 right-0 left-0 bg-white shadow-md flex flex-col items-center gap-6 py-6">
            {navbarItems.map((nav, key) => (
              <Link
                key={key}
                href={nav.href}
                className="text-gray-800 hover:text-sky-600 text-lg"
                onClick={() => setIsOpen(false)}
              >
                {nav.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavItems;
