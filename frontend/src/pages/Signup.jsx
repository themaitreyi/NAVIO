import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

export default function Signup() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signup attempt with email: ${formData.email}`);
  };

  return (
    <div className="min-h-screen w-full bg-navio-dark text-navio-cream flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-navio-blue/20 p-8 rounded-2xl backdrop-blur-sm"
      >
        <header className="text-center space-y-2 mb-8">
          <h1 className="text-3xl font-extrabold tracking-wide">Join NAVIO</h1>
          <p className="text-navio-cream/60">Create your maritime navigation account</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-navio-dark border border-navio-cream/20 rounded-xl text-navio-cream placeholder-navio-cream/40 focus:outline-none focus:ring-2 focus:ring-navio-light-blue"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-navio-dark border border-navio-cream/20 rounded-xl text-navio-cream placeholder-navio-cream/40 focus:outline-none focus:ring-2 focus:ring-navio-light-blue"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-navio-dark border border-navio-cream/20 rounded-xl text-navio-cream placeholder-navio-cream/40 focus:outline-none focus:ring-2 focus:ring-navio-light-blue"
              placeholder="Create a password"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-navio-dark border border-navio-cream/20 rounded-xl text-navio-cream placeholder-navio-cream/40 focus:outline-none focus:ring-2 focus:ring-navio-light-blue"
              placeholder="Confirm your password"
              required
            />
          </div>

          <Button type="primary" onClick={handleSubmit} className="w-full">
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-navio-cream/60 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-navio-light-blue hover:underline">
              Sign in here
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}