import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button";

// NAVIO Navbar
// - Left: Brand text "NAVIO" in neon color
// - Center/Right: Nav links
// - Right: Login/Sign Up buttons
export default function Navbar() {
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Devices", href: "/devices" },
    { label: "Alerts", href: "/alerts" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 bg-navio-dark/90 backdrop-blur supports-[backdrop-filter]:backdrop-blur shadow-lg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center">
            <img
              src="/navio-icon.svg"
              alt="NAVIO Logo"
              className="h-8 w-8 mr-2"
            />
            <span className="font-extrabold tracking-wider text-navio-cream text-lg">NAVIO</span>
          </Link>

          {/* Links - hidden on mobile */}
          <div className="hidden md:flex items-center gap-6 text-white">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.href}
                className="text-sm font-semibold text-navio-cream/90 hover:text-navio-light-blue transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Actions - hidden on mobile */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button type="secondary">Login</Button>
            </Link>
            <Link to="/signup">
              <Button type="primary">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile placeholder (hamburger could be added later) */}
          <div className="md:hidden" aria-hidden>
            <div className="h-6 w-6 rounded bg-navio-cream/10 ring-1 ring-navio-cream/15" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

