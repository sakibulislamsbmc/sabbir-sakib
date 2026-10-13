import { useId } from "react";

export function SpaceMotionOverlay() {
  const filterId = useId().replace(/:/g, "");

  return (
    <div
      className="space-motion-overlay pointer-events-none select-none absolute inset-0 z-[-1] overflow-hidden"
      aria-hidden="true"
    >
      {/* Ambient Deep Space Nebula Back-glows */}
      <div className="absolute top-[6%] left-[10%] w-[380px] h-[300px] rounded-full bg-gradient-to-tr from-cyan-950/20 via-indigo-950/15 to-transparent blur-[95px] animate-nebula-pulse-slow" />
      <div className="absolute top-[32%] right-[8%] w-[420px] h-[320px] rounded-full bg-gradient-to-bl from-purple-950/20 via-amber-950/10 to-transparent blur-[105px] animate-nebula-pulse-alt" />

      {/* =========================================================================
          Element 1: Abstract 3D Design Geometry & Bezier Spline (Upper-Right)
          ========================================================================= */}
      <div className="absolute top-[10%] right-[6%] md:right-[11%] w-[190px] h-[190px] md:w-[250px] md:h-[250px] animate-tech-drift-geometry opacity-35">
        <svg
          viewBox="0 0 280 280"
          className="w-full h-full drop-shadow-[0_0_25px_rgba(56,189,248,0.2)]"
        >
          <defs>
            <linearGradient id={`geom-grad-${filterId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id={`spline-grad-${filterId}`} x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.15)" />
              <stop offset="50%" stopColor="rgba(192, 132, 252, 0.7)" />
              <stop offset="100%" stopColor="rgba(245, 158, 11, 0.8)" />
            </linearGradient>
          </defs>

          {/* Ambient Glow Aura */}
          <circle cx="140" cy="140" r="105" fill="rgba(99, 102, 241, 0.05)" />

          {/* 3D Isometric Wireframe Cube Frame */}
          <g transform="translate(140, 130)">
            {/* Top Face */}
            <polygon
              points="0,-50 48,-24 0,2 -48,-24"
              fill="rgba(56, 189, 248, 0.06)"
              stroke={`url(#geom-grad-${filterId})`}
              strokeWidth="1.5"
            />
            {/* Left Face */}
            <polygon
              points="-48,-24 0,2 0,56 -48,30"
              fill="rgba(99, 102, 241, 0.08)"
              stroke={`url(#geom-grad-${filterId})`}
              strokeWidth="1.5"
            />
            {/* Right Face */}
            <polygon
              points="0,2 48,-24 48,30 0,56"
              fill="rgba(245, 158, 11, 0.05)"
              stroke={`url(#geom-grad-${filterId})`}
              strokeWidth="1.5"
            />

            {/* Inner Nested Wireframe Projection */}
            <polygon
              points="0,-25 24,-12 0,1 -24,-12"
              fill="none"
              stroke="rgba(255, 255, 255, 0.35)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            <line
              x1="0"
              y1="1"
              x2="0"
              y2="28"
              stroke="rgba(255, 255, 255, 0.35)"
              strokeWidth="1"
              strokeDasharray="3 3"
            />

            {/* Vertex Nodes */}
            <circle cx="0" cy="-50" r="2.5" fill="#38bdf8" />
            <circle cx="48" cy="-24" r="2.5" fill="#818cf8" />
            <circle cx="-48" cy="-24" r="2.5" fill="#818cf8" />
            <circle cx="0" cy="2" r="3" fill="#ffffff" />
            <circle cx="0" cy="56" r="2.5" fill="#f59e0b" />
          </g>

          {/* Orbiting Curved Bezier Spline Ribbons */}
          <path
            d="M 30,170 C 60,70 190,50 250,140 C 270,170 230,220 170,230 C 100,240 60,200 90,130"
            fill="none"
            stroke={`url(#spline-grad-${filterId})`}
            strokeWidth="1.5"
            strokeDasharray="5 3"
          />
          {/* Spline Anchor Diamond */}
          <rect
            x="248"
            y="138"
            width="5"
            height="5"
            transform="rotate(45 250.5 140.5)"
            fill="#f59e0b"
          />
        </svg>
      </div>

      {/* =========================================================================
          Element 2: AI & Web Dev Workflow Nodes / Neural Graph (Upper-Left)
          ========================================================================= */}
      <div className="absolute top-[16%] left-[4%] md:left-[8%] w-[210px] h-[190px] md:w-[260px] md:h-[230px] animate-tech-drift-nodes opacity-30">
        <svg
          viewBox="0 0 280 240"
          className="w-full h-full drop-shadow-[0_0_20px_rgba(168,85,247,0.2)]"
        >
          <defs>
            <linearGradient id={`node-link-${filterId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.4)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" />
              <stop offset="100%" stopColor="rgba(244, 63, 94, 0.4)" />
            </linearGradient>
          </defs>

          {/* Interconnecting Neural Synapse Link Lines */}
          <line
            x1="120"
            y1="110"
            x2="55"
            y2="50"
            stroke={`url(#node-link-${filterId})`}
            strokeWidth="1.2"
          />
          <line
            x1="120"
            y1="110"
            x2="210"
            y2="60"
            stroke={`url(#node-link-${filterId})`}
            strokeWidth="1.2"
          />
          <line
            x1="120"
            y1="110"
            x2="175"
            y2="185"
            stroke={`url(#node-link-${filterId})`}
            strokeWidth="1.2"
          />
          <line
            x1="120"
            y1="110"
            x2="50"
            y2="170"
            stroke={`url(#node-link-${filterId})`}
            strokeWidth="1.2"
          />

          {/* Central AI Logic Core Node */}
          <g transform="translate(120, 110)">
            <circle cx="0" cy="0" r="22" fill="rgba(15, 23, 42, 0.85)" />
            <circle
              cx="0"
              cy="0"
              r="22"
              fill="none"
              stroke="#a855f7"
              strokeWidth="1.5"
              className="animate-spin-slow"
              strokeDasharray="6 3"
            />
            <circle cx="0" cy="0" r="10" fill="rgba(168, 85, 247, 0.25)" />
            <text
              x="0"
              y="3.5"
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="8"
              fontFamily="monospace"
              fontWeight="bold"
            >
              AI
            </text>
          </g>

          {/* Satellite 1: Code Syntax Chip (HTML/React Tag) */}
          <g transform="translate(45, 40)">
            <rect
              x="-35"
              y="-12"
              width="70"
              height="24"
              rx="6"
              fill="rgba(15, 23, 42, 0.75)"
              stroke="rgba(56, 189, 248, 0.5)"
              strokeWidth="1"
            />
            <circle cx="-25" cy="0" r="2" fill="#38bdf8" />
            <text
              x="2"
              y="3.5"
              textAnchor="middle"
              fill="#bae6fd"
              fontSize="8"
              fontFamily="monospace"
            >
              &lt;App /&gt;
            </text>
          </g>

          {/* Satellite 2: Workflow State Chip */}
          <g transform="translate(210, 52)">
            <rect
              x="-38"
              y="-12"
              width="76"
              height="24"
              rx="6"
              fill="rgba(15, 23, 42, 0.75)"
              stroke="rgba(244, 63, 94, 0.45)"
              strokeWidth="1"
            />
            <circle cx="-28" cy="0" r="2" fill="#f43f5e" />
            <text
              x="3"
              y="3.5"
              textAnchor="middle"
              fill="#fecdd3"
              fontSize="8"
              fontFamily="monospace"
            >
              build: 200
            </text>
          </g>

          {/* Satellite 3: Data Schema Chip */}
          <g transform="translate(175, 185)">
            <rect
              x="-32"
              y="-11"
              width="64"
              height="22"
              rx="6"
              fill="rgba(15, 23, 42, 0.75)"
              stroke="rgba(245, 158, 11, 0.45)"
              strokeWidth="1"
            />
            <text
              x="0"
              y="3"
              textAnchor="middle"
              fill="#fde68a"
              fontSize="7.5"
              fontFamily="monospace"
            >
              {"{ schema }"}
            </text>
          </g>

          {/* Satellite 4: Logic Loop Node */}
          <g transform="translate(50, 170)">
            <circle cx="0" cy="0" r="14" fill="rgba(15, 23, 42, 0.75)" />
            <circle
              cx="0"
              cy="0"
              r="14"
              fill="none"
              stroke="rgba(56, 189, 248, 0.4)"
              strokeWidth="1"
            />
            <text
              x="0"
              y="2.5"
              textAnchor="middle"
              fill="#93c5fd"
              fontSize="7"
              fontFamily="monospace"
            >
              sync()
            </text>
          </g>
        </svg>
      </div>

      {/* =========================================================================
          Element 3: Modern Video Editing Artifact (Timeline & Keyframes) (Center-Right)
          ========================================================================= */}
      <div className="absolute top-[35%] right-[4%] md:right-[9%] w-[220px] h-[100px] md:w-[270px] md:h-[120px] animate-tech-drift-timeline opacity-28">
        <svg
          viewBox="0 0 280 120"
          className="w-full h-full drop-shadow-[0_0_20px_rgba(245,158,11,0.15)]"
        >
          {/* Timeline Panel Frame */}
          <rect
            x="5"
            y="5"
            width="270"
            height="110"
            rx="12"
            fill="rgba(10, 14, 22, 0.75)"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1"
          />

          {/* Timeline Header Bar */}
          <rect x="5" y="5" width="270" height="22" rx="12" fill="rgba(255, 255, 255, 0.04)" />
          <text
            x="20"
            y="19"
            fill="rgba(255, 255, 255, 0.55)"
            fontSize="8"
            fontFamily="monospace"
            letterSpacing="1"
          >
            TIMELINE / 00:14:28:06
          </text>

          {/* Playhead Timecode ruler ticks */}
          <line
            x1="20"
            y1="26"
            x2="260"
            y2="26"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
          <line x1="50" y1="24" x2="50" y2="28" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
          <line x1="90" y1="24" x2="90" y2="28" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
          <line
            x1="130"
            y1="24"
            x2="130"
            y2="28"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1"
          />
          <line
            x1="170"
            y1="24"
            x2="170"
            y2="28"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1"
          />
          <line
            x1="210"
            y1="24"
            x2="210"
            y2="28"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1"
          />

          {/* Track 1: Video Clip Strip */}
          <rect
            x="20"
            y="36"
            width="120"
            height="18"
            rx="4"
            fill="rgba(99, 102, 241, 0.22)"
            stroke="rgba(129, 140, 248, 0.45)"
            strokeWidth="1"
          />
          <text x="26" y="48" fill="#c7d2fe" fontSize="7" fontFamily="sans-serif">
            Clip_01.mp4
          </text>
          <rect
            x="146"
            y="36"
            width="90"
            height="18"
            rx="4"
            fill="rgba(244, 63, 94, 0.2)"
            stroke="rgba(251, 113, 133, 0.4)"
            strokeWidth="1"
          />

          {/* Track 2: Keyframe Motion Track */}
          <rect
            x="20"
            y="62"
            width="220"
            height="16"
            rx="4"
            fill="rgba(255, 255, 255, 0.02)"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1"
          />
          {/* Motion Bézier Curve inside track */}
          <path
            d="M 30,73 C 60,73 80,65 110,65 C 140,65 160,72 200,72"
            fill="none"
            stroke="rgba(245, 158, 11, 0.6)"
            strokeWidth="1.2"
          />

          {/* Diamond Keyframe Nodes (◆) */}
          <polygon points="30,69 34,73 30,77 26,73" fill="#f59e0b" />
          <polygon points="110,61 114,65 110,69 106,65" fill="#f59e0b" />
          <polygon points="200,68 204,72 200,76 196,72" fill="#f59e0b" />

          {/* Track 3: Audio Waveform Line */}
          <path
            d="M 20,95 Q 35,88 50,95 T 80,95 T 110,95 T 140,95 T 170,95 T 200,95 T 240,95"
            fill="none"
            stroke="rgba(56, 189, 248, 0.35)"
            strokeWidth="1.2"
          />

          {/* Vertical Playhead Scrubber Needle */}
          <line
            x1="110"
            y1="22"
            x2="110"
            y2="105"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeDasharray="none"
          />
          <polygon points="106,20 114,20 110,27" fill="#ef4444" />
        </svg>
      </div>

      {/* =========================================================================
          Atmospheric Stars & Cosmic Dust (Subtle Depth)
          ========================================================================= */}
      <div className="absolute inset-0 animate-stars-parallax-slow">
        <svg className="w-full h-full opacity-65" preserveAspectRatio="none">
          <circle cx="8%" cy="18%" r="1.4" fill="#ffffff" className="animate-star-twinkle-1" />
          <circle cx="16%" cy="26%" r="1.8" fill="#ffffff" className="animate-star-twinkle-2" />
          <circle cx="28%" cy="14%" r="1.2" fill="#bae6fd" className="animate-star-twinkle-3" />
          <circle cx="42%" cy="22%" r="1.6" fill="#fef08a" className="animate-star-twinkle-1" />
          <circle cx="56%" cy="12%" r="2.0" fill="#ffffff" className="animate-star-twinkle-2" />
          <circle cx="72%" cy="26%" r="1.4" fill="#e0e7ff" className="animate-star-twinkle-3" />
          <circle cx="86%" cy="18%" r="1.8" fill="#ffffff" className="animate-star-twinkle-1" />
          <circle cx="94%" cy="28%" r="1.2" fill="#fde68a" className="animate-star-twinkle-2" />

          {/* Subtle lower depth stars */}
          <circle cx="14%" cy="65%" r="1.3" fill="#ffffff" className="animate-star-twinkle-2" />
          <circle cx="32%" cy="74%" r="1.6" fill="#fef9c3" className="animate-star-twinkle-3" />
          <circle cx="58%" cy="68%" r="1.2" fill="#e0f2fe" className="animate-star-twinkle-1" />
          <circle cx="78%" cy="76%" r="1.5" fill="#ffffff" className="animate-star-twinkle-2" />
          <circle cx="92%" cy="64%" r="1.2" fill="#e0e7ff" className="animate-star-twinkle-3" />
        </svg>
      </div>
    </div>
  );
}
