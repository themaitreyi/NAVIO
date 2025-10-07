import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login attempt with email: ${email}`);
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
          <h1 className="text-3xl font-extrabold tracking-wide">Welcome Back</h1>
          <p className="text-navio-cream/60">Sign in to your NAVIO account</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-navio-dark border border-navio-cream/20 rounded-xl text-navio-cream placeholder-navio-cream/40 focus:outline-none focus:ring-2 focus:ring-navio-light-blue"
              placeholder="Enter your password"
              required
            />
          </div>

          <Button type="primary" onClick={handleSubmit} className="w-full">
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-navio-cream/60 text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-navio-light-blue hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}