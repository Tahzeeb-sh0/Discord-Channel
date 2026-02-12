import React, { useState, useEffect } from "react";
import Hyperspeed from "./GridScan";
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import AboutPage from "./AboutPage";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Zap, 
  Users, 
  Globe,
  ChevronDown,
  Play
} from "lucide-react";

function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Smooth spring animation
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const stats = [
    { icon: Users, value: "2.4M+", label: "Active Users" },
    { icon: Shield, value: "100%", label: "Encrypted" },
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: Zap, value: "<50ms", label: "Latency" },
  ];

  return (
    <>
      {/* Main Hero Container */}
      <div className="relative min-h-screen bg-[#050505] overflow-hidden">
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <Hyperspeed
            effectOptions={{
              distortion: "turbulentDistortion",
              length: 500,
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

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505a4] via-transparent to-[#05050525] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight 
              }}
              animate={{ 
                y: [null, Math.random() * -100],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity }}
          className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white/60" />
              <span className="text-[10px] text-white/60 uppercase tracking-[0.2em]">Next-Gen Privacy</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-6"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[0.9]">
              <span className="block">Communicate</span>
              <span className="block mt-2 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Without Compromise
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/40 text-lg sm:text-xl max-w-2xl text-center mb-12 font-light leading-relaxed"
          >
            Military-grade encryption meets seamless design. 
            Create secure rooms in seconds, invite anyone, leave no trace.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            {/* Primary CTA */}
            <Link to="/in">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-white text-black rounded-full font-medium text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Create Room
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>

            {/* Secondary CTA */}
            <Link to="/demo">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 border border-white/20 text-white rounded-full font-medium text-sm tracking-wide overflow-hidden transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Watch Demo
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
                  <span className="text-2xl sm:text-3xl font-light text-white group-hover:text-white/90 transition-colors">
                    {stat.value}
                  </span>
                </div>
                <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white/20"
            >
              <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mouse Follow Glow */}
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          className="fixed top-1/2 left-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        />
      </div>

      {/* About Section */}
      <AboutPage />

      <style jsx>{`
        ::selection {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </>
  );
}

export default HomePage;