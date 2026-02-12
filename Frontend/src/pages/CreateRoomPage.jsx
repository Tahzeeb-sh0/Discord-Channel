import React, { useState } from "react";
import { 
  Sparkles, 
  Copy, 
  Shuffle, 
  ArrowRight, 
  Lock, 
  Globe, 
  Shield, 
  EyeOff, 
  MessageCircle, 
  Zap,
  Users,
  Clock,
  Crown,
  Fingerprint,
  Radio
} from "lucide-react";
import { monotonicFactory } from "ulid";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const CreateRoomPage = () => {
  const [roomName, setRoomName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [isPrivate, setIsPrivate] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const generateMonotonic = monotonicFactory();

  const generateRoomId = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const randomId = generateMonotonic();
      setRoomId(randomId);
      setIsGenerating(false);
    }, 400);
  };

  const copyRoomId = () => {
    if (!roomId.trim()) {
      toast.error("No Room ID to copy!");
      return;
    }

    navigator.clipboard
      .writeText(roomId)
      .then(() => {
        toast.success("Room ID copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy Room ID.");
        console.error("Clipboard error:", err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating room:", { roomName, roomId, isPrivate });
    toast.success("Room created successfully!");
  };

  const features = [
    {
      icon: Fingerprint,
      title: "Anonymous Identity",
      description: "No phone, no email, no tracking. Pure anonymity.",
      gradient: "from-neutral-400 via-neutral-200 to-white",
    },
    {
      icon: Shield,
      title: "Military-Grade Encryption",
      description: "AES-256 encryption with perfect forward secrecy.",
      gradient: "from-amber-200 via-yellow-100 to-white",
    },
    {
      icon: EyeOff,
      title: "Zero Data Storage",
      description: "Messages exist only in memory. Never logged.",
      gradient: "from-rose-200 via-pink-100 to-white",
    },
    {
      icon: Radio,
      title: "Real-time Sync",
      description: "Sub-50ms latency worldwide edge network.",
      gradient: "from-cyan-200 via-blue-100 to-white",
    },
    {
      icon: Users,
      title: "Elite Rooms",
      description: "Curated spaces for premium members only.",
      gradient: "from-violet-200 via-purple-100 to-white",
    },
    {
      icon: Clock,
      title: "Ephemeral Mode",
      description: "Auto-vanish. No history. No evidence.",
      gradient: "from-emerald-200 via-green-100 to-white",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4 relative overflow-hidden selection:bg-white selection:text-white">
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: '#0a0a0a',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
          },
        }}
      />
      
      {/* Premium ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl" />
        
        {/* Accent orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-neutral-800/30 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neutral-900/50 rounded-full blur-[120px] animate-pulse delay-1000" />
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Premium grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />

      <div className="relative w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT SIDE - Premium Form */}
        <div className="relative">
         

          <div
            className="relative group transform transition-all duration-700 ease-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              transform: isHovered ? "translateY(-8px)" : "translateY(0)",
            }}
          >
            {/* Premium glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-500" />
            
            {/* Card border gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white/[0.02] rounded-3xl p-[1px]">
              <div className="absolute inset-[1px] bg-[#0a0a0a] rounded-3xl" />
            </div>

            <div className="relative bg-[#0a0a0a]/80 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/[0.08]">
              {/* Subtle top light */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="p-8 lg:p-10">
                {/* Header */}
                <div className="text-center ">
                  
                  <h1 className="text-4xl font-light text-white mb-3 tracking-tight">
                    Create <span className="font-medium">Room</span>
                  </h1>
                  <p className="text-white/40 text-sm font-light tracking-wide">
                    Establish your secure communication channel
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Room Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-white/50 ml-1 tracking-widest uppercase">
                      Room Name
                    </label>
                    <div className="relative group/input">
                      <input
                        type="text"
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)}
                        placeholder="Enter room identifier..."
                        className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent scale-x-0 group-hover/input:scale-x-100 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Room ID Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-white/50 ml-1 tracking-widest uppercase flex justify-between">
                      <span>Room ID</span>
                      <span className="text-[10px] text-white/30 normal-case tracking-normal">Auto-generated ULID</span>
                    </label>
                    <div className="relative flex gap-3">
                      <div className="relative flex-1 group/input">
                        <input
                          type="text"
                          value={roomId}
                          readOnly
                          placeholder="Generate secure ID..."
                          className="w-full px-5 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white/80 placeholder:text-white/20 focus:outline-none focus:border-white/30 font-mono text-xs tracking-wider"
                        />
                        {roomId && (
                          <button
                            type="button"
                            onClick={copyRoomId}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/30 hover:text-white/80 transition-colors duration-200"
                            title="Copy Room ID"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={generateRoomId}
                        disabled={isGenerating}
                        className="px-5 py-4 bg-white/[0.05] hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white/50 hover:text-white transition-all duration-300 disabled:opacity-30"
                      >
                        <Shuffle className={`w-5 h-5 ${isGenerating ? "animate-spin" : ""}`} />
                      </button>
                    </div>
                  </div>

                  {/* Privacy Toggle - Premium Style */}
                  <div className="relative p-5 bg-white/[10]border border-white/[0.08] rounded-xl hover:border-white/15 transition-colors duration-300 group/toggle">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isPrivate ? "bg-white/10" : "bg-white/5"}`}>
                          {isPrivate ? (
                            <Lock className="w-5 h-5 text-white/80" />
                          ) : (
                            <Globe className="w-5 h-5 text-white/50" />
                          )}
                        </div>
                        <div>
                          <p className="text-white font-medium text-sm mb-0.5">
                            {isPrivate ? "Private Chamber" : "Public Access"}
                          </p>
                          <p className="text-white/40 text-xs">
                            {isPrivate
                              ? "Invitation-only entry"
                              : "Open to all members"}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsPrivate(!isPrivate)}
                        className={`relative w-14 h-7 rounded-full transition-colors duration-500 focus:outline-none ${isPrivate ? "bg-white/20" : "bg-white/5"}`}
                      >
                        <span
                          className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full shadow-lg transition-all duration-500 ${isPrivate ? "translate-x-7 shadow-white/20" : "translate-x-0"}`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Submit Button - Premium */}
                  <Link to="/in/chat"
                    type="submit"

                    disabled={!roomName || !roomId}
                    className="w-full relative group/btn overflow-hidden rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {/* Button background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-xl" />
                    <div className="absolute inset-[1px] bg-[#0a0a0a] rounded-[11px] transition-colors duration-300 group-hover/btn:bg-transparent" />
                    
                    {/* Content */}
                    <div className="relative px-8 py-4 flex items-center justify-center gap-3">
                      <span className="group-hover:text-white font-medium text-sm tracking-wide group-hover/btn:text-black transition-colors duration-300">
                        Initialize Room
                      </span>
                      <ArrowRight className="w-4 h-4 text-white/60 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300" />
                    </div>

              <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-all duration-500 ease-out"></span>

                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                  </Link>
                </form>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                  <p className="text-[10px] text-white/30 tracking-wider uppercase">
                    Secured by ChatSonnet Protocol
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Premium Features */}
        <div className="relative space-y-8">
          {/* Header */}
          <div className="space-y-4">
            
            <h2 className="text-4xl lg:text-5xl font-light text-white leading-tight">
              The Art of <br />
              <span className="font-medium bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Private Communication
              </span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-md font-light">
              Experience messaging elevated to its purest form. No compromises. 
              No surveillance. Just seamless, secure connection.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-5 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.gradient} p-[1px] flex-shrink-0`}>
                    <div className="w-full h-full bg-[#0a0a0a] rounded-[7px] flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-white/70" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white/90 font-medium text-sm mb-1 group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/30 text-xs leading-relaxed group-hover:text-white/50 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Stats */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-white/80 font-bold rounded-2xl">
            <div className="text-center space-y-1">
              <p className="text-3xl font-light text-black">2.4M</p>
              <p className="text-[12px] text-black tracking-widest uppercase">Elite Users</p>
            </div>
            <div className="text-center space-y-1 border-x border-white/5">
              <p className="text-3xl font-light text-black">∞</p>
              <p className="text-[12px] text-black tracking-widest uppercase">Encryption</p>
            </div>
            <div className="text-center space-y-1">
              <p className="text-3xl font-light text-black">0ms</p>
              <p className="text-[12px] text-black tracking-widest uppercase">Latency</p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-6 pt-4 border-t border-white/5">
            <div className="flex items-center gap-2 text-white/20">
              <Shield className="w-4 h-4" />
              <span className="text-[10px] tracking-widest uppercase">SOC 2</span>
            </div>
            <div className="flex items-center gap-2 text-white/20">
              <Fingerprint className="w-4 h-4" />
              <span className="text-[10px] tracking-widest uppercase">GDPR</span>
            </div>
            <div className="flex items-center gap-2 text-white/20">
              <Lock className="w-4 h-4" />
              <span className="text-[10px] tracking-widest uppercase">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default CreateRoomPage;