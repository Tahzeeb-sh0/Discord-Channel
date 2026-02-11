import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Phone,
  Video,
  Search,
  Menu,
  Check,
  CheckCheck,
  Mic,
  Crown,
  Settings,
  Pin,
  Bell,
  Image as ImageIcon,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "The new design system is looking incredible. Clean aesthetics.",
      sender: "other",
      time: "10:30 AM",
      status: "read",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 2,
      text: "Appreciate it. Spent weeks refining the black theme palette.",
      sender: "me",
      time: "10:32 AM",
      status: "read",
    },
    {
      id: 3,
      text: "The subtle gradients on dark backgrounds are chef's kiss 👌",
      sender: "other",
      time: "10:33 AM",
      status: "read",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 4,
      text: "Here's the preview:",
      sender: "me",
      time: "10:35 AM",
      status: "read",
      type: "image",
      imageUrl:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      text: "That contrast ratio is perfect. Accessibility + aesthetics.",
      sender: "other",
      time: "10:36 AM",
      status: "read",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 6,
      text: "Exactly. Premium feel without compromising usability.",
      sender: "me",
      time: "10:38 AM",
      status: "delivered",
    },
  ]);

  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeChat, setActiveChat] = useState(1);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "sent",
    };

    setMessages([...messages, newMessage]);
    setInputText("");

    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const reply = {
          id: messages.length + 2,
          text: "Ready to ship this? The team is waiting.",
          sender: "other",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          status: "read",
          avatar: "https://i.pravatar.cc/150?img=32",
        };
        setMessages((prev) => [...prev, reply]);
      }, 2000);
    }, 1000);
  };

  const chatList = [
    {
      id: 1,
      name: "Sarah Chen",
      message: "That contrast ratio is perfect...",
      time: "10:36 AM",
      unread: 0,
      online: true,
      avatar: "https://i.pravatar.cc/150?img=32",
      premium: true,
    },
    {
      id: 2,
      name: "Design Collective",
      message: "Alex: Final assets delivered",
      time: "9:45 AM",
      unread: 3,
      online: true,
      avatar: "https://i.pravatar.cc/150?img=12",
      group: true,
      premium: true,
    },
    {
      id: 3,
      name: "Marcus Reed",
      message: "Quarterly review scheduled",
      time: "Yesterday",
      unread: 0,
      online: false,
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 4,
      name: "Elena Voss",
      message: "The prototype is live",
      time: "Yesterday",
      unread: 0,
      online: true,
      avatar: "https://i.pravatar.cc/150?img=5",
      premium: true,
    },
    {
      id: 5,
      name: "Engineering",
      message: "Deployment successful 🚀",
      time: "Mon",
      unread: 0,
      online: false,
      avatar: "https://i.pravatar.cc/150?img=3",
      group: true,
    },
  ];

  const emojis = [
    "😀",
    "😂",
    "🥰",
    "😎",
    "🤔",
    "👍",
    "🔥",
    "❤️",
    "🎉",
    "✨",
    "🚀",
    "💯",
    "🤝",
    "👀",
    "💪",
    "🙏",
    "🖤",
    "⚡",
    "💎",
    "🏆",
    "🎯",
    "🧠",
    "🎨",
    "🔮",
  ];

  return (
    <div className="flex h-screen bg-[#050505] overflow-hidden font-sans selection:bg-white/20 selection:text-white">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#0a0a0a",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      />

      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.02] via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[120px]" />
      </div>

      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "w-80" : "w-0"} bg-[#0a0a0a]/80 backdrop-blur-2xl border-r border-white/[0.06] flex flex-col transition-all duration-500 ease-out overflow-hidden relative z-20`}
      >
        {/* Sidebar Header */}
        <div className="p-5 border-b border-white/[0.06]">
          <div className="flex items-center justify-between mb-5">
            <Link to="/" className="flex">
              <div className="w-9 h-9 flex items-center justify-center">
                <img src="/speech-bubble.png" alt="Logo" className="w-5 h-5" />
                <span className="text-white font-medium text-sm tracking-wide">
                  ChatSonnet
                </span>
              </div>
            </Link>
            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-white/10">
              <Settings className="w-4 h-4 text-white/40" />
            </button>
          </div>

          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-white/60 transition-colors" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-11 pr-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
          <div className="px-3 py-2">
            <span className="text-[10px] font-medium text-white/30 uppercase tracking-widest px-3">
              Messages
            </span>
          </div>

          {chatList.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`mx-2 p-3 flex items-center gap-3 cursor-pointer transition-all duration-300 rounded-xl border border-transparent ${activeChat === chat.id ? "bg-white/[0.08] border-white/[0.08]" : "hover:bg-white/[0.03] hover:border-white/[0.04]"}`}
            >
              <div className="relative">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-white/5"
                />
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0a0a0a] rounded-full" />
                )}
                {chat.premium && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-amber-200 to-yellow-400 rounded-full flex items-center justify-center border border-[#0a0a0a]">
                    <Crown className="w-2.5 h-2.5 text-black" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h3 className="text-sm font-medium text-white/90 truncate">
                    {chat.name}
                  </h3>
                  <span className="text-[10px] text-white/30">{chat.time}</span>
                </div>
                <p
                  className={`text-xs truncate ${chat.unread > 0 ? "text-white/70 font-medium" : "text-white/40"}`}
                >
                  {chat.message}
                </p>
              </div>
              {chat.unread > 0 && (
                <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                  <span className="text-[10px] text-white font-medium">
                    {chat.unread}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/150?img=68"
                alt="Me"
                className="w-10 h-10 rounded-full ring-2 ring-white/10"
              />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0a0a0a] rounded-full" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Alex Morgan</p>
              <p className="text-xs text-white/40">Premium Member</p>
            </div>
            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
              <MoreVertical className="w-4 h-4 text-white/40" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-[#050505] relative">
        {/* Chat Header */}
        <div className="h-16 border-b border-white/[0.06] bg-[#0a0a0a]/50 backdrop-blur-2xl flex items-center justify-between px-6 relative z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors lg:hidden border border-transparent hover:border-white/10"
            >
              <Menu className="w-5 h-5 text-white/60" />
            </button>
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/150?img=32"
                  alt="Sarah"
                  className="w-10 h-10 rounded-full ring-2 ring-white/10"
                />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#050505] rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-medium text-white">Sarah Chen</h2>
                  <Crown className="w-3 h-3 text-amber-200" />
                </div>
                <p className="text-[10px] text-emerald-400/80 uppercase tracking-wider">
                  Online
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button className="p-2.5 text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 border border-transparent hover:border-white/10">
              <Phone className="w-4 h-4" />
            </button>
            <button className="p-2.5 text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 border border-transparent hover:border-white/10">
              <Video className="w-4 h-4" />
            </button>
            <button className="p-2.5 text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 border border-transparent hover:border-white/10">
              <Search className="w-4 h-4" />
            </button>
            <button className="p-2.5 text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 border border-transparent hover:border-white/10">
              <Pin className="w-4 h-4" />
            </button>
            <button className="p-2.5 text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 border border-transparent hover:border-white/10">
              <MoreVertical className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 relative">
          {/* Date Divider */}
          <div className="flex items-center justify-center">
            <div className="bg-white/[0.03] border border-white/[0.06] px-4 py-1.5 rounded-full">
              <span className="text-[10px] text-white/40 uppercase tracking-widest">
                Today
              </span>
            </div>
          </div>

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              <div
                className={`flex gap-3 max-w-[75%] ${message.sender === "me" ? "flex-row-reverse" : ""}`}
              >
                {message.sender === "other" && (
                  <img
                    src={message.avatar}
                    alt="Avatar"
                    className="w-8 h-8 rounded-full ring-2 ring-white/5 self-end mb-1 opacity-80"
                  />
                )}

                <div
                  className={`flex flex-col ${message.sender === "me" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`relative px-5 py-3 rounded-2xl ${
                      message.sender === "me"
                        ? "bg-white text-black rounded-br-md"
                        : "bg-white/[0.05] text-white/90 rounded-bl-md border border-white/[0.08]"
                    }`}
                  >
                    {message.type === "image" ? (
                      <div className="space-y-3 mb-1">
                        <div className="relative overflow-hidden rounded-xl">
                          <img
                            src={message.imageUrl}
                            alt="Shared"
                            className="max-w-[280px] hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                        </div>
                        <p
                          className={`text-sm ${message.sender === "me" ? "text-black/80" : "text-white/70"}`}
                        >
                          {message.text}
                        </p>
                      </div>
                    ) : (
                      <p
                        className={`text-sm leading-relaxed ${message.sender === "me" ? "text-black/90" : "text-white/80"}`}
                      >
                        {message.text}
                      </p>
                    )}

                    {/* Message Time & Status */}
                    <div
                      className={`flex items-center gap-1.5 mt-2 ${message.sender === "me" ? "justify-end" : ""}`}
                    >
                      <span
                        className={`text-[10px] ${message.sender === "me" ? "text-black/40" : "text-white/30"}`}
                      >
                        {message.time}
                      </span>
                      {message.sender === "me" && (
                        <span className="text-black/40">
                          {message.status === "read" ? (
                            <CheckCheck className="w-3 h-3" />
                          ) : message.status === "delivered" ? (
                            <Check className="w-3 h-3" />
                          ) : (
                            <Check className="w-3 h-3 opacity-50" />
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start animate-in fade-in duration-200">
              <div className="flex gap-3">
                <img
                  src="https://i.pravatar.cc/150?img=32"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full ring-2 ring-white/5 self-end mb-1 opacity-80"
                />
                <div className="bg-white/[0.05] border border-white/[0.08] rounded-2xl rounded-bl-md px-5 py-4 flex items-center gap-1">
                  <span
                    className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-5 bg-[#0a0a0a]/50 backdrop-blur-2xl border-t border-white/[0.06] relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-end gap-3 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-2 focus-within:border-white/20 focus-within:bg-white/[0.05] transition-all duration-300">
              <button
                className="p-3 text-white/30 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                onClick={() => setShowEmoji(!showEmoji)}
              >
                <Smile className="w-5 h-5" />
              </button>

              <button className="p-3 text-white/30 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 hidden sm:block">
                <Paperclip className="w-5 h-5" />
              </button>

              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Type a message..."
                rows="1"
                className="flex-1 bg-transparent text-white placeholder:text-white/20 resize-none py-3.5 px-2 focus:outline-none max-h-32 min-h-[52px] text-sm"
                style={{ height: "auto", overflow: "hidden" }}
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
              />

              {inputText ? (
                <button
                  onClick={handleSend}
                  className="p-3 bg-white text-black hover:bg-white/90 rounded-xl transition-all duration-200 shadow-lg shadow-white/10 hover:shadow-white/20 hover:scale-105 active:scale-95"
                >
                  <Send className="w-5 h-5" />
                </button>
              ) : (
                <button className="p-3 text-white/30 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200">
                  <Mic className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="text-center mt-3">
              <p className="text-[10px] text-white/20 tracking-wider uppercase">
                Press Enter to send • Shift + Enter for new line
              </p>
            </div>
          </div>
        </div>

        {/* Emoji Picker */}
        {showEmoji && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-4 shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-4 duration-200">
            <div className="grid grid-cols-8 gap-1">
              {emojis.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => {
                    setInputText((prev) => prev + emoji);
                    setShowEmoji(false);
                  }}
                  className="text-xl hover:bg-white/10 rounded-lg p-2 transition-colors"
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
