import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Clubs = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/clubs`) // Replace with your API URL
      .then((response) => {
        setClubs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching clubs:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-screen">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold text-center text-[#FFD700] mb-12 tracking-wide"
      >
        University Clubs
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-700 animate-pulse rounded-2xl h-64"
              ></div>
            ))
          : clubs.map((club, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg transition-all cursor-pointer transform hover:shadow-2xl"
              >
                <img
                  src={club.imageUrl}
                  alt={club.clubName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-semibold text-[#FFD700]">
                    {club.clubName}
                  </h3>
                  <p className="mt-2 text-gray-300">
                    {club.facultyAdvisors.length > 0
                      ? `Advised by ${club.facultyAdvisors.join(", ")}`
                      : "No faculty advisor listed."}
                  </p>
                  <p className="mt-2 text-gray-400 text-sm">
                    {club.members.length} Members
                  </p>
                </div>
              </motion.div>
            ))}
      </div>
    </div>
  );
};

export default Clubs;
