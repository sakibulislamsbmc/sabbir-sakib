import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Scissors,
  Crosshair,
  Sliders,
  Sparkles,
  Film,
  Activity,
  Compass,
  Repeat,
  ChevronRight,
} from "lucide-react";

type CameraMode = "isometric" | "perspective" | "flat";
type ColorGrade = "gold" | "teal-orange" | "cyber" | "monochrome";
type ActiveTool = "select" | "razor" | "ripple" | "keyframe";

interface VideoEditingStudio3DProps {
  className?: string;
}

export function VideoEditingStudio3D({ className = "" }: VideoEditingStudio3DProps) {
  // Playback state
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(32); // percentage 0 - 100
  const [isLooping, setIsLooping] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showGuides, setShowGuides] = useState<boolean>(false);

  // 3D Perspective controls
  const [cameraMode, setCameraMode] = useState<CameraMode>("perspective");
  const [mouseTilt, setMouseTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Creative Video Editing Controls
  const [colorGrade, setColorGrade] = useState<ColorGrade>("gold");
  const [activeTool, setActiveTool] = useState<ActiveTool>("select");
  const [selectedTrack, setSelectedTrack] = useState<string>("v1");
  const [audioPeaks, setAudioPeaks] = useState<number[]>([65, 82, 45, 90, 70, 55, 78, 60]);

  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  // Format frame-accurate timecode from progress (assuming 12-second sequence at 60fps = 720 frames)
  const totalFrames = 720;
  const currentFrame = Math.floor((progress / 100) * totalFrames);
  const seconds = Math.floor(currentFrame / 60);
  const remainingFrames = currentFrame % 60;
  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;
  const timecode = `00:${String(minutes).padStart(2, "0")}:${String(displaySeconds).padStart(2, "0")}:${String(remainingFrames).padStart(2, "0")}`;

  // Smooth playback loop
  useEffect(() => {
    if (!isPlaying) return;

    const durationMs = 12000; // 12 seconds loop
    let lastTs = performance.now();

    const loop = (now: number) => {
      const dt = now - lastTs;
      lastTs = now;

      setProgress((prev) => {
        let next = prev + (dt / durationMs) * 100;
        if (next >= 100) {
          if (isLooping) {
            next = 0;
          } else {
            setIsPlaying(false);
            return 100;
          }
        }
        return next;
      });

      // Random jitter for dynamic VU audio meters during playback
      if (Math.random() > 0.4) {
        setAudioPeaks([
          Math.min(98, Math.max(25, Math.floor(50 + Math.random() * 45))),
          Math.min(98, Math.max(25, Math.floor(45 + Math.random() * 50))),
          Math.min(98, Math.max(20, Math.floor(40 + Math.random() * 40))),
          Math.min(98, Math.max(30, Math.floor(60 + Math.random() * 38))),
          Math.min(98, Math.max(25, Math.floor(55 + Math.random() * 42))),
          Math.min(98, Math.max(20, Math.floor(35 + Math.random() * 45))),
          Math.min(98, Math.max(30, Math.floor(65 + Math.random() * 32))),
          Math.min(98, Math.max(20, Math.floor(40 + Math.random() * 50))),
        ]);
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, isLooping]);

  // 3D Mouse Parallax calculation
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current || cameraMode === "flat") return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

      // Dampened degrees
      setMouseTilt({
        x: -y * 14, // tilt pitch
        y: x * 18, // tilt yaw
      });
    },
    [cameraMode],
  );

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseTilt({ x: 0, y: 0 });
  };

  // Timeline scrub handler
  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clampedRatio = Math.max(0, Math.min(1, clickX / rect.width));
    setProgress(clampedRatio * 100);
  };

  // Color Grade Styles
  const gradeStyles = {
    gold: {
      filter: "contrast(1.08) saturate(1.15) sepia(0.2) hue-rotate(-8deg)",
      overlay: "from-amber-500/20 via-orange-500/10 to-transparent",
      badge: "border-amber-400/40 text-amber-300 bg-amber-500/15",
      accent: "#f59e0b",
    },
    "teal-orange": {
      filter: "contrast(1.15) saturate(1.25) hue-rotate(15deg)",
      overlay: "from-cyan-500/20 via-orange-500/15 to-transparent",
      badge: "border-cyan-400/40 text-cyan-300 bg-cyan-500/15",
      accent: "#06b6d4",
    },
    cyber: {
      filter: "contrast(1.2) saturate(1.4) hue-rotate(240deg)",
      overlay: "from-purple-500/25 via-pink-500/15 to-transparent",
      badge: "border-fuchsia-400/40 text-fuchsia-300 bg-fuchsia-500/15",
      accent: "#d946ef",
    },
    monochrome: {
      filter: "grayscale(1) contrast(1.25) brightness(1.05)",
      overlay: "from-white/10 via-black/20 to-transparent",
      badge: "border-zinc-400/40 text-zinc-300 bg-zinc-500/15",
      accent: "#e4e4e7",
    },
  }[colorGrade];

  // Dynamic 3D transform computation
  let transform3D = "none";
  if (cameraMode === "isometric") {
    const rx = 12 + (isHovered ? mouseTilt.x * 0.4 : 0);
    const ry = -10 + (isHovered ? mouseTilt.y * 0.4 : 0);
    transform3D = `rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(0deg)`;
  } else if (cameraMode === "perspective") {
    const rx = 8 + (isHovered ? mouseTilt.x * 0.8 : 0);
    const ry = isHovered ? mouseTilt.y * 0.8 : 0;
    transform3D = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  } else {
    transform3D = "rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-[940px] mx-auto mt-8 mb-8 [perspective:1400px] select-none ${className}`}
      style={{ willChange: "transform" }}
    >
      {/* Outer Ambient Atmospheric Glow */}
      <div
        className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-rose-500/15 to-indigo-500/20 rounded-[34px] blur-2xl opacity-60 transition-opacity duration-700 pointer-events-none -z-10"
        style={{
          opacity: isPlaying ? 0.85 : 0.45,
        }}
        aria-hidden="true"
      />

      {/* Main 3D Card Shell with Scoped CC Light Sweep and Glassmorphic transparency */}
      <div
        className="explore-3d-video-card rounded-[26px] sm:rounded-[30px] border border-white/15 bg-[color-mix(in_oklch,var(--tile-background)_72%,transparent)] backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,0.65),0_0_40px_rgba(245,158,11,0.12)] p-3 sm:p-5 transition-transform duration-300 ease-out"
        style={{
          transform: transform3D,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? "0 30px 80px rgba(0, 0, 0, 0.75), 0 0 50px rgba(245, 158, 11, 0.2)"
            : undefined,
        }}
      >
        {/* =========================================================================
            HEADER: Studio Monitor Metadata & 3D Camera Controls
            Elevated at translateZ(35px)
           ========================================================================= */}
        <div
          className="flex flex-wrap items-center justify-between gap-2.5 pb-3.5 mb-3.5 border-b border-white/10"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Project & Format Info */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-400/30 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.25)]">
              <Film size={16} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-100">
                  Sabbir_Sakib_Odyssey_4K.prproj
                </span>
                <span className="hidden sm:inline-flex items-center text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  PRORES 422 HQ
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-zinc-400 font-mono mt-0.5">
                <span>4K DCI (4096×2160)</span>
                <span>·</span>
                <span>60.00 FPS</span>
                <span>·</span>
                <span className="text-amber-300/90 font-medium">Rec.709 Film LUT</span>
              </div>
            </div>
          </div>

          {/* Timecode & 3D Camera Angles */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Drop-Frame Timecode HUD */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/40 border border-white/10 font-mono text-xs sm:text-sm font-semibold tracking-wider text-amber-200 shadow-inner">
              <span
                className={`w-2 h-2 rounded-full ${
                  isPlaying ? "bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" : "bg-zinc-500"
                }`}
              />
              <span>{timecode}</span>
            </div>

            {/* 3D Camera Angle Selector */}
            <div className="flex items-center p-0.5 rounded-lg bg-white/5 border border-white/10">
              <button
                type="button"
                onClick={() => setCameraMode("perspective")}
                title="3D Tilt View"
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  cameraMode === "perspective"
                    ? "bg-amber-500 text-black font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                3D Tilt
              </button>
              <button
                type="button"
                onClick={() => setCameraMode("isometric")}
                title="Isometric Studio View"
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  cameraMode === "isometric"
                    ? "bg-amber-500 text-black font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Isometric
              </button>
              <button
                type="button"
                onClick={() => setCameraMode("flat")}
                title="Flat Cinema View"
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  cameraMode === "flat"
                    ? "bg-amber-500 text-black font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Flat
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CENTER: Holographic 3D Program Monitor & Scopes Pod
            Elevated at translateZ(45px)
           ========================================================================= */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-4"
          style={{ transform: "translateZ(45px)" }}
        >
          {/* Main 16:9 Program Preview Screen */}
          <div className="lg:col-span-9 relative rounded-2xl overflow-hidden bg-black/60 border border-white/15 aspect-video shadow-[0_15px_40px_rgba(0,0,0,0.7)] group">
            {/* Dynamic Animated Motion Art Canvas */}
            <div
              className="absolute inset-0 transition-[filter] duration-500"
              style={{ filter: gradeStyles.filter }}
            >
              {/* Background Celestial / Digital Grid Space */}
              <div className="absolute inset-0 bg-radial from-slate-900 via-neutral-950 to-black" />

              {/* Animated 3D Wireframe Lens Rig / Perspective Plane */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-85"
                aria-hidden="true"
              >
                {/* Concentric Gimbal Rings */}
                <div
                  className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-amber-400/30 transition-transform duration-1000"
                  style={{
                    transform: `rotate(${progress * 3.6}deg) scale(${
                      1 + Math.sin((progress / 100) * Math.PI * 2) * 0.05
                    })`,
                    boxShadow: "0 0 40px rgba(245, 158, 11, 0.15)",
                  }}
                />
                <div
                  className="absolute w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-dashed border-rose-400/35 transition-transform duration-700"
                  style={{
                    transform: `rotate(${-progress * 5.4}deg)`,
                  }}
                />
                <div
                  className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-cyan-400/40"
                  style={{
                    transform: `scale(${0.9 + (progress % 20) * 0.01})`,
                  }}
                />

                {/* Perspective 3D Grid Horizon */}
                <div
                  className="absolute bottom-0 inset-x-0 h-28 opacity-40 bg-[linear-gradient(to_bottom,transparent,rgba(245,158,11,0.2))] [mask-image:linear-gradient(to_top,black,transparent)]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    transform: "perspective(300px) rotateX(60deg)",
                    transformOrigin: "bottom center",
                  }}
                />
              </div>

              {/* Foreground Cinematic Subject: Sabbir Sakib Kinetic Visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-10 pointer-events-none">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-amber-400/40 backdrop-blur-md text-[10px] sm:text-xs text-amber-300 font-mono tracking-widest uppercase mb-2 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  <Sparkles size={12} className="text-amber-400" />
                  <span>3D Motion & Video Direction</span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                  Sabbir Sakib<span className="text-amber-400">.</span>
                </h3>

                <p className="text-[11px] sm:text-xs text-zinc-300 max-w-sm mt-1 font-medium drop-shadow">
                  Creative Editing · Visual Narrative · High-End Post-Production
                </p>

                {/* Live Playhead Progress Indicator inside video */}
                <div className="flex items-center gap-2 mt-3 text-[10px] font-mono text-zinc-400 bg-black/40 px-2.5 py-0.5 rounded border border-white/10">
                  <span className="text-amber-300 font-semibold">{Math.round(progress)}%</span>
                  <span>/</span>
                  <span>Frame {currentFrame}</span>
                  <span>/</span>
                  <span className="text-emerald-400 font-medium">Clean 4K HDR</span>
                </div>
              </div>

              {/* Color Grade Ambient Gradient Layer */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${gradeStyles.overlay} mix-blend-overlay pointer-events-none`}
              />
            </div>

            {/* Safe Margin Crosshairs (Action/Title Safe Guides) */}
            {showGuides && (
              <div className="absolute inset-0 pointer-events-none z-20" aria-hidden="true">
                {/* 90% Action Safe */}
                <div className="absolute inset-[5%] border border-dashed border-cyan-400/35" />
                {/* 80% Title Safe */}
                <div className="absolute inset-[10%] border border-cyan-400/40" />
                {/* Center Crosshair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                  <div className="w-full h-px bg-cyan-400/70" />
                  <div className="absolute h-full w-px bg-cyan-400/70" />
                </div>
              </div>
            )}

            {/* Top-Right HUD Badges */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20">
              <button
                type="button"
                onClick={() => setShowGuides(!showGuides)}
                title="Toggle Safe Margins"
                className={`p-1.5 rounded-md backdrop-blur-md transition-all text-xs ${
                  showGuides
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
                    : "bg-black/50 text-zinc-400 hover:text-white border border-white/10"
                }`}
              >
                <Crosshair size={14} />
              </button>
              <button
                type="button"
                onClick={() => setIsMuted(!isMuted)}
                title={isMuted ? "Unmute" : "Mute"}
                className="p-1.5 rounded-md bg-black/50 text-zinc-300 hover:text-white border border-white/10 backdrop-blur-md transition-all"
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
            </div>

            {/* Bottom-Left Live Recording / Playback Badge */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2 z-20">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/60 border border-white/10 backdrop-blur-md text-[10px] font-mono text-zinc-300">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isPlaying ? "bg-red-500 animate-ping" : "bg-zinc-500"
                  }`}
                />
                <span>{isPlaying ? "PLAYING" : "PAUSED"}</span>
              </div>
            </div>
          </div>

          {/* Right Scopes & Color Grade Inspector Pod */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/10">
            {/* Color Grade / LUT Selector */}
            <div>
              <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-300 mb-2">
                <span className="flex items-center gap-1.5">
                  <Sliders size={13} className="text-amber-400" /> Color Grade (LUT)
                </span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase">{colorGrade}</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {(
                  [
                    { id: "gold", name: "Amber Gold", icon: "✨" },
                    { id: "teal-orange", name: "Teal Orange", icon: "🎬" },
                    { id: "cyber", name: "Cyberpunk", icon: "🔮" },
                    { id: "monochrome", name: "Film Noir", icon: "🎞️" },
                  ] as const
                ).map((grade) => (
                  <button
                    key={grade.id}
                    type="button"
                    onClick={() => setColorGrade(grade.id)}
                    className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-left text-xs font-medium border transition-all ${
                      colorGrade === grade.id
                        ? "bg-amber-500/20 text-amber-200 border-amber-400/50 shadow-[0_0_10px_rgba(245,158,11,0.15)]"
                        : "bg-black/30 text-zinc-400 border-white/5 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <span className="text-xs">{grade.icon}</span>
                    <span className="truncate">{grade.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Stereo Audio VU Meters */}
            <div>
              <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-300 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Activity size={13} className="text-emerald-400" /> Audio Master VU
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  {isMuted ? "MUTED" : "-4.2 dB"}
                </span>
              </div>
              <div className="space-y-1">
                {/* Left Channel */}
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400">
                  <span className="w-3">L</span>
                  <div className="flex-1 h-2 rounded bg-black/50 border border-white/5 overflow-hidden flex">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-rose-500 transition-all duration-100 rounded"
                      style={{
                        width: isMuted ? "0%" : `${isPlaying ? audioPeaks[0] : 15}%`,
                      }}
                    />
                  </div>
                </div>
                {/* Right Channel */}
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-400">
                  <span className="w-3">R</span>
                  <div className="flex-1 h-2 rounded bg-black/50 border border-white/5 overflow-hidden flex">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 via-amber-400 to-rose-500 transition-all duration-100 rounded"
                      style={{
                        width: isMuted ? "0%" : `${isPlaying ? audioPeaks[1] : 12}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Editing Tools Palette */}
            <div>
              <div className="text-[11px] font-semibold text-zinc-300 mb-1.5 flex items-center justify-between">
                <span>Active Tool</span>
                <span className="text-[10px] font-mono text-amber-400">KEY [V/C/B/P]</span>
              </div>
              <div className="grid grid-cols-4 gap-1">
                <button
                  type="button"
                  onClick={() => setActiveTool("select")}
                  title="Selection Tool (V)"
                  className={`p-1.5 rounded flex items-center justify-center text-xs transition-all ${
                    activeTool === "select"
                      ? "bg-amber-500 text-black font-bold shadow"
                      : "bg-black/30 text-zinc-400 hover:text-white"
                  }`}
                >
                  <Compass size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTool("razor")}
                  title="Razor Cut Tool (C)"
                  className={`p-1.5 rounded flex items-center justify-center text-xs transition-all ${
                    activeTool === "razor"
                      ? "bg-amber-500 text-black font-bold shadow"
                      : "bg-black/30 text-zinc-400 hover:text-white"
                  }`}
                >
                  <Scissors size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTool("ripple")}
                  title="Ripple Edit (B)"
                  className={`p-1.5 rounded flex items-center justify-center text-xs transition-all ${
                    activeTool === "ripple"
                      ? "bg-amber-500 text-black font-bold shadow"
                      : "bg-black/30 text-zinc-400 hover:text-white"
                  }`}
                >
                  <ChevronRight size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTool("keyframe")}
                  title="Keyframe Pen (P)"
                  className={`p-1.5 rounded flex items-center justify-center text-xs transition-all ${
                    activeTool === "keyframe"
                      ? "bg-amber-500 text-black font-bold shadow"
                      : "bg-black/30 text-zinc-400 hover:text-white"
                  }`}
                >
                  <span className="text-xs">◆</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM: Multi-Track Timeline & Scrubbable Playhead
            Elevated at translateZ(55px)
           ========================================================================= */}
        <div
          className="rounded-2xl bg-black/45 border border-white/10 p-2.5 sm:p-3.5 shadow-inner"
          style={{ transform: "translateZ(55px)" }}
        >
          {/* Timeline Transport Bar (Controls + Time Ruler) */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-white/10">
            {/* Playback Transport Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setProgress(0)}
                title="Rewind to Start (Home)"
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
              >
                <RotateCcw size={14} />
              </button>
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                title={isPlaying ? "Pause (Space)" : "Play (Space)"}
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.35)] hover:brightness-110 active:scale-95 transition-all"
              >
                {isPlaying ? <Pause size={15} fill="black" /> : <Play size={15} fill="black" />}
              </button>
              <button
                type="button"
                onClick={() => setIsLooping(!isLooping)}
                title="Toggle Sequence Loop"
                className={`p-1.5 rounded-lg transition-colors ${
                  isLooping
                    ? "bg-amber-500/20 text-amber-300 border border-amber-400/30"
                    : "bg-white/5 text-zinc-400 hover:text-white"
                }`}
              >
                <Repeat size={14} />
              </button>
            </div>

            {/* Keyframe Velocity Indicator */}
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-zinc-400">
              <span className="text-zinc-500">SPEED RAMP:</span>
              <span className="text-amber-300 font-medium">100% → 320% → 100% (Ease-InOut)</span>
            </div>

            {/* Sequence Duration */}
            <div className="text-[11px] font-mono text-zinc-400">
              <span>LENGTH: 00:00:12:00</span>
            </div>
          </div>

          {/* Interactive Scrub Timeline Area */}
          <div
            ref={timelineRef}
            onClick={handleTimelineClick}
            className="relative cursor-pointer py-1"
          >
            {/* Time Ruler (Seconds markers) */}
            <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mb-1 px-1">
              <span>00:00</span>
              <span>00:02</span>
              <span>00:04</span>
              <span>00:06</span>
              <span>00:08</span>
              <span>00:10</span>
              <span>00:12</span>
            </div>

            {/* Ruler Ticks */}
            <div className="relative h-2 w-full mb-1.5 bg-white/5 rounded flex justify-between px-0.5">
              {Array.from({ length: 25 }).map((_, idx) => (
                <div
                  key={idx}
                  className={`w-px ${idx % 4 === 0 ? "h-2 bg-zinc-400" : "h-1 bg-zinc-700"}`}
                />
              ))}
            </div>

            {/* Timeline Tracks Stack */}
            <div className="space-y-1.5 relative">
              {/* Track V2: Overlay / VFX / Lower Third */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedTrack("v2");
                }}
                className={`relative h-6 sm:h-7 rounded-md border flex items-center px-2 transition-all ${
                  selectedTrack === "v2"
                    ? "border-amber-400/50 bg-amber-500/10 shadow-[0_0_10px_rgba(245,158,11,0.1)]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <span className="text-[10px] font-mono font-bold text-amber-400 w-7">V2</span>
                <div className="flex-1 relative h-full flex items-center">
                  {/* Clip 1: Title Card */}
                  <div className="absolute left-[15%] w-[45%] h-5 rounded bg-gradient-to-r from-amber-600/40 via-orange-500/40 to-amber-600/40 border border-amber-400/40 flex items-center justify-between px-2 text-[10px] font-mono text-amber-200">
                    <span className="truncate">Title_Sabbir_Sakib_3D.aep</span>
                    <span className="text-amber-300">◆ ◆</span>
                  </div>
                </div>
              </div>

              {/* Track V1: Primary Video Footage with Editorial Cuts */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedTrack("v1");
                }}
                className={`relative h-8 sm:h-9 rounded-md border flex items-center px-2 transition-all ${
                  selectedTrack === "v1"
                    ? "border-indigo-400/50 bg-indigo-500/10 shadow-[0_0_10px_rgba(99,102,241,0.1)]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <span className="text-[10px] font-mono font-bold text-indigo-400 w-7">V1</span>
                <div className="flex-1 relative h-full flex items-center gap-1">
                  {/* Clip A */}
                  <div className="w-[32%] h-6 sm:h-7 rounded bg-indigo-600/40 border border-indigo-400/40 flex items-center justify-between px-2 text-[10px] font-mono text-indigo-200">
                    <span className="truncate">Scene01_DeepSpace.mov</span>
                    <span className="text-[9px] opacity-75">3.8s</span>
                  </div>
                  {/* Transition: Cross Dissolve */}
                  <div className="w-[5%] h-5 rounded bg-amber-500/30 border border-amber-400/50 flex items-center justify-center text-[8px] font-mono text-amber-200">
                    ✕
                  </div>
                  {/* Clip B */}
                  <div className="w-[38%] h-6 sm:h-7 rounded bg-violet-600/40 border border-violet-400/40 flex items-center justify-between px-2 text-[10px] font-mono text-violet-200">
                    <span className="truncate">Scene02_CreativeOdyssey.mov</span>
                    <span className="text-[9px] opacity-75">4.5s</span>
                  </div>
                  {/* Clip C */}
                  <div className="flex-1 h-6 sm:h-7 rounded bg-rose-600/40 border border-rose-400/40 flex items-center justify-between px-2 text-[10px] font-mono text-rose-200">
                    <span className="truncate">Scene03_Outro_4K.mov</span>
                    <span className="text-[9px] opacity-75">3.7s</span>
                  </div>
                </div>
              </div>

              {/* Track A1: Audio Waveform Track */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedTrack("a1");
                }}
                className={`relative h-6 sm:h-7 rounded-md border flex items-center px-2 transition-all ${
                  selectedTrack === "a1"
                    ? "border-emerald-400/50 bg-emerald-500/10 shadow-[0_0_10px_rgba(16,185,129,0.1)]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <span className="text-[10px] font-mono font-bold text-emerald-400 w-7">A1</span>
                <div className="flex-1 relative h-full flex items-center">
                  <div className="w-full h-4 sm:h-5 rounded bg-emerald-950/40 border border-emerald-500/30 flex items-center px-1.5 overflow-hidden">
                    {/* Dynamic Simulated Audio Waveform Peaks */}
                    <div className="flex items-center gap-0.5 w-full h-full">
                      {Array.from({ length: 48 }).map((_, i) => {
                        const baseHeight = ((i * 17) % 100) / 100;
                        const dynamicMultiplier =
                          isPlaying && !isMuted ? 0.7 + Math.sin(progress / 10 + i) * 0.3 : 0.6;
                        const heightPct = Math.max(
                          20,
                          Math.min(95, baseHeight * dynamicMultiplier * 100),
                        );
                        return (
                          <div
                            key={i}
                            className="flex-1 rounded-full bg-emerald-400/70 transition-all duration-75"
                            style={{ height: `${heightPct}%` }}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing Red/Golden Playhead Needle */}
            <div
              className="absolute top-0 bottom-0 pointer-events-none z-30 transition-[left] ease-linear"
              style={{
                left: `${progress}%`,
                transitionDuration: isPlaying ? "50ms" : "0ms",
              }}
            >
              {/* Playhead Top Diamond Flag */}
              <div className="absolute -top-1.5 -left-2 w-4 h-3 bg-red-500 border border-white/60 rounded-xs flex items-center justify-center shadow-[0_0_10px_#ef4444]">
                <div className="w-1 h-1 bg-white rounded-full" />
              </div>
              {/* Vertical Laser Needle */}
              <div className="w-0.5 h-full bg-gradient-to-b from-red-500 via-amber-400 to-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
            </div>
          </div>
        </div>

        {/* Footnote / Quick Interaction Helper */}
        <div
          className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-2 text-[11px] text-zinc-400"
          style={{ transform: "translateZ(25px)" }}
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>
              Interactive 3D timeline: hover to tilt, click ruler to scrub, switch color grades
              above.
            </span>
          </div>
          <div className="font-mono text-[10px] text-zinc-500">
            RENDER ENGINE: GPU ACCELERATED · 60 FPS
          </div>
        </div>
      </div>
    </div>
  );
}
