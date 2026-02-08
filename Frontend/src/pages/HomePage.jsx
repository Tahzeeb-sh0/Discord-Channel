import React from "react";
import Hyperspeed from "./GridScan";
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <div className="relative flex-grow h-full">
      {/* GridScan as background - fills the main content area only */}
      <div className="absolute inset-0 bg-black overflow-hidden h-full">
        <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 90,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 4,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [12, 80],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 526344,
              islandColor: 657930,
              background: 0,
              shoulderLines: 1250072,
              brokenLines: 1250072,
              leftCars: [14177983, 6770850, 12732332],
              rightCars: [242627, 941733, 3294549],
              sticks: 242627,
            },
          }}
        />
      </div>

<div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[calc(100vh)] gap-6">
  <h1 className="text-4xl font-bold text-white">Welcome to ChatRoom</h1>
  
  <div className="flex gap-4">
    {/* Create Room Button */}
    <motion.button
      className="group flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span>Create Room</span>
    </motion.button>
    
    {/* Start Room Button */}
    <motion.button
  
      className="group flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <span>Start Room</span>
    </motion.button>
  </div>
</div>
    </div>
  );
}

export default HomePage;
