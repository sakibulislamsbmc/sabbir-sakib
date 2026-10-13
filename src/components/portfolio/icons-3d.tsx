import { useId } from "react";

interface Icon3DProps {
  className?: string;
}

/**
 * 3D Isometric Graphic Design Icon
 * Features:
 * - 3D angled digital pen/stylus with glowing vector nib
 * - Bezier curve spline with anchor points and tangent handles
 * - Floating isometric acrylic color palette swatches
 * - Specular bevel highlights and soft ambient shadow
 */
export function Icon3DGraphicDesign({ className = "w-20 h-20" }: Icon3DProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D Graphic Design Icon"
    >
      <defs>
        {/* Gradients for Stylus Body */}
        <linearGradient id={`pen-body-top-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id={`pen-body-side-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#082f49" />
        </linearGradient>
        <linearGradient id={`pen-nib-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        {/* Gradients for Floating Swatches */}
        <linearGradient id={`swatch-1-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#7e22ce" />
        </linearGradient>
        <linearGradient id={`swatch-2-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id={`swatch-3-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>

        {/* Glow and Drop Shadow filters */}
        <filter id={`glow-gd-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id={`shadow-gd-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0284c7" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Ambient background glow circle */}
      <circle cx="80" cy="80" r="58" fill="url(#pen-body-top-)" fillOpacity="0.08" />

      {/* Floating 3D Color Swatch Plates */}
      {/* Swatch 1 (Purple) */}
      <g transform="translate(18, 92)" className="transition-transform duration-300">
        {/* 3D Isometric Plate */}
        <polygon points="14,0 28,7 14,14 0,7" fill={`url(#swatch-1-${uid})`} opacity="0.9" />
        <polygon points="0,7 14,14 14,18 0,11" fill="#581c87" opacity="0.95" />
        <polygon points="28,7 14,14 14,18 28,11" fill="#6b21a8" opacity="0.95" />
        <circle cx="14" cy="7" r="2.5" fill="#ffffff" opacity="0.8" />
      </g>

      {/* Swatch 2 (Gold) */}
      <g transform="translate(36, 102)">
        <polygon points="14,0 28,7 14,14 0,7" fill={`url(#swatch-2-${uid})`} opacity="0.95" />
        <polygon points="0,7 14,14 14,18 0,11" fill="#92400e" opacity="0.95" />
        <polygon points="28,7 14,14 14,18 28,11" fill="#b45309" opacity="0.95" />
        <circle cx="14" cy="7" r="2.5" fill="#ffffff" opacity="0.8" />
      </g>

      {/* Swatch 3 (Emerald) */}
      <g transform="translate(56, 112)">
        <polygon points="14,0 28,7 14,14 0,7" fill={`url(#swatch-3-${uid})`} opacity="0.95" />
        <polygon points="0,7 14,14 14,18 0,11" fill="#065f46" opacity="0.95" />
        <polygon points="28,7 14,14 14,18 28,11" fill="#047857" opacity="0.95" />
        <circle cx="14" cy="7" r="2.5" fill="#ffffff" opacity="0.8" />
      </g>

      {/* Bezier Vector Spline Line */}
      <path
        d="M 24,54 C 50,18 110,22 136,68"
        stroke="#38bdf8"
        strokeWidth="2.5"
        strokeDasharray="4 3"
        fill="none"
        opacity="0.8"
      />

      {/* Vector Anchor Points with Handles */}
      <line x1="16" y1="62" x2="36" y2="44" stroke="#a855f7" strokeWidth="1.5" opacity="0.7" />
      <circle cx="16" cy="62" r="3" fill="#a855f7" />
      <circle cx="36" cy="44" r="3" fill="#a855f7" />

      {/* Anchor Point Diamond */}
      <rect
        x="21"
        y="50"
        width="7"
        height="7"
        transform="rotate(45 24 54)"
        fill="#ffffff"
        stroke="#0284c7"
        strokeWidth="1.5"
      />

      {/* End Vector Diamond */}
      <rect
        x="132"
        y="64"
        width="8"
        height="8"
        transform="rotate(45 136 68)"
        fill="#34d399"
        stroke="#ffffff"
        strokeWidth="1.5"
      />

      {/* 3D Stylus / Pen Tool Body (Tilted 45 degrees) */}
      <g filter={`url(#shadow-gd-${uid})`}>
        {/* Main Shaft (3D facets) */}
        {/* Top glossy facet */}
        <polygon points="88,24 102,38 64,88 52,76" fill={`url(#pen-body-top-${uid})`} />
        {/* Bottom dark facet for 3D depth */}
        <polygon points="52,76 64,88 56,98 44,86" fill={`url(#pen-body-side-${uid})`} />
        {/* Side facet */}
        <polygon points="102,38 108,44 70,94 64,88" fill="#075985" />

        {/* Specular Highlight Strip */}
        <line
          x1="87"
          y1="27"
          x2="55"
          y2="78"
          stroke="rgba(255, 255, 255, 0.7)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Metallic Collar Ring */}
        <polygon points="52,76 64,88 59,94 47,82" fill="#e2e8f0" />
        <polygon points="47,82 59,94 56,98 44,86" fill="#94a3b8" />

        {/* Glowing 3D Pen Nib */}
        <polygon points="47,82 59,94 42,108 38,104" fill={`url(#pen-nib-${uid})`} />
        <polygon points="44,86 47,82 38,104 36,101" fill="#047857" />

        {/* Ultra-bright Stylus Tip Beam */}
        <circle cx="37" cy="106" r="3" fill="#ffffff" filter={`url(#glow-gd-${uid})`} />
        <circle cx="37" cy="106" r="1.5" fill="#34d399" />
      </g>

      {/* Floating Sparkles */}
      <path
        d="M 120,30 L 122,36 L 128,38 L 122,40 L 120,46 L 118,40 L 112,38 L 118,36 Z"
        fill="#fcd34d"
        opacity="0.9"
      />
      <circle cx="106" cy="116" r="2" fill="#38bdf8" opacity="0.75" />
    </svg>
  );
}

/**
 * 3D Isometric Video Editing Icon
 * Features:
 * - 3D angled cinematic clapperboard with chevron stripes
 * - Floating glassmorphic 3D Play button prism with radiant bevels
 * - Film strip ribbon with perforation holes orbiting in 3D
 * - Glowing keyframe diamond timeline nodes
 */
export function Icon3DVideoEditing({ className = "w-20 h-20" }: Icon3DProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D Video Editing Icon"
    >
      <defs>
        {/* Gradients for Clapperboard */}
        <linearGradient id={`clap-face-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id={`clap-stripe-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fbbf24" />
        </linearGradient>

        {/* 3D Play Button Prism Gradients */}
        <linearGradient id={`play-prism-top-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <linearGradient id={`play-prism-side-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#be123c" />
          <stop offset="100%" stopColor="#831843" />
        </linearGradient>

        {/* Film Ribbon Gradient */}
        <linearGradient id={`film-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(244, 63, 94, 0.2)" />
          <stop offset="50%" stopColor="rgba(251, 146, 60, 0.7)" />
          <stop offset="100%" stopColor="rgba(245, 158, 11, 0.85)" />
        </linearGradient>

        {/* Shadow */}
        <filter id={`shadow-ve-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="7" floodColor="#f43f5e" floodOpacity="0.3" />
        </filter>
        <filter id={`glow-ve-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient background glow */}
      <circle cx="80" cy="80" r="56" fill="#f43f5e" fillOpacity="0.08" />

      {/* Orbiting Curved Film Strip Ribbon */}
      <path
        d="M 20,118 C 30,50 90,30 142,48 C 150,86 112,136 50,132"
        stroke={`url(#film-grad-${uid})`}
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
      {/* Film Perforations on Ribbon */}
      <circle cx="40" cy="74" r="2" fill="#ffffff" opacity="0.8" />
      <circle cx="62" cy="48" r="2" fill="#ffffff" opacity="0.8" />
      <circle cx="88" cy="38" r="2" fill="#ffffff" opacity="0.8" />
      <circle cx="114" cy="42" r="2" fill="#ffffff" opacity="0.8" />
      <circle cx="132" cy="62" r="2" fill="#ffffff" opacity="0.8" />
      <circle cx="120" cy="98" r="2" fill="#ffffff" opacity="0.8" />

      {/* 3D Clapperboard Base (Tilted Isometric) */}
      <g filter={`url(#shadow-ve-${uid})`} transform="translate(10, 8)">
        {/* Main Slate Body Top */}
        <polygon
          points="26,60 106,34 116,92 36,118"
          fill={`url(#clap-face-${uid})`}
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.2"
        />
        {/* Right side 3D extrusion */}
        <polygon points="106,34 116,92 120,90 110,32" fill="#090d16" />
        {/* Bottom 3D extrusion */}
        <polygon points="36,118 116,92 120,90 40,116" fill="#030712" />

        {/* Clapperboard Slate Content / Track Lines */}
        <line x1="44" y1="84" x2="98" y2="66" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        <line x1="48" y1="96" x2="84" y2="84" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

        {/* Angled Upper Clapper Stick */}
        <g transform="rotate(-14 26 60)">
          {/* Stick body */}
          <polygon
            points="24,44 104,18 108,30 28,56"
            fill="#111827"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
          {/* Chevron Yellow Stripes */}
          <polygon points="38,39 48,36 42,51 32,54" fill={`url(#clap-stripe-${uid})`} />
          <polygon points="56,33 66,30 60,45 50,48" fill={`url(#clap-stripe-${uid})`} />
          <polygon points="74,27 84,24 78,39 68,42" fill={`url(#clap-stripe-${uid})`} />
          <polygon points="92,21 102,18 96,33 86,36" fill={`url(#clap-stripe-${uid})`} />
          {/* Hinge Pin */}
          <circle cx="28" cy="50" r="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
        </g>
      </g>

      {/* Floating 3D Play Button Prism (Centerpiece) */}
      <g filter={`url(#glow-ve-${uid})`} transform="translate(68, 62)">
        {/* Back Ambient Halo */}
        <polygon points="0,-16 26,0 0,16" fill="#f43f5e" opacity="0.4" filter="blur(4px)" />

        {/* 3D Play Triangle Top Face */}
        <polygon
          points="0,-14 24,0 0,14"
          fill={`url(#play-prism-top-${uid})`}
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1"
        />
        {/* 3D Play Bottom Bevel */}
        <polygon points="0,14 24,0 24,5 0,19" fill={`url(#play-prism-side-${uid})`} />
        {/* Specular White Highlight on Edge */}
        <line
          x1="0"
          y1="-14"
          x2="24"
          y2="0"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Center Bright Sparkle */}
        <circle cx="8" cy="0" r="2.5" fill="#ffffff" opacity="0.9" />
      </g>

      {/* Timeline Keyframe Diamond Nodes */}
      <rect
        x="126"
        y="108"
        width="8"
        height="8"
        transform="rotate(45 130 112)"
        fill="#fbbf24"
        stroke="#ffffff"
        strokeWidth="1.5"
      />
      <rect
        x="24"
        y="124"
        width="6"
        height="6"
        transform="rotate(45 27 127)"
        fill="#f43f5e"
        stroke="#ffffff"
        strokeWidth="1"
      />
    </svg>
  );
}

/**
 * 3D Isometric Web App Icon
 * Features:
 * - 3D isometric browser window with rounded corners and control buttons
 * - Floating `< / >` glowing code tags with neon emerald radiance
 * - Stacked isometric application UI cards / data layers
 * - Interactive node ports and gridlines
 */
export function Icon3DWebApp({ className = "w-20 h-20" }: Icon3DProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D Web App Icon"
    >
      <defs>
        {/* Browser Pane Gradients */}
        <linearGradient id={`browser-face-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#022c22" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id={`code-glow-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="50%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>

        {/* 3D Stack Layer Gradients */}
        <linearGradient id={`layer-top-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id={`layer-side-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>

        {/* Shadow & Glow */}
        <filter id={`shadow-wa-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#10b981" floodOpacity="0.3" />
        </filter>
        <filter id={`glow-wa-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient background glow */}
      <circle cx="80" cy="80" r="56" fill="#10b981" fillOpacity="0.08" />

      {/* 3D Isometric Base Plane Grid */}
      <g opacity="0.3" stroke="#34d399" strokeWidth="0.8">
        <line x1="30" y1="120" x2="80" y2="146" />
        <line x1="80" y1="146" x2="130" y2="120" />
        <line x1="130" y1="120" x2="80" y2="94" />
        <line x1="80" y1="94" x2="30" y2="120" />
      </g>

      {/* 3D Isometric Stacked Layers (Lower foundation) */}
      <g transform="translate(80, 115)">
        {/* Bottom card top face */}
        <polygon
          points="0,-16 38,4 0,24 -38,4"
          fill="rgba(16, 185, 129, 0.15)"
          stroke="rgba(52, 211, 153, 0.4)"
          strokeWidth="1"
        />
        {/* Extrusion sides */}
        <polygon points="-38,4 0,24 0,30 -38,10" fill="#064e3b" opacity="0.8" />
        <polygon points="38,4 0,24 0,30 38,10" fill="#047857" opacity="0.8" />
      </g>

      {/* 3D Isometric Browser Window Frame */}
      <g filter={`url(#shadow-wa-${uid})`}>
        {/* Main Isometric Pane */}
        {/* Top Face */}
        <polygon
          points="80,24 136,52 136,98 80,126 24,98 24,52"
          fill={`url(#browser-face-${uid})`}
          stroke="rgba(52, 211, 153, 0.5)"
          strokeWidth="1.5"
        />

        {/* 3D Extrusion Side Left */}
        <polygon points="24,98 80,126 80,132 24,104" fill="#022c22" />
        {/* 3D Extrusion Side Right */}
        <polygon points="136,98 80,126 80,132 136,104" fill="#064e3b" />

        {/* Header Tab Bar Separator Line */}
        <line x1="36" y1="58" x2="124" y2="58" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

        {/* Window Control Dots (3D bevels) */}
        <circle cx="44" cy="48" r="3" fill="#f43f5e" />
        <circle cx="53" cy="49" r="3" fill="#f59e0b" />
        <circle cx="62" cy="50" r="3" fill="#10b981" />

        {/* Address Bar Pill (Isometric) */}
        <rect
          x="74"
          y="45"
          width="44"
          height="8"
          rx="4"
          fill="rgba(255, 255, 255, 0.08)"
          stroke="rgba(255, 255, 255, 0.15)"
          strokeWidth="0.8"
        />

        {/* Floating Glowing Code Tag `< / >` */}
        <g filter={`url(#glow-wa-${uid})`}>
          {/* `<` Bracket */}
          <path
            d="M 64,80 L 52,90 L 64,100"
            stroke={`url(#code-glow-${uid})`}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* `/` Slash */}
          <line
            x1="86"
            y1="74"
            x2="74"
            y2="106"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* `>` Bracket */}
          <path
            d="M 96,80 L 108,90 L 96,100"
            stroke={`url(#code-glow-${uid})`}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Specular Edge Highlight */}
        <line
          x1="80"
          y1="25"
          x2="135"
          y2="53"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </g>

      {/* Floating Interactive Micro-Nodes */}
      <circle cx="122" cy="74" r="3" fill="#38bdf8" filter={`url(#glow-wa-${uid})`} />
      <circle cx="38" cy="88" r="2.5" fill="#34d399" />
    </svg>
  );
}

/**
 * 3D Isometric Others Icon
 * Features:
 * - 3D multi-faceted polyhedral crystal / spatial gemstone
 * - Iridescent facets with chromatic light reflection
 * - Floating gyroscopic orbital ring
 * - Sparkling stellar nodes and cosmic dust
 */
export function Icon3DOthers({ className = "w-20 h-20" }: Icon3DProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D Others Icon"
    >
      <defs>
        {/* Gemstone Facet Gradients */}
        <linearGradient id={`facet-top-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id={`facet-left-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
        <linearGradient id={`facet-right-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d946ef" />
          <stop offset="100%" stopColor="#a21caf" />
        </linearGradient>
        <linearGradient id={`facet-bottom-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>

        {/* Orbit Ring Gradient */}
        <linearGradient id={`ring-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(245, 158, 11, 0.2)" />
          <stop offset="50%" stopColor="rgba(236, 72, 153, 0.8)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.9)" />
        </linearGradient>

        {/* Shadow & Glow */}
        <filter id={`shadow-ot-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#ec4899" floodOpacity="0.35" />
        </filter>
        <filter id={`glow-ot-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient background glow */}
      <circle cx="80" cy="80" r="56" fill="#ec4899" fillOpacity="0.08" />

      {/* Back Half of Orbiting Ring */}
      <ellipse
        cx="80"
        cy="80"
        rx="58"
        ry="22"
        transform="rotate(-24 80 80)"
        stroke={`url(#ring-grad-${uid})`}
        strokeWidth="2.5"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.5"
      />

      {/* 3D Multi-Faceted Crystal Gemstone */}
      <g filter={`url(#shadow-ot-${uid})`}>
        {/* Top Apex Facet */}
        <polygon
          points="80,26 108,60 80,72 52,60"
          fill={`url(#facet-top-${uid})`}
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1"
        />

        {/* Left Side Facet */}
        <polygon
          points="52,60 80,72 80,122 40,86"
          fill={`url(#facet-left-${uid})`}
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1"
        />

        {/* Right Side Facet */}
        <polygon
          points="80,72 108,60 120,86 80,122"
          fill={`url(#facet-right-${uid})`}
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1"
        />

        {/* Center Triangular Highlight Facet */}
        <polygon
          points="80,72 96,86 80,110 64,86"
          fill="rgba(255, 255, 255, 0.18)"
          stroke="rgba(255, 255, 255, 0.5)"
          strokeWidth="1.2"
        />

        {/* Specular White Ridge Highlights */}
        <line
          x1="80"
          y1="26"
          x2="80"
          y2="72"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <line
          x1="80"
          y1="72"
          x2="80"
          y2="122"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line x1="52" y1="60" x2="80" y2="72" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1" />
        <line x1="108" y1="60" x2="80" y2="72" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1" />
      </g>

      {/* Front Half of Orbiting Ring with Glowing Node */}
      <path
        d="M 28,92 C 44,106 102,104 130,76"
        stroke={`url(#ring-grad-${uid})`}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        filter={`url(#glow-ot-${uid})`}
      />

      {/* Orbiting Satellite Node */}
      <circle cx="128" cy="78" r="4" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />

      {/* Floating 4-Point Stars / Sparkles */}
      <path
        d="M 124,34 L 126,40 L 132,42 L 126,44 L 124,50 L 122,44 L 116,42 L 122,40 Z"
        fill="#fcd34d"
        filter={`url(#glow-ot-${uid})`}
      />
      <path
        d="M 36,68 L 37,72 L 41,73 L 37,74 L 36,78 L 35,74 L 31,73 L 35,72 Z"
        fill="#ffffff"
        opacity="0.85"
      />
      <circle cx="48" cy="38" r="2" fill="#ec4899" />
    </svg>
  );
}
