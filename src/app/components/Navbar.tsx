// src/app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white backdrop-blur-sm border-b border-black/10 z-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-black font-medium transition-all duration-300 hover:text-black
                  before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-[1.5px]
                  before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-black" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-black" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 text-black font-medium transition-all duration-300 hover:text-black
                        relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-[1.5px]
                        before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
