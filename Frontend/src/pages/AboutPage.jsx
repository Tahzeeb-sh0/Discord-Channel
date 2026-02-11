import React from "react";
import ElectricBorder from "../components/About/Card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const rooms = [
  { country: "India", status: "Room is Active" },
  { country: "USA", status: "Room is Active" },
  { country: "Germany", status: "Room is Active" },
  { country: "Japan", status: "Room is Active" },
];

const AboutPage = () => {
  return (
    <div className="h-screen bg-black flex items-center justify-center px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <ElectricBorder
              color="#fff"
              speed={1}
              chaos={0.12}
              thickness={2}
              style={{ borderRadius: 10 }}
            >
              <div className="bg-black/60 backdrop-blur-md rounded-2xl h-full flex flex-col justify-between">
                
                {/* Content */}
                <div className="p-6 space-y-3 text-center">
                  <span className="inline-block px-4 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-xs tracking-wide">
                    🌍 {room.country}
                  </span>

                  <h2 className="text-white font-bold text-xl">
                    {room.status}
                  </h2>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    An electric border for shocking your users — the right way.
                  </p>
                </div>

                {/* CTA */}
                <div className="pb-6 flex justify-center">
                  <Link
                    to="/contact"
                    className="group relative px-6 py-2.5 border border-cyan-300/60
                               text-cyan-300 rounded-full font-medium text-sm
                               tracking-wide overflow-hidden
                               transition-all duration-500
                               hover:text-black"
                  >
                    <span className="absolute inset-0 bg-cyan-300 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Join Room
                      <span className="opacity-70 group-hover:opacity-100 transition">
                        →
                      </span>
                    </span>
                  </Link>
                </div>

              </div>
            </ElectricBorder>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default AboutPage;
