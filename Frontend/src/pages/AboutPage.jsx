import React from "react";
import ElectricBorder from "../components/About/Card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Zap, 
  EyeOff, 
  Fingerprint, 
  Lock, 
  Radio, 
  Clock, 
  Globe,
  Crown,
  Sparkles,
  Server
} from "lucide-react";

const AboutPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Military-Grade Encryption",
      description: "AES-256 encryption with perfect forward secrecy. Your conversations are mathematically impossible to intercept.",
      stat: "256-bit",
      color: "from-amber-200 via-yellow-100 to-white",
      borderColor: "#fbbf24"
    },
    {
      icon: EyeOff,
      title: "Zero-Knowledge Architecture",
      description: "We can't read your messages. Even if compelled, we have no data to surrender. True privacy by design.",
      stat: "0 logs",
      color: "from-emerald-200 via-green-100 to-white",
      borderColor: "#34d399"
    },
    {
      icon: Fingerprint,
      title: "Anonymous Identity",
      description: "No phone numbers. No email addresses. No tracking. Just pure, untraceable communication.",
      stat: "100% anon",
      color: "from-cyan-200 via-blue-100 to-white",
      borderColor: "#22d3ee"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-50ms latency worldwide. Edge-deployed infrastructure ensures instant message delivery anywhere.",
      stat: "<50ms",
      color: "from-violet-200 via-purple-100 to-white",
      borderColor: "#a78bfa"
    },
    {
      icon: Clock,
      title: "Ephemeral by Default",
      description: "Messages auto-vanish after 24 hours. Leave no trace. No history. No evidence. Ever.",
      stat: "24h",
      color: "from-rose-200 via-pink-100 to-white",
      borderColor: "#fb7185"
    },
    {
      icon: Radio,
      title: "Decentralized Network",
      description: "No single point of failure. Distributed across 50+ global nodes for maximum resilience.",
      stat: "50+ nodes",
      color: "from-orange-200 via-amber-100 to-white",
      borderColor: "#fb923c"
    },
    {
      icon: Lock,
      title: "End-to-End Sealed",
      description: "Keys generated on your device. Only recipients can decrypt. Not even our servers see plaintext.",
      stat: "E2E sealed",
      color: "from-indigo-200 via-blue-100 to-white",
      borderColor: "#818cf8"
    },
    {
      icon: Crown,
      title: "Premium Experience",
      description: "No ads. No tracking. No data mining. Just pure, uninterrupted communication for discerning users.",
      stat: "Ad-free",
      color: "from-neutral-200 via-gray-100 to-white",
      borderColor: "#e5e5e5"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden selection:bg-white/10 selection:text-white">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-white/[0.01] rounded-full blur-[200px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/[0.02] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-20 lg:py-32">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-white/60" />
            <span className="text-[10px] text-white/50 uppercase tracking-widest">Why Choose ChatSonnet</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-light text-white mb-6 tracking-tight">
            The Art of <span className="font-medium">Private Communication</span>
          </h1>
          <p className="text-white/40 text-lg font-light leading-relaxed">
            Engineered for those who refuse to compromise on privacy. 
            Every feature designed with security as the foundation, not an afterthought.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ElectricBorder
                color={feature.borderColor}
                speed={1.5}
                chaos={0.08}
                thickness={1.5}
                style={{ borderRadius: 16 }}
              >
                <div className="bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl p-6 h-full min-h-[320px] flex flex-col group hover:bg-[#0a0a0a]/90 transition-colors duration-500">
                  
                  {/* Icon & Stat */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-[1px]`}>
                      <div className="w-full h-full bg-[#0a0a0a] rounded-[11px] flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-white/80" />
                      </div>
                    </div>
                    <span className="text-[10px] font-medium text-white/30 uppercase tracking-wider border border-white/10 px-2 py-1 rounded-full">
                      {feature.stat}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-lg mb-3 group-hover:text-white/90 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/50 transition-colors">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors" />
                      <span className="text-[10px] text-white/30 uppercase tracking-wider">Active</span>
                    </div>
                    <Link
                      to="/learn-more"
                      className="text-[10px] text-white/40 hover:text-white/80 uppercase tracking-wider transition-colors flex items-center gap-1 group/link"
                    >
                      Learn more 
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>

                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 bg-white/[0.02] border border-white/[0.06] rounded-2xl backdrop-blur-sm">
            <Link
              to="/in"
              className="group relative px-8 py-4 bg-white text-black rounded-xl font-medium text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
            >
              <span className="relative z-10 flex items-center gap-2">
                Create Your Room
                <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </span>
            </Link>
            <Link
              to="/in/pricing"
              className="px-8 py-4 text-white/60 hover:text-white font-medium text-sm tracking-wide transition-colors flex items-center gap-2"
            >
              View Pricing
              <span className="opacity-50">→</span>
            </Link>
          </div>
          
          <p className="mt-6 text-[10px] text-white/20 uppercase tracking-widest">
            Trusted by 2.4M+ privacy-conscious users worldwide
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        ::selection {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default AboutPage;