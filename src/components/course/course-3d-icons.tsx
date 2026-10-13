import { useId } from "react";

interface Course3DIconProps {
  className?: string;
}

/**
 * 3D Isometric Spoken English / Speech Mastery Icon
 * Features:
 * - 3D isometric speech dialogue prisms
 * - Glowing audio phonetic soundwave ribbon
 * - Academic star and fluency sparkle
 */
export function Icon3DSpokenEnglish({ className = "w-20 h-20" }: Course3DIconProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D Spoken English Icon"
    >
      <defs>
        <linearGradient id={`bubble-top-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
        <linearGradient id={`bubble-side-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>
        <linearGradient id={`wave-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>

        <filter id={`shadow-se-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#f97316" floodOpacity="0.35" />
        </filter>
        <filter id={`glow-se-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient background glow */}
      <circle cx="80" cy="80" r="56" fill="#f97316" fillOpacity="0.08" />

      {/* Back Soundwave Ribbon Arc */}
      <path
        d="M 24,106 C 40,40 120,40 136,106"
        stroke={`url(#wave-grad-${uid})`}
        strokeWidth="3"
        strokeDasharray="5 4"
        fill="none"
        opacity="0.6"
      />

      {/* 3D Isometric Chat Bubble (Main) */}
      <g filter={`url(#shadow-se-${uid})`} transform="translate(14, 18)">
        {/* Top Face */}
        <polygon
          points="20,40 76,14 116,42 60,68"
          fill={`url(#bubble-top-${uid})`}
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.2"
        />
        {/* Left Side Extrusion */}
        <polygon points="20,40 60,68 60,82 20,54" fill={`url(#bubble-side-${uid})`} />
        {/* Right Side Extrusion */}
        <polygon points="116,42 60,68 60,82 116,56" fill="#9a3412" />

        {/* Speech tail pointer (3D bevel) */}
        <polygon points="36,68 48,68 32,96" fill="#ea580c" />
        <polygon points="32,96 48,68 52,72" fill="#7c2d12" />

        {/* Inner Voice Sound Wave Bars (Isometric) */}
        <line
          x1="44"
          y1="46"
          x2="44"
          y2="56"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="56"
          y1="38"
          x2="56"
          y2="62"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="68"
          y1="32"
          x2="68"
          y2="66"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1="80"
          y1="36"
          x2="80"
          y2="60"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="92"
          y1="44"
          x2="92"
          y2="54"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Specular Edge Highlight */}
        <line
          x1="20"
          y1="40"
          x2="76"
          y2="14"
          stroke="rgba(255, 255, 255, 0.75)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* Floating 3D Sparkle and Nodes */}
      <circle cx="128" cy="48" r="3.5" fill="#fde047" filter={`url(#glow-se-${uid})`} />
      <path
        d="M 32,38 L 34,44 L 40,46 L 34,48 L 32,54 L 30,48 L 24,46 L 30,44 Z"
        fill="#ffffff"
        opacity="0.9"
      />
    </svg>
  );
}

/**
 * 3D Isometric IELTS Preparation Icon
 * Features:
 * - 3D Target bullseye prism with 7.5+ band flag
 * - Cambridge quill pen with golden nib
 * - Academic laurel / test scoring prism
 */
export function Icon3DIELTS({ className = "w-20 h-20" }: Course3DIconProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D IELTS Preparation Icon"
    >
      <defs>
        <linearGradient id={`ielts-base-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>
        <linearGradient id={`ielts-gold-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
        <filter id={`shadow-ielts-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#ef4444" floodOpacity="0.35" />
        </filter>
        <filter id={`glow-ielts-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient background glow */}
      <circle cx="80" cy="80" r="56" fill="#ef4444" fillOpacity="0.08" />

      {/* 3D Target Platform Base */}
      <g filter={`url(#shadow-ielts-${uid})`} transform="translate(80, 88)">
        {/* Outer Cylinder Ring (Red) */}
        <ellipse cx="0" cy="0" rx="48" ry="24" fill={`url(#ielts-base-${uid})`} />
        {/* Outer Extrusion */}
        <path d="M -48,0 C -48,13 48,13 48,0 L 48,12 C 48,25 -48,25 -48,12 Z" fill="#7f1d1d" />

        {/* Inner White Target Ring */}
        <ellipse cx="0" cy="0" rx="36" ry="18" fill="#ffffff" opacity="0.9" />

        {/* Inner Red Target Ring */}
        <ellipse cx="0" cy="0" rx="24" ry="12" fill="#dc2626" />

        {/* Center Golden Bullseye Disc */}
        <ellipse cx="0" cy="0" rx="12" ry="6" fill={`url(#ielts-gold-${uid})`} />
      </g>

      {/* 3D Standing Target Pin / Flag with 7.5 */}
      <g transform="translate(80, 48)">
        {/* Vertical Shaft */}
        <line x1="0" y1="0" x2="0" y2="40" stroke="#f1f5f9" strokeWidth="3" strokeLinecap="round" />

        {/* Flag Pennant (Top Right) */}
        <polygon
          points="0,0 44,14 0,28"
          fill={`url(#ielts-gold-${uid})`}
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
        />

        {/* Star Badge on Flag */}
        <circle cx="16" cy="14" r="5" fill="#ffffff" />
        <circle cx="16" cy="14" r="2.5" fill="#dc2626" />
      </g>

      {/* Golden Quill Pen across the target */}
      <g transform="rotate(-35 80 80)">
        <polygon points="80,18 86,52 80,68 74,52" fill={`url(#ielts-gold-${uid})`} />
        <polygon points="80,68 83,78 80,84 77,78" fill="#ffffff" />
        <line x1="80" y1="18" x2="80" y2="82" stroke="#b45309" strokeWidth="1" />
      </g>

      {/* Floating Sparkles */}
      <path
        d="M 124,32 L 126,38 L 132,40 L 126,42 L 124,48 L 122,42 L 116,40 L 122,38 Z"
        fill="#fcd34d"
        filter={`url(#glow-ielts-${uid})`}
      />
    </svg>
  );
}

/**
 * 3D Isometric Video & Creative Motion Icon
 * Features:
 * - 3D Clapperboard with dynamic film reels
 * - Golden glowing lens aperture
 * - Timeline keyframe nodes
 */
export function Icon3DVideoMotion({ className = "w-20 h-20" }: Course3DIconProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D Video Motion Course Icon"
    >
      <defs>
        <linearGradient id={`vm-face-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
        <filter id={`shadow-vm-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#8b5cf6" floodOpacity="0.35" />
        </filter>
        <filter id={`glow-vm-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient background glow */}
      <circle cx="80" cy="80" r="56" fill="#8b5cf6" fillOpacity="0.08" />

      {/* Orbiting Curved Film Ribbon */}
      <path
        d="M 22,118 C 32,48 100,32 144,52"
        stroke="#c084fc"
        strokeWidth="4"
        strokeDasharray="6 4"
        fill="none"
        opacity="0.6"
      />

      {/* 3D Isometric Studio Clapper & Camera Lens */}
      <g filter={`url(#shadow-vm-${uid})`} transform="translate(16, 20)">
        {/* Base Slate */}
        <polygon
          points="24,56 102,32 110,88 32,112"
          fill="#1e1b4b"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.2"
        />
        {/* Side Extrusions */}
        <polygon points="102,32 110,88 114,86 106,30" fill="#0f172a" />
        <polygon points="32,112 110,88 114,86 36,110" fill="#020617" />

        {/* Angled Upper Clapper Stick */}
        <g transform="rotate(-15 24 56)">
          <polygon
            points="22,42 98,18 102,30 26,54"
            fill="#312e81"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1"
          />
          {/* Neon Chevron Stripes */}
          <polygon points="34,38 44,35 38,49 28,52" fill="#f43f5e" />
          <polygon points="50,33 60,30 54,44 44,47" fill="#f59e0b" />
          <polygon points="66,28 76,25 70,39 60,42" fill="#10b981" />
          <polygon points="82,23 92,20 86,34 76,37" fill="#38bdf8" />
        </g>

        {/* Glowing Center Play Prism Disc */}
        <circle cx="68" cy="74" r="18" fill={`url(#vm-face-${uid})`} opacity="0.9" />
        <polygon points="62,65 78,74 62,83" fill="#ffffff" filter={`url(#glow-vm-${uid})`} />
      </g>

      {/* Floating Keyframe Diamond */}
      <rect
        x="122"
        y="104"
        width="8"
        height="8"
        transform="rotate(45 126 108)"
        fill="#f43f5e"
        stroke="#ffffff"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/**
 * 3D Isometric Public Speaking & Leadership Icon
 * Features:
 * - 3D Podium stage platform
 * - Studio broadcast microphone with acoustic sound aura
 * - Glowing spotlight beam and applause sparkles
 */
export function Icon3DPublicSpeaking({ className = "w-20 h-20" }: Course3DIconProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D Public Speaking Course Icon"
    >
      <defs>
        <linearGradient id={`stage-top-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id={`mic-metal-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <filter id={`shadow-ps-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#3b82f6" floodOpacity="0.35" />
        </filter>
        <filter id={`glow-ps-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient background glow */}
      <circle cx="80" cy="80" r="56" fill="#3b82f6" fillOpacity="0.08" />

      {/* Acoustic broadcast soundwave rings */}
      <circle cx="80" cy="62" r="32" stroke="#38bdf8" strokeWidth="1.5" opacity="0.35" />
      <circle
        cx="80"
        cy="62"
        r="42"
        stroke="#818cf8"
        strokeWidth="1"
        strokeDasharray="4 3"
        opacity="0.25"
      />

      {/* 3D Stage / Podium Base */}
      <g filter={`url(#shadow-ps-${uid})`} transform="translate(80, 110)">
        {/* Top isometric platform */}
        <polygon
          points="0,-16 44,6 0,28 -44,6"
          fill={`url(#stage-top-${uid})`}
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1"
        />
        {/* Left side extrusion */}
        <polygon points="-44,6 0,28 0,38 -44,16" fill="#1e3a8a" />
        {/* Right side extrusion */}
        <polygon points="44,6 0,28 0,38 44,16" fill="#172554" />
      </g>

      {/* 3D Studio Vintage Microphone (Centerpiece) */}
      <g filter={`url(#shadow-ps-${uid})`} transform="translate(80, 62)">
        {/* Stand shaft */}
        <line
          x1="0"
          y1="22"
          x2="0"
          y2="48"
          stroke="#cbd5e1"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Stand base collar */}
        <ellipse cx="0" cy="48" rx="10" ry="4" fill="#64748b" />

        {/* U-Shape Mount Bracket */}
        <path
          d="M -14,8 C -14,24 14,24 14,8"
          stroke="#94a3b8"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Microphone Capsule Body */}
        <rect
          x="-10"
          y="-18"
          width="20"
          height="30"
          rx="10"
          fill={`url(#mic-metal-${uid})`}
          stroke="#475569"
          strokeWidth="1.2"
        />
        {/* Acoustic Grille Lines */}
        <line x1="-8" y1="-8" x2="8" y2="-8" stroke="#334155" strokeWidth="1.5" />
        <line x1="-8" y1="-2" x2="8" y2="-2" stroke="#334155" strokeWidth="1.5" />
        <line x1="-8" y1="4" x2="8" y2="4" stroke="#334155" strokeWidth="1.5" />

        {/* Center Live On-Air Indicator */}
        <circle cx="0" cy="-12" r="2.5" fill="#ef4444" filter={`url(#glow-ps-${uid})`} />
      </g>

      {/* Floating Sparkles & Light Beam */}
      <path
        d="M 126,38 L 128,44 L 134,46 L 128,48 L 126,54 L 124,48 L 118,46 L 124,44 Z"
        fill="#fde047"
        filter={`url(#glow-ps-${uid})`}
      />
      <circle cx="36" cy="48" r="2.5" fill="#38bdf8" />
    </svg>
  );
}
