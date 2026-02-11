import React from "react";
import Hyperspeed from "./GridScan";
import { motion } from 'framer-motion';
import AboutPage from "./AboutPage";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
    <div className="relative grow h-full">
      {/* GridScan as background - fills the main content area only */}
      <div className="absolute inset-0 bg-black  h-full">
        <Hyperspeed
          effectOptions={{
            distortion: "turbulentDistortion",
            length: 800,
            roadWidth: 100,
            islandWidth: 1,
            lanesPerRoad: 1,
            fov: 100,
            fovSpeedUp: 1500,
            speedUp: 100,
            carLightsFade: 0.3,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [2, 0.9],
            lightStickHeight: [1.6, 1.9],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [80, 110],
            carLightsRadius: [0.08, 0.16],
            carWidthPercentage: [0.4, 0.8],
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

<div className="relative z-10 flex flex-col items-center justify-center h-screen min-h-[calc(100vh)] gap-6">

  <h1 className="text-4xl font-bold text-white">Welcome to ChatRoom</h1>
  
  <div className="flex gap-4">
    {/* Create Room Button */}
     <Link to="/in">
            <button className="group relative px-6 sm:px-8 py-2.5 sm:py-3 border border-white text-white rounded-full font-medium text-sm sm:text-[15px] tracking-wide overflow-hidden transition-all duration-500 hover:text-black">
              <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-all duration-500 ease-out"></span>
              <span className="relative z-10">Create Room</span>
            </button>
          </Link>
     
    {/* Start Room Button */}
      <Link to="/in">
            <button className="group relative px-6 sm:px-8 py-2.5 sm:py-3 border border-white text-black rounded-full font-medium text-sm sm:text-[15px] tracking-wide overflow-hidden transition-all duration-500 hover:text-black">
              <span className="absolute inset-0 bg-[#fff] "></span>
              <span className="relative z-10">Start Room</span>
            </button>
      </Link>
  </div>
</div>
    </div>

    <AboutPage/>
    </>

  );
}

export default HomePage;
