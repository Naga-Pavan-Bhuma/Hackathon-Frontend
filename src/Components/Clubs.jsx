import React from "react";
import { motion } from "framer-motion";
const clubsData = [
  {
    name: "SRC",
    description: "Explore AI, blockchain, and latest tech trends.",
    members: "250+ Members",
    image: "https://source.unsplash.com/300x200/?technology,ai",
  },
  {
    name: "Tech Innovators",
    description: "Engage in intellectual discussions and competitions.",
    members: "180+ Members",
    image: "https://source.unsplash.com/300x200/?debate,conference",
  },
  {
    name: "Photography Club",
    description: "Capture moments and learn professional photography.",
    members: "200+ Members",
    image: "https://source.unsplash.com/300x200/?photography,camera",
  },
  {
    name: "Sports Club",
    description: "Participate in university-level tournaments and training.",
    members: "300+ Members",
    image: "https://source.unsplash.com/300x200/?sports,stadium",
  },
  {
    name: "Drama & Theatre",
    description: "Showcase acting skills in annual theatre events.",
    members: "150+ Members",
    image: "https://source.unsplash.com/300x200/?theatre,drama",
  },
  {
    name: "Music & Dance",
    description: "Join the rhythm and express yourself through art.",
    members: "220+ Members",
    image: "https://source.unsplash.com/300x200/?music,dance",
  },
];

const Clubs = () => {
  return (
    <div className="py-20 bg-gray-900 text-white">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-[#FFD700] mb-10"
      >
        University Clubs
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {clubsData.map((club, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg transition-all cursor-pointer"
          >
            <img src={club.image} alt={club.name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-[#FFD700]">{club.name}</h3>
              <p className="mt-2 text-gray-300">{club.description}</p>
              <p className="mt-2 text-sm text-gray-400">{club.members}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;
