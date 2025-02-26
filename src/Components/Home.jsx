import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-screen">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center p-6 bg-gray-900 bg-opacity-90 backdrop-blur-lg fixed w-full top-0 z-50"
      >
        <h1 className="text-3xl font-bold tracking-wide text-[#FFD700]">UnivConnect</h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-400 transition">Home</a>
          <a href="#" className="hover:text-gray-400 transition">Features</a>
          <a href="#" className="hover:text-gray-400 transition">Contact</a>
          <button className="bg-[#4A90E2] text-white px-5 py-2 rounded-lg hover:bg-[#357ABD] transition">
            Sign In
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold leading-tight text-[#FFD700]"
        >
          Empowering University Collaboration
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg text-gray-300 max-w-2xl"
        >
          Engage with students, faculty, and alumni seamlessly. Stay updated with real-time events, schedules, and discussions.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="mt-6 bg-[#4A90E2] hover:bg-[#357ABD] px-8 py-3 rounded-lg text-lg font-semibold transition"
        >
          Get Started
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-[#FFD700]"
        >
          Key Features
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[
            { title: "Discussion Forums", desc: "Engage in structured academic discussions with students and faculty." },
            { title: "Real-time Notifications", desc: "Never miss an update on university events and schedules." },
            { title: "Club Management", desc: "Join and manage student clubs, events, and discussions." },
            { title: "Alumni Network", desc: "Connect with alumni for mentorship, networking, and career growth." },
            { title: "AI Chatbot", desc: "Get instant responses for academic queries and schedules." },
            { title: "Job & Internship Portal", desc: "Discover new career and internship opportunities." },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 bg-gray-700 bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-[#FFD700]">{feature.title}</h3>
              <p className="mt-2 text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-6 text-center bg-gray-800"
      >
        <p className="text-gray-400">&copy; 2025 UnivConnect. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default Home;
