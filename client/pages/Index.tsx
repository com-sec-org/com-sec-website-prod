import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Lock,
  Search,
  FileCheck,
  Users,
  CheckCircle,
  ChevronRight,
  Star,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [focus, setFocus] = useState<string>("all");

  const mapMarkers = [
    { id: "north-america", label: "North America", top: 34, left: 22 },
    { id: "usa", label: "USA", top: 38, left: 28 },
    { id: "canada", label: "Canada", top: 26, left: 25 },
    { id: "south-america", label: "South America", top: 68, left: 38 },
    { id: "europe", label: "Europe", top: 34, left: 55 },
    { id: "india", label: "India", top: 47, left: 64 },
    { id: "australia", label: "Australia", top: 75, left: 80 },

  ];

  const groupMap: Record<string, string[]> = {
    "north-america": ["north-america", "usa", "canada"],
  };

  const arcs = [
    { from: "usa", to: "europe" },
    { from: "usa", to: "india" },
    { from: "europe", to: "india" },
    { from: "india", to: "australia" },
    { from: "usa", to: "south-america" },
    { from: "canada", to: "europe" },
  ];

  const idMap = Object.fromEntries(
    mapMarkers.map((m) => [m.id, m])
  ) as Record<string, { id: string; label: string; top: number; left: number }>;

  const isActive = (id: string) =>
    focus === "all" ||
    focus === id ||
    (groupMap[focus] ? groupMap[focus].includes(id) : false);
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-16 sm:pb-20 text-white min-h-screen flex items-center relative overflow-visible">
        {/* Custom Compliance Frameworks Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
            {/* Custom SVG Background with Compliance Frameworks */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20 hidden"
              viewBox="0 0 1200 800"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.2" />
                </radialGradient>
                <linearGradient
                  id="textGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>

              {/* Central Shield */}
              <g transform="translate(600, 400)">
                <circle
                  cx="0"
                  cy="0"
                  r="80"
                  fill="url(#centerGlow)"
                  className="animate-pulse"
                />
                <path
                  d="M-40 -60 L0 -80 L40 -60 L40 20 Q40 40 0 60 Q-40 40 -40 20 Z"
                  fill="#60A5FA"
                  fillOpacity="0.6"
                />
                <circle
                  cx="0"
                  cy="-10"
                  r="15"
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="3"
                />
                <path
                  d="M-8 -10 L-3 -5 L8 -16"
                  stroke="#FFF"
                  strokeWidth="3"
                  fill="none"
                />
              </g>

              {/* Compliance Framework Labels */}
              <g className="animate-float">
                <text
                  x="200"
                  y="150"
                  fill="url(#textGradient)"
                  fontSize="32"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  SOC 2
                </text>
                <rect
                  x="180"
                  y="160"
                  width="80"
                  height="3"
                  fill="#F59E0B"
                  opacity="0.7"
                />
              </g>

              <g className="animate-float animation-delay-500">
                <text
                  x="900"
                  y="200"
                  fill="url(#textGradient)"
                  fontSize="28"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  HIPAA
                </text>
                <rect
                  x="885"
                  y="210"
                  width="70"
                  height="3"
                  fill="#3B82F6"
                  opacity="0.7"
                />
              </g>

              <g className="animate-float animation-delay-1000">
                <text
                  x="150"
                  y="600"
                  fill="url(#textGradient)"
                  fontSize="30"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  GDPR
                </text>
                <rect
                  x="135"
                  y="610"
                  width="65"
                  height="3"
                  fill="#8B5CF6"
                  opacity="0.7"
                />
              </g>

              <g className="animate-float animation-delay-1500">
                <text
                  x="950"
                  y="650"
                  fill="url(#textGradient)"
                  fontSize="26"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  ISO 27001
                </text>
                <rect
                  x="935"
                  y="660"
                  width="90"
                  height="3"
                  fill="#10B981"
                  opacity="0.7"
                />
              </g>

              <g className="animate-float animation-delay-2000">
                <text
                  x="100"
                  y="350"
                  fill="url(#textGradient)"
                  fontSize="24"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  HITRUST
                </text>
                <rect
                  x="85"
                  y="360"
                  width="80"
                  height="3"
                  fill="#EF4444"
                  opacity="0.7"
                />
              </g>

              <g className="animate-float animation-delay-2500">
                <text
                  x="1000"
                  y="450"
                  fill="url(#textGradient)"
                  fontSize="24"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  PCI-DSS
                </text>
                <rect
                  x="985"
                  y="460"
                  width="75"
                  height="3"
                  fill="#F59E0B"
                  opacity="0.7"
                />
              </g>

              <g className="animate-float animation-delay-3000">
                <text
                  x="300"
                  y="720"
                  fill="url(#textGradient)"
                  fontSize="22"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  NIST
                </text>
                <rect
                  x="290"
                  y="730"
                  width="50"
                  height="3"
                  fill="#06B6D4"
                  opacity="0.7"
                />
              </g>

              <g className="animate-float animation-delay-3500">
                <text
                  x="800"
                  y="100"
                  fill="url(#textGradient)"
                  fontSize="22"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  CMMC
                </text>
                <rect
                  x="785"
                  y="110"
                  width="60"
                  height="3"
                  fill="#A855F7"
                  opacity="0.7"
                />
              </g>

              {/* Connection Lines */}
              <g stroke="#60A5FA" strokeWidth="2" fill="none" opacity="0.3">
                <path
                  d="M200 150 Q400 300 560 360"
                  className="animate-pulse animation-delay-1000"
                />
                <path
                  d="M900 200 Q750 300 640 360"
                  className="animate-pulse animation-delay-1500"
                />
                <path
                  d="M150 600 Q350 500 560 440"
                  className="animate-pulse animation-delay-2000"
                />
                <path
                  d="M950 650 Q800 550 640 440"
                  className="animate-pulse animation-delay-2500"
                />
                <path
                  d="M100 350 Q300 375 560 390"
                  className="animate-pulse animation-delay-3000"
                />
                <path
                  d="M1000 450 Q800 425 640 410"
                  className="animate-pulse animation-delay-3500"
                />
              </g>

              {/* Floating Security Icons */}
              <g fill="#60A5FA" opacity="0.4">
                <circle
                  cx="400"
                  cy="250"
                  r="3"
                  className="animate-ping animation-delay-1000"
                />
                <circle
                  cx="750"
                  cy="300"
                  r="4"
                  className="animate-ping animation-delay-2000"
                />
                <circle
                  cx="500"
                  cy="550"
                  r="3"
                  className="animate-ping animation-delay-3000"
                />
                <circle
                  cx="850"
                  cy="500"
                  r="4"
                  className="animate-ping animation-delay-1500"
                />
              </g>
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
          <div className="absolute -top-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -right-16 w-60 sm:w-80 h-60 sm:h-80 bg-amber-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* ULTRA CRAZY Orbital Framework Pattern with 3D Effects */}
        <div className="absolute inset-0 z-5 pointer-events-none hidden">
          {/* Left Side INSANE Orbital Pattern */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 w-32 h-32 opacity-80">
            {/* 3D Holographic Ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-ping"
              style={{ animationDuration: "3s" }}
            ></div>
            <div
              className="absolute inset-2 rounded-full border border-cyan-400/40 animate-pulse"
              style={{ animationDuration: "2s" }}
            ></div>

            <div
              className="relative w-full h-full transform-gpu perspective-1000"
              style={{
                animation: "spin 20s linear infinite",
                transform: "rotateX(15deg) rotateY(15deg)",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform hover:scale-150 transition-transform duration-500">
                <span
                  className="text-sm font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(59,130,246,1)] animate-pulse"
                  style={{ textShadow: "0 0 25px rgba(59,130,246,1)" }}
                >
                  SOC 2
                </span>
                <div className="absolute -inset-2 bg-blue-500/30 rounded-full blur-sm animate-ping"></div>
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 transform hover:scale-150 transition-transform duration-500">
                <span
                  className="text-sm font-bold bg-gradient-to-r from-green-400 via-emerald-300 to-green-600 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(34,197,94,1)] animate-pulse animation-delay-500"
                  style={{ textShadow: "0 0 25px rgba(34,197,94,1)" }}
                >
                  HIPAA
                </span>
                <div className="absolute -inset-2 bg-green-500/30 rounded-full blur-sm animate-ping animation-delay-500"></div>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform hover:scale-150 transition-transform duration-500">
                <span
                  className="text-sm font-bold bg-gradient-to-r from-purple-400 via-pink-300 to-purple-600 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(168,85,247,1)] animate-pulse animation-delay-1000"
                  style={{ textShadow: "0 0 25px rgba(168,85,247,1)" }}
                >
                  GDPR
                </span>
                <div className="absolute -inset-2 bg-purple-500/30 rounded-full blur-sm animate-ping animation-delay-1000"></div>
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transform hover:scale-150 transition-transform duration-500">
                <span
                  className="text-sm font-bold bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-600 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(6,182,212,1)] animate-pulse animation-delay-1500"
                  style={{ textShadow: "0 0 25px rgba(6,182,212,1)" }}
                >
                  ISO
                </span>
                <div className="absolute -inset-2 bg-cyan-500/30 rounded-full blur-sm animate-ping animation-delay-1500"></div>
              </div>
            </div>
          </div>

          {/* Right Side ULTRA CRAZY Orbital Pattern */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 opacity-80">
            {/* Glitchy Holographic Ring */}
            <div
              className="absolute inset-0 rounded-full border-2 border-orange-500/30 animate-ping"
              style={{ animationDuration: "2.5s" }}
            ></div>
            <div
              className="absolute inset-2 rounded-full border border-red-400/40 animate-pulse"
              style={{ animationDuration: "1.8s" }}
            ></div>

            <div
              className="relative w-full h-full transform-gpu perspective-1000"
              style={{
                animation: "spin 25s linear infinite reverse",
                transform: "rotateX(-15deg) rotateY(-15deg)",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform hover:scale-150 transition-transform duration-500">
                <span
                  className="text-sm font-bold bg-gradient-to-r from-orange-400 via-red-300 to-orange-600 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(239,68,68,1)] animate-pulse"
                  style={{ textShadow: "0 0 25px rgba(239,68,68,1)" }}
                >
                  HITRUST
                </span>
                <div className="absolute -inset-2 bg-red-500/30 rounded-full blur-sm animate-ping"></div>
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 transform hover:scale-150 transition-transform duration-500">
                <span
                  className="text-sm font-bold bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-600 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(251,191,36,1)] animate-pulse animation-delay-700"
                  style={{ textShadow: "0 0 25px rgba(251,191,36,1)" }}
                >
                  PCI-DSS
                </span>
                <div className="absolute -inset-2 bg-yellow-500/30 rounded-full blur-sm animate-ping animation-delay-700"></div>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform hover:scale-150 transition-transform duration-500">
                <span
                  className="text-sm font-bold bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-600 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(99,102,241,1)] animate-pulse animation-delay-1400"
                  style={{ textShadow: "0 0 25px rgba(99,102,241,1)" }}
                >
                  NIST
                </span>
                <div className="absolute -inset-2 bg-indigo-500/30 rounded-full blur-sm animate-ping animation-delay-1400"></div>
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transform hover:scale-150 transition-transform duration-500">
                <span
                  className="text-sm font-bold bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-600 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(20,184,166,1)] animate-pulse animation-delay-2100"
                  style={{ textShadow: "0 0 25px rgba(20,184,166,1)" }}
                >
                  CMMC
                </span>
                <div className="absolute -inset-2 bg-teal-500/30 rounded-full blur-sm animate-ping animation-delay-2100"></div>
              </div>
            </div>
          </div>

          {/* ULTRA CRAZY Floating Corner Badges with Holographic Effects - Fixed Positioning */}
          <div className="absolute top-20 left-4 animate-float animation-delay-1000 transform hover:scale-125 transition-transform duration-300 z-40">
            <div className="relative">
              <div className="bg-blue-500/20 backdrop-blur-md rounded-full px-3 py-2 border-2 border-blue-500/50 shadow-lg shadow-blue-500/30">
                <span
                  className="text-xs font-bold text-blue-200 filter drop-shadow-[0_0_10px_rgba(59,130,246,1)]"
                  style={{ textShadow: "0 0 15px rgba(59,130,246,0.8)" }}
                >
                  🛡️ SECURE
                </span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur animate-pulse"></div>
              <div className="absolute -inset-3 border border-blue-400/20 rounded-full animate-ping"></div>
            </div>
          </div>

          <div className="absolute top-20 right-4 animate-float animation-delay-1500 transform hover:scale-125 transition-transform duration-300 z-40">
            <div className="relative">
              <div className="bg-green-500/20 backdrop-blur-md rounded-full px-3 py-2 border-2 border-green-500/50 shadow-lg shadow-green-500/30">
                <span
                  className="text-xs font-bold text-green-200 filter drop-shadow-[0_0_10px_rgba(34,197,94,1)]"
                  style={{ textShadow: "0 0 15px rgba(34,197,94,0.8)" }}
                >
                  ✓ COMPLIANT
                </span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded-full blur animate-pulse animation-delay-500"></div>
              <div className="absolute -inset-3 border border-green-400/20 rounded-full animate-ping animation-delay-500"></div>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 animate-float animation-delay-2000 transform hover:scale-125 transition-transform duration-300 z-40">
            <div className="relative">
              <div className="bg-purple-500/20 backdrop-blur-md rounded-full px-3 py-2 border-2 border-purple-500/50 shadow-lg shadow-purple-500/30">
                <span
                  className="text-xs font-bold text-purple-200 filter drop-shadow-[0_0_10px_rgba(168,85,247,1)]"
                  style={{ textShadow: "0 0 15px rgba(168,85,247,0.8)" }}
                >
                  🔒 PROTECTED
                </span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur animate-pulse animation-delay-1000"></div>
              <div className="absolute -inset-3 border border-purple-400/20 rounded-full animate-ping animation-delay-1000"></div>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 animate-float animation-delay-2500 transform hover:scale-125 transition-transform duration-300 z-40">
            <div className="relative">
              <div className="bg-orange-500/20 backdrop-blur-md rounded-full px-3 py-2 border-2 border-orange-500/50 shadow-lg shadow-orange-500/30">
                <span
                  className="text-xs font-bold text-orange-200 filter drop-shadow-[0_0_10px_rgba(251,146,60,1)]"
                  style={{ textShadow: "0 0 15px rgba(251,146,60,0.8)" }}
                >
                  ⚡ ACTIVE
                </span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded-full blur animate-pulse animation-delay-1500"></div>
              <div className="absolute -inset-3 border border-orange-400/20 rounded-full animate-ping animation-delay-1500"></div>
            </div>
          </div>

          {/* ULTRA INSANE Matrix Rain Effect with Glowing Binary */}
          <div className="absolute top-0 left-0 w-20 h-full opacity-40 overflow-hidden">
            <div className="text-green-400 text-xs font-mono leading-3 filter drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-bounce"
                  style={{
                    animationDelay: `${i * 200}ms`,
                    animationDuration: "2s",
                  }}
                >
                  {Math.random() > 0.5 ? "01" : "10"}
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent animate-pulse"></div>
          </div>

          <div className="absolute top-0 right-0 w-20 h-full opacity-40 overflow-hidden">
            <div className="text-cyan-400 text-xs font-mono leading-3 text-right filter drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-bounce"
                  style={{
                    animationDelay: `${i * 150}ms`,
                    animationDuration: "1.8s",
                  }}
                >
                  {Math.random() > 0.5 ? "11" : "00"}
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-pulse animation-delay-500"></div>
          </div>

          {/* ULTRA CRAZY Particle System with Multiple Effects */}
          <div className="absolute inset-0 opacity-50">
            {/* Glowing Particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-ping"
                style={{
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  background: `linear-gradient(45deg, ${["#60A5FA", "#A78BFA", "#F59E0B", "#10B981", "#EF4444"][Math.floor(Math.random() * 5)]}, ${["#3B82F6", "#8B5CF6", "#F97316", "#059669", "#DC2626"][Math.floor(Math.random() * 5)]})`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${1.5 + Math.random() * 2}s`,
                  filter: "drop-shadow(0 0 6px currentColor)",
                  transform: `scale(${0.5 + Math.random()})`,
                }}
              />
            ))}
          </div>

          {/* CRAZY Floating Energy Beams */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"
                style={{
                  width: `${30 + Math.random() * 40}%`,
                  top: `${10 + i * 15}%`,
                  left: `${Math.random() * 50}%`,
                  animationDelay: `${i * 0.8}s`,
                  animationDuration: `${2 + Math.random()}s`,
                  transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
                }}
              />
            ))}
          </div>

          {/* INSANE Holographic Scan Lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse absolute top-1/4"></div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse animation-delay-1000 absolute top-2/4"></div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse animation-delay-2000 absolute top-3/4"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
          <div className="text-center">
            {/* Compliance badges */}
            <div className="mb-6 sm:mb-8 animate-slide-down animation-delay-300">
              <div className="inline-flex items-center bg-orange-500/10 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 text-orange-300 font-medium text-xs sm:text-sm border border-orange-400/30 hover:scale-105 transition-transform duration-300">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 animate-magical-sparkle flex-shrink-0" />
                <span className="hidden sm:inline">
                  SOC 2 • HIPAA • ISO 27001 • GDPR • PCI-DSS • NIST
                </span>
                <span className="sm:hidden">SOC 2 • HIPAA • ISO 27001</span>
              </div>
            </div>

            
            
            <h1 
  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl leading-[1.75] overflow-visible pb-4 sm:pb-6"
>
  <span className="block animate-typewriter-word animation-delay-500 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
    Simplifying
  </span>{" "}
  <span className="block mt-2 sm:mt-3 md:mt-5 animate-typewriter-word animation-delay-1000 text-white">
    Security
  </span>{" "}
  <span className="block mt-2 sm:mt-3 md:mt-5 animate-confidence-reveal animation-delay-1500">
    <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-white bg-clip-text text-transparent animate-gradient-shift">
      & Compliance
    </span>
  </span>
</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto animate-fade-in-delayed animation-delay-2000 opacity-0 drop-shadow-lg">
              <span className="animate-shimmer-text bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
                Your trusted partner
              </span>{" "}
              <span className="animate-typewriter-reveal animation-delay-2500 opacity-0">
                for comprehensive cybersecurity services. We specialize in
                security audits, SOC 2 compliance, penetration testing, and
                cloud security solutions.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed animation-delay-2500 opacity-0">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/80 hover:to-orange-500 text-white transform hover:scale-105 transition-all duration-300 text-sm sm:text-base px-6 sm:px-8 shadow-2xl whitespace-nowrap backdrop-blur-sm border border-white/10"
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Start Free Audit Review
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 animate-bounce-x flex-shrink-0" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-white/10 text-white font-semibold hover:bg-white hover:text-slate-900 transform hover:scale-105 transition-all duration-300 px-6 sm:px-8 whitespace-nowrap backdrop-blur-sm shadow-2xl"
                asChild
              >
                <Link
                  to="/services"
                  className="flex items-center gap-2 font-semibold"
                >
                  Our Services
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-4 sm:px-6 py-2 text-primary font-medium text-xs sm:text-sm mb-6 sm:mb-8">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Comprehensive Security Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-6 px-2">
              Your Complete{" "}
              <span className="bg-gradient-to-r from-accent to-orange-500 bg-clip-text text-transparent">
                Cybersecurity Partner
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              From compliance audits to penetration testing, we provide
              end-to-end cybersecurity services to protect your business and
              build stakeholder confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: Shield,
                title: "SOC 2 Compliance",
                description:
                  "Achieve SOC 2 Type II certification with our expert guidance and proven methodologies.",
                features: [
                  "Gap Analysis",
                  "Control Implementation",
                  "Audit Preparation",
                ],
                color: "from-blue-500 to-cyan-500",
                href: "/services/soc2-readiness",
              },
              {
                icon: Search,
                title: "Penetration Testing",
                description:
                  "Comprehensive security testing to identify vulnerabilities before attackers do.",
                features: [
                  "Network Testing",
                  "Web App Testing",
                  "Social Engineering",
                ],
                color: "from-red-500 to-pink-500",
                href: "/services/penetration-testing",
              },
              {
                icon: Lock,
                title: "Cloud Security",
                description:
                  "Secure your cloud infrastructure with best practices and continuous monitoring.",
                features: ["AWS Security", "Azure Security", "GCP Security"],
                color: "from-green-500 to-emerald-500",
                href: "/services/cloud-security",
              },
              {
                icon: FileCheck,
                title: "Compliance Audits",
                description:
                  "Comprehensive audits for HIPAA, ISO 27001, and other regulatory frameworks.",
                features: ["HIPAA Compliance", "ISO 27001", "GDPR Compliance"],
                color: "from-purple-500 to-violet-500",
                href: "/services/compliance-audit-readiness",
              },
              {
                icon: Users,
                title: "Security Training",
                description:
                  "Build a security-aware workforce with customized training programs.",
                features: [
                  "Phishing Simulation",
                  "Security Awareness",
                  "Incident Response",
                ],
                color: "from-orange-500 to-amber-500",
                href: "/services/security-training",
              },
              {
                icon: CheckCircle,
                title: "Risk Management",
                description:
                  "Identify, assess, and mitigate cybersecurity risks across your organization.",
                features: [
                  "Risk Assessment",
                  "Threat Modeling",
                  "Control Testing",
                ],
                color: "from-teal-500 to-cyan-500",
                href: "/services/risk-management",
              },
            ].map((service, index) => (
              <Link to={service.href ?? "/services"} key={index} className="block h-full no-underline">
              <Card
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 h-full"
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div
                      className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}
                    >
                      <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12 lg:mt-16">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-white text-sm sm:text-base px-6 sm:px-8"
              asChild
            >
              <Link to="/services">
                View Our Services
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted by Leading Companies */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Animated Background Elements - Reduced for mobile */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-blue-400/10 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-40 right-10 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 bg-purple-400/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-1/4 w-8 sm:w-16 h-8 sm:h-16 bg-white/5 rounded-full animate-ping-slow"></div>
          <div className="absolute top-1/2 right-1/3 w-10 sm:w-20 h-10 sm:h-20 bg-blue-300/10 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-1/3 left-2/3 w-6 sm:w-12 h-6 sm:h-12 bg-cyan-400/20 rounded-full animate-wiggle"></div>
          <div className="absolute top-1/4 left-3/4 w-3 sm:w-6 h-3 sm:h-6 bg-accent/30 rounded-full animate-twinkle"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-accent/20 rounded-full px-4 sm:px-6 py-2 text-accent font-medium text-xs sm:text-sm mb-6 sm:mb-8 animate-scale-in animation-delay-300">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 animate-magical-sparkle" />
              Trusted by Innovation Leaders
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent px-2">
              Securing Tomorrow's Companies
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto px-4">
              From healthcare innovators to AI pioneers, we've secured
              organizations across every industry
            </p>
          </div>

          {/* Floating Client Cards - Mobile responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12 lg:mb-16 hidden">
            {[
              {
                name: "RaveHealth",
                sector: "Healthcare",
                color: "from-green-400 to-emerald-500",
                position: { x: 5, y: 10 },
                delay: 0,
              },
              {
                name: "GPTZero",
                sector: "AI & ML",
                color: "from-blue-400 to-cyan-500",
                position: { x: 75, y: 20 },
                delay: 0.5,
              },
              {
                name: "VhedaHealth",
                sector: "MedTech",
                color: "from-purple-400 to-pink-500",
                position: { x: 25, y: 60 },
                delay: 1,
              },
              {
                name: "CloseKnit",
                sector: "Social",
                color: "from-orange-400 to-red-500",
                position: { x: 60, y: 5 },
                delay: 1.5,
              },
              {
                name: "Casellum.ai",
                sector: "AI Security",
                color: "from-indigo-400 to-purple-500",
                position: { x: 10, y: 45 },
                delay: 2,
              },
              {
                name: "CropTrak",
                sector: "AgTech",
                color: "from-green-400 to-lime-500",
                position: { x: 80, y: 65 },
                delay: 2.5,
              },
              {
                name: "NeuroWave",
                sector: "HealthTech",
                color: "from-cyan-400 to-blue-500",
                position: { x: 45, y: 30 },
                delay: 3,
              },
              {
                name: "MentorPro",
                sector: "EdTech",
                color: "from-yellow-400 to-orange-500",
                position: { x: 20, y: 80 },
                delay: 3.5,
              },
              {
                name: "GloveBox",
                sector: "Automotive",
                color: "from-gray-400 to-slate-500",
                position: { x: 65, y: 40 },
                delay: 4,
              },
              {
                name: "Cycloid",
                sector: "DevOps",
                color: "from-teal-400 to-cyan-500",
                position: { x: 35, y: 15 },
                delay: 4.5,
              },
              {
                name: "Farlinium",
                sector: "Enterprise",
                color: "from-pink-400 to-rose-500",
                position: { x: 85, y: 50 },
                delay: 5,
              },
              {
                name: "Tangenesis",
                sector: "Biotech",
                color: "from-violet-400 to-purple-500",
                position: { x: 15, y: 25 },
                delay: 5.5,
              },
              {
                name: "Conover",
                sector: "Assessment & Training",
                color: "from-amber-400 to-yellow-500",
                position: { x: 50, y: 75 },
                delay: 6,
              },
              {
                name: "EdFlex",
                sector: "EdTech",
                color: "from-emerald-400 to-green-500",
                position: { x: 75, y: 35 },
                delay: 6.5,
              },
              {
                name: "Excer.AI",
                sector: "HealthTech AI",
                color: "from-sky-400 to-blue-500",
                position: { x: 30, y: 85 },
                delay: 7,
              },
              {
                name: "Flybits",
                sector: "FinTech",
                color: "from-fuchsia-400 to-pink-500",
                position: { x: 90, y: 15 },
                delay: 7.5,
              },
              {
                name: "GermainUX",
                sector: "UX Analytics",
                color: "from-rose-400 to-red-500",
                position: { x: 5, y: 70 },
                delay: 8,
              },
              {
                name: "Powder",
                sector: "AI Documents",
                color: "from-slate-400 to-gray-500",
                position: { x: 70, y: 80 },
                delay: 8.5,
              },
              {
                name: "PIC",
                sector: "Enterprise ERP",
                color: "from-indigo-400 to-blue-500",
                position: { x: 40, y: 55 },
                delay: 9,
              },
            ].map((client, index) => (
              <div
                key={client.name}
                className=""
                
              >
                <div
                  className={`bg-gradient-to-br ${client.color} p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-shadow cursor-default backdrop-blur-sm border border-white/15`}
                >
                  <div className="text-white relative z-10">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-base mb-1">
                      {client.name}
                    </h3>
                    <p className="text-white/90 text-xs sm:text-xs md:text-sm font-medium">
                      {client.sector}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Scrolling Ticker with Company Names */}
          <div className="relative mb-10 sm:mb-12 lg:mb-16">
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-white/60 text-xs sm:text-sm uppercase tracking-wide font-semibold animate-twinkle">
                🚀 Securing Innovation Across Industries 🚀
              </p>
            </div>

            {/* First ticker - left to right */}
            <div className="overflow-hidden mb-2 sm:mb-4">
              <div className="flex animate-scroll-right whitespace-nowrap">
                {[
                  "RaveHealth",
                  "GPTZero",
                  "VhedaHealth",
                  "CloseKnit",
                  "Casellum.ai",
                  "CropTrak",
                  "NeuroWave",
                  "MentorPro",
                  "EdFlex",
                  "Flybits",
                  "GermainUX",
                ].map((client, index) => (
                  <span
                    key={`right-${index}`}
                    className="mx-3 sm:mx-6 text-base sm:text-xl md:text-3xl font-bold text-white/30 hover:text-accent hover:scale-110 transition-all duration-300 cursor-pointer transform hover:rotate-3"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {client}
                  </span>
                ))}
                {[
                  "RaveHealth",
                  "GPTZero",
                  "VhedaHealth",
                  "CloseKnit",
                  "Casellum.ai",
                  "CropTrak",
                  "NeuroWave",
                  "MentorPro",
                  "EdFlex",
                  "Flybits",
                  "GermainUX",
                ].map((client, index) => (
                  <span
                    key={`right-dup-${index}`}
                    className="mx-3 sm:mx-6 text-base sm:text-xl md:text-3xl font-bold text-white/30 hover:text-accent hover:scale-110 transition-all duration-300 cursor-pointer transform hover:rotate-3"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* Second ticker - right to left */}
            <div className="overflow-hidden">
              <div className="flex animate-scroll-left whitespace-nowrap">
                {[
                  "GloveBox",
                  "Cycloid",
                  "Farlinium",
                  "Tangenesis",
                  "CaryHealth",
                  "Cicerai",
                  "Xchart",
                  "ThePublicInterestCompany",
                  "Conover",
                  "Excer.AI",
                  "Powder",
                  "PIC",
                ].map((client, index) => (
                  <span
                    key={`left-${index}`}
                    className="mx-3 sm:mx-6 text-sm sm:text-lg md:text-2xl font-bold text-white/25 hover:text-purple-300 hover:scale-110 transition-all duration-300 cursor-pointer transform hover:-rotate-3"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {client}
                  </span>
                ))}
                {[
                  "GloveBox",
                  "Cycloid",
                  "Farlinium",
                  "Tangenesis",
                  "CaryHealth",
                  "Cicerai",
                  "Xchart",
                  "ThePublicInterestCompany",
                  "Conover",
                  "Excer.AI",
                  "Powder",
                  "PIC",
                ].map((client, index) => (
                  <span
                    key={`left-dup-${index}`}
                    className="mx-3 sm:mx-6 text-sm sm:text-lg md:text-2xl font-bold text-white/25 hover:text-purple-300 hover:scale-110 transition-all duration-300 cursor-pointer transform hover:-rotate-3"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats with Animation */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-6 border border-white/20 hover:border-accent/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-1 sm:mb-2 animate-counter group-hover:animate-bounce">
                17+
              </div>
              <div className="text-white/80 text-xs sm:text-sm font-medium">
                Trusted Partners
              </div>
              <div className="w-full h-1 bg-white/20 rounded-full mt-2 sm:mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-accent to-orange-500 rounded-full animate-shimmer"></div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-1 sm:mb-2 animate-counter group-hover:animate-bounce animation-delay-300">
                100%
              </div>
              <div className="text-white/80 text-xs sm:text-sm font-medium">
                Success Rate
              </div>
              <div className="w-full h-1 bg-white/20 rounded-full mt-2 sm:mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-shimmer animation-delay-500"></div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 sm:mb-2 animate-counter group-hover:animate-bounce animation-delay-600">
                8+
              </div>
              <div className="text-white/80 text-xs sm:text-sm font-medium">
                Industries Served
              </div>
              <div className="w-full h-1 bg-white/20 rounded-full mt-2 sm:mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-shimmer animation-delay-1000"></div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 sm:mb-2 animate-counter group-hover:animate-bounce animation-delay-900">
                24/7
              </div>
              <div className="text-white/80 text-xs sm:text-sm font-medium">
                Security Support
              </div>
              <div className="w-full h-1 bg-white/20 rounded-full mt-2 sm:mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-shimmer animation-delay-1500"></div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-10 sm:mt-12 lg:mt-16">
            <div className="bg-gradient-to-r from-accent/20 to-purple-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 mx-2 sm:mx-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-white/80 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base px-2">
                Let's secure your innovation and build confidence in your
                cybersecurity posture.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/80 hover:to-orange-500 text-white transform hover:scale-105 sm:hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-accent/25 text-sm sm:text-base px-6 sm:px-8"
                asChild
              >
                <Link to="/contact">
                  Start Your Security Journey
                  <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 animate-bounce-x" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Map */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 sm:px-6 py-2 text-blue-700 font-medium text-xs sm:text-sm mb-4">
              Global Client Footprint
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              Where Our Clients Are Based
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We’re proud to support teams across North & South America, Canada, USA, Europe, India, and Australia.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              alt="World map"
              className="w-full h-72 sm:h-96 md:h-[520px] object-cover grayscale-[35%] contrast-110"
            />

            {/* Animated connection arcs */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FB923C" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {arcs.map((a, i) => {
                const p1 = idMap[a.from];
                const p2 = idMap[a.to];
                if (!p1 || !p2) return null;
                const cx = (p1.left + p2.left) / 2;
                const d = `M ${p1.left} ${p1.top} C ${cx} ${p1.top - 12}, ${cx} ${p2.top - 12}, ${p2.left} ${p2.top}`;
                const active =
                  focus === "all" ||
                  [a.from, a.to].includes(focus) ||
                  (groupMap[focus]?.includes(a.from) || groupMap[focus]?.includes(a.to));
                return (
                  <g key={i} opacity={active ? 1 : 0.15} filter="url(#glow)">
                    <path d={d} stroke="url(#arcGrad)" strokeWidth={0.6} fill="none" strokeLinecap="round" strokeDasharray="4 8">
                      <animate attributeName="stroke-dashoffset" from="40" to="0" dur="3.5s" repeatCount="indefinite" />
                    </path>
                    <path d={d} stroke="#60A5FA" strokeOpacity={0.2} strokeWidth={2} fill="none" />
                  </g>
                );
              })}
            </svg>

            {/* Pulsing pins */}
            <div className="absolute inset-0">
              {mapMarkers.map((m) => (
                <button
                  key={m.id}
                  className={`absolute group transition-all duration-300 ${isActive(m.id) ? "opacity-100" : "opacity-30"}`}
                  style={{ top: `${m.top}%`, left: `${m.left}%` }}
                  onClick={() => setFocus(m.id)}
                  aria-label={`Focus ${m.label}`}
                >
                  <span className="absolute -inset-6 rounded-full bg-accent/20 blur-xl"></span>
                  <span className="absolute -inset-3 rounded-full bg-accent/30 animate-ping"></span>
                  <span className="relative block w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-accent ring-4 ring-white/70 shadow-lg"></span>
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] sm:text-xs md:text-sm font-semibold bg-white/95 text-slate-900 px-2 py-1 rounded-md shadow-md border border-gray-200 hidden sm:block">
                    {m.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive legend */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[{ id: "all", label: "All" },
              { id: "north-america", label: "North America" },
              { id: "usa", label: "USA" },
              { id: "canada", label: "Canada" },
              { id: "south-america", label: "South America" },
              { id: "europe", label: "Europe" },
              { id: "india", label: "India" },
              { id: "australia", label: "Australia" },].map((r) => (
              <button
                key={r.id}
                onClick={() => setFocus(r.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm rounded-full border transition-all duration-300 ${
                  focus === r.id
                    ? "bg-blue-600 text-white border-blue-700 shadow"
                    : "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Partners Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary via-primary/95 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-accent/20 rounded-full px-4 sm:px-6 py-2 text-accent font-medium text-xs sm:text-sm mb-6 sm:mb-8">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Trusted Security Partnerships
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Get Exclusively-Negotiated{" "}
              <span className="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">
                Discounts
              </span>
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-white/90">
              at our vendor partners
            </h3>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Want to partner with Com-Sec? Get exclusive access to premium
              security tools and services at discounted rates.
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {/* A-LIGN */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-white/95 transition-colors min-h-[84px]">
              <div className="text-center text-gray-800 text-lg sm:text-xl font-semibold">A-LIGN</div>
            </div>

            {/* Vanta */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-white/95 transition-colors min-h-[84px]">
              <div className="text-center text-gray-800 text-lg sm:text-xl font-semibold">Vanta</div>
            </div>

            {/* DRATA */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-white/95 transition-colors min-h-[84px]">
              <div className="text-center text-gray-800 text-lg sm:text-xl font-semibold">DRATA</div>
            </div>

            {/* SPRINTO */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-white/95 transition-colors min-h-[84px]">
              <div className="text-center text-gray-800 text-lg sm:text-xl font-semibold">SPRINTO</div>
            </div>

            {/* Assurance Lab */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-white/95 transition-colors min-h-[84px]">
              <div className="text-center text-gray-800 text-lg sm:text-xl font-semibold">Assurance Lab</div>
            </div>

            {/* Scrut */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-white/95 transition-colors min-h-[84px]">
              <div className="text-center text-gray-800 text-lg sm:text-xl font-semibold">Scrut</div>
            </div>

            {/* Prescient */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-white/95 transition-colors min-h-[84px]">
              <div className="text-center text-gray-800 text-lg sm:text-xl font-semibold">PRESCIENT</div>
            </div>

            {/* MJD Advisors */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-white/95 transition-colors min-h-[84px]">
              <div className="text-center text-gray-800 text-lg sm:text-xl font-semibold">MJD Advisors</div>
            </div>

            {/* Socurely */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-white/95 transition-colors min-h-[84px]">
              <div className="text-center text-gray-800 text-lg sm:text-xl font-semibold">Socurely</div>
            </div>

            {/* oneleet */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-white/95 transition-colors min-h-[84px]">
              <div className="text-center text-gray-800 text-lg sm:text-xl font-semibold">oneleet</div>
            </div>

            {/* Wiz */}
            <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-white/95 transition-colors min-h-[84px]">
              <div className="text-center text-gray-800 text-lg sm:text-xl font-semibold">Wiz</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-orange-600 hover:from-accent/80 hover:to-orange-500 text-white transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-accent/25 text-sm sm:text-base px-6 sm:px-8"
              asChild
            >
              <Link to="/contact">
                Apply Now for Partner Benefits
                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 sm:px-6 py-2 text-blue-700 font-medium text-xs sm:text-sm mb-6 sm:mb-8">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 fill-current" />
              5.0 Star Rating • 17+ Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what security leaders and
              business owners say about working with Com-Sec.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* Review 1 */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200 animate-float animation-delay-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current mr-1"
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                "Amazing partners in your SOC 2 accreditation journey. As an
                early-stage startup, we were looking for a provider that could
                accelerate the establishment and maintenance of our controls and
                security posture, and the Com-Sec team played a key role in the
                attainment of our accreditation."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  S
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Startup CEO</div>
                  <div className="text-sm text-gray-500">May 14, 2025</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200 animate-bounce-slow animation-delay-200">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current mr-1"
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                "Best Experience in Years. Com-Sec stepped in and took the
                weight off my shoulders. Their knowledge of the process and
                requirements was immense. Where I didn't know how to begin, they
                sailed through. I would never want to go through the SOC process
                without them!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  C
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Compliance Manager
                  </div>
                  <div className="text-sm text-gray-500">Feb 21, 2025</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200 animate-wiggle animation-delay-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current mr-1"
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                "Outstanding support! Com Sec has been an invaluable partner in
                securing our systems. Their team is knowledgeable, responsive,
                and always ahead of emerging threats. What stands out most is
                their exceptional customer service."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  T
                </div>
                <div>
                  <div className="font-semibold text-gray-900">IT Director</div>
                  <div className="text-sm text-gray-500">Jan 21, 2025</div>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200 animate-twinkle animation-delay-400">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current mr-1"
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                "We chose to work with Com-Sec to help us obtain our SOC2 Type 2
                certification. They were in constant communication with us
                through the entire process and made it very easy to understand.
                They took care of the Drata side of things so we could focus on
                updating our system to become fully compliant in less than 3
                months."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  B
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Business Owner
                  </div>
                  <div className="text-sm text-gray-500">Sep 09, 2024</div>
                </div>
              </div>
            </div>

            {/* Review 5 - Healthcare */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200 animate-float animation-delay-500">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current mr-1"
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                "Wonderful experience, would use again. Com-Sec was great! They
                did a very thorough pen testing for us. In healthcare, we have
                to be extremely diligent with cybersecurity. Farbod and his team
                allowed us to make sure we can provide secure service to our
                patients."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  H
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Healthcare Executive
                  </div>
                  <div className="text-sm text-gray-500">Apr 06, 2024</div>
                </div>
              </div>
            </div>

            {/* Review 6 */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200 animate-bounce-slow animation-delay-600">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current mr-1"
                  />
                ))}
              </div>
              <blockquote className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                "Put our security, compliance, and IT support on auto-pilot.
                Com-sec's services are an absolute game-changer for businesses
                looking to offload their IT support, security, and compliance
                concerns. The peace of mind that comes from not having to think
                about IT support, security, or compliance is invaluable."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  M
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Managing Director
                  </div>
                  <div className="text-sm text-gray-500">Apr 02, 2024</div>
                </div>
              </div>
            </div>
          </div>

          {/* Show More Reviews Button & Stats */}
          <div className="text-center space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  5.0
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  17+
                </div>
                <div className="text-sm text-gray-600">Customer Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-600">Would Recommend</div>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 text-sm sm:text-base px-6 sm:px-8"
                asChild
              >
                <Link to="/testimonials">
                  Read All Reviews
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <p className="text-sm text-gray-500">
                Join 50+ companies who trust Com-Sec with their security
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
