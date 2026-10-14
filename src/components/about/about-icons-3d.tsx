import { useId } from "react";

interface Icon3DProps {
  className?: string;
}

/**
 * 3D Isometric Adobe After Effects Tile
 */
export function Icon3DAfterEffects({ className = "w-16 h-16" }: Icon3DProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D After Effects Icon"
    >
      <defs>
        <radialGradient id={`ae-glow-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9999ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`ae-face-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#28154e" />
          <stop offset="100%" stopColor="#0d041a" />
        </linearGradient>
        <linearGradient id={`ae-edge-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id={`ae-text-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#9999ff" />
        </linearGradient>
        <filter id={`ae-shadow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#6366f1" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Ambient Radial Glow */}
      <circle cx="70" cy="70" r="58" fill={`url(#ae-glow-${uid})`} filter="blur(14px)" />

      {/* 3D Base Shadow Plate */}
      <rect x="22" y="26" width="96" height="96" rx="26" fill="#05020a" opacity="0.8" />

      {/* 3D Chamfer Edge (Side extrusion) */}
      <rect
        x="20"
        y="22"
        width="100"
        height="100"
        rx="26"
        fill={`url(#ae-edge-${uid})`}
        opacity="0.85"
      />

      {/* Front Face Plate */}
      <rect
        x="22"
        y="18"
        width="96"
        height="96"
        rx="24"
        fill={`url(#ae-face-${uid})`}
        stroke="rgba(255, 255, 255, 0.25)"
        strokeWidth="1.5"
        filter={`url(#ae-shadow-${uid})`}
      />

      {/* Top Gloss Reflection */}
      <path
        d="M24 38 C24 26 34 20 46 20 L94 20 C106 20 116 26 116 38 C80 44 48 48 24 38 Z"
        fill="white"
        fillOpacity="0.14"
      />

      {/* 3D "Ae" Text Typography */}
      <text
        x="70"
        y="78"
        textAnchor="middle"
        fontFamily="'Tomato Grotesk', system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="44"
        fill={`url(#ae-text-${uid})`}
        style={{ letterSpacing: "-1.5px" }}
      >
        Ae
      </text>

      {/* Kinetic corner highlight */}
      <circle cx="36" cy="32" r="3" fill="#a855f7" />
    </svg>
  );
}

/**
 * 3D Isometric Adobe Premiere Pro Tile
 */
export function Icon3DPremierePro({ className = "w-16 h-16" }: Icon3DProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D Premiere Pro Icon"
    >
      <defs>
        <radialGradient id={`pr-glow-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ea7af4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#c026d3" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`pr-face-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b0f3e" />
          <stop offset="100%" stopColor="#15031a" />
        </linearGradient>
        <linearGradient id={`pr-edge-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#c026d3" />
        </linearGradient>
        <linearGradient id={`pr-text-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fdf4ff" />
          <stop offset="100%" stopColor="#ea7af4" />
        </linearGradient>
        <filter id={`pr-shadow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#f43f5e" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Ambient Glow */}
      <circle cx="70" cy="70" r="58" fill={`url(#pr-glow-${uid})`} filter="blur(14px)" />

      {/* 3D Base Shadow */}
      <rect x="22" y="26" width="96" height="96" rx="26" fill="#08010d" opacity="0.8" />

      {/* Chamfer Extrusion */}
      <rect
        x="20"
        y="22"
        width="100"
        height="100"
        rx="26"
        fill={`url(#pr-edge-${uid})`}
        opacity="0.85"
      />

      {/* Front Face Plate */}
      <rect
        x="22"
        y="18"
        width="96"
        height="96"
        rx="24"
        fill={`url(#pr-face-${uid})`}
        stroke="rgba(255, 255, 255, 0.25)"
        strokeWidth="1.5"
        filter={`url(#pr-shadow-${uid})`}
      />

      {/* Gloss Reflection */}
      <path
        d="M24 38 C24 26 34 20 46 20 L94 20 C106 20 116 26 116 38 C80 44 48 48 24 38 Z"
        fill="white"
        fillOpacity="0.14"
      />

      {/* 3D "Pr" Text Typography */}
      <text
        x="70"
        y="78"
        textAnchor="middle"
        fontFamily="'Tomato Grotesk', system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="44"
        fill={`url(#pr-text-${uid})`}
        style={{ letterSpacing: "-1.5px" }}
      >
        Pr
      </text>

      {/* Highlight Accent */}
      <circle cx="36" cy="32" r="3" fill="#ea7af4" />
    </svg>
  );
}

/**
 * 3D Isometric CapCut Tile
 */
export function Icon3DCapCut({ className = "w-16 h-16" }: Icon3DProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D CapCut Icon"
    >
      <defs>
        <radialGradient id={`cc-glow-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`cc-face-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#082f49" />
          <stop offset="100%" stopColor="#030c14" />
        </linearGradient>
        <linearGradient id={`cc-edge-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <linearGradient id={`cc-text-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f0fdfa" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <filter id={`cc-shadow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" floodColor="#06b6d4" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Ambient Glow */}
      <circle cx="70" cy="70" r="58" fill={`url(#cc-glow-${uid})`} filter="blur(14px)" />

      {/* 3D Base Shadow */}
      <rect x="22" y="26" width="96" height="96" rx="26" fill="#02070d" opacity="0.8" />

      {/* Chamfer Extrusion */}
      <rect
        x="20"
        y="22"
        width="100"
        height="100"
        rx="26"
        fill={`url(#cc-edge-${uid})`}
        opacity="0.85"
      />

      {/* Front Face Plate */}
      <rect
        x="22"
        y="18"
        width="96"
        height="96"
        rx="24"
        fill={`url(#cc-face-${uid})`}
        stroke="rgba(255, 255, 255, 0.25)"
        strokeWidth="1.5"
        filter={`url(#cc-shadow-${uid})`}
      />

      {/* Gloss Reflection */}
      <path
        d="M24 38 C24 26 34 20 46 20 L94 20 C106 20 116 26 116 38 C80 44 48 48 24 38 Z"
        fill="white"
        fillOpacity="0.14"
      />

      {/* 3D "Cc" Text Typography */}
      <text
        x="70"
        y="78"
        textAnchor="middle"
        fontFamily="'Tomato Grotesk', system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="44"
        fill={`url(#cc-text-${uid})`}
        style={{ letterSpacing: "-1.5px" }}
      >
        Cc
      </text>

      {/* Highlight Accent */}
      <circle cx="36" cy="32" r="3" fill="#22d3ee" />
    </svg>
  );
}

/**
 * 3D Isometric Motion Graphics Icon
 */
export function Icon3DMotionGraphicsSkill({ className = "w-20 h-20" }: Icon3DProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D Motion Graphics Skill Icon"
    >
      <defs>
        <radialGradient id={`mg-glow-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`mg-ring-1-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
        <linearGradient id={`mg-ring-2-${uid}`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
        <filter id={`mg-filter-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#38bdf8" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Ambient Radial Aura */}
      <circle cx="80" cy="80" r="60" fill={`url(#mg-glow-${uid})`} filter="blur(16px)" />

      {/* Outer 3D Gyro Ring */}
      <ellipse
        cx="80"
        cy="80"
        rx="54"
        ry="24"
        transform="rotate(-28 80 80)"
        stroke={`url(#mg-ring-1-${uid})`}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        filter={`url(#mg-filter-${uid})`}
      />

      {/* Inner Intersecting 3D Ring */}
      <ellipse
        cx="80"
        cy="80"
        rx="42"
        ry="18"
        transform="rotate(45 80 80)"
        stroke={`url(#mg-ring-2-${uid})`}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Central Glowing Kinetic Core */}
      <circle cx="80" cy="80" r="14" fill="#ffffff" filter="blur(1px)" />
      <circle cx="80" cy="80" r="9" fill="#38bdf8" />

      {/* Orbiting Satellite Spheres */}
      <circle cx="38" cy="56" r="6" fill="#f43f5e" />
      <circle cx="124" cy="98" r="5" fill="#a855f7" />
      <circle cx="95" cy="42" r="4" fill="#34d399" />
    </svg>
  );
}

/**
 * 3D Isometric Color Grading Icon
 */
export function Icon3DColorGradingSkill({ className = "w-20 h-20" }: Icon3DProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D Color Grading Skill Icon"
    >
      <defs>
        <radialGradient id={`cg-glow-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`cg-prism-top-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id={`cg-prism-side1-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id={`cg-prism-side2-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#9333ea" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id={`cg-ray-${uid}`} x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* Aura */}
      <circle cx="80" cy="80" r="55" fill={`url(#cg-glow-${uid})`} filter="blur(14px)" />

      {/* Refracted Dispersion Waves */}
      <path
        d="M80 65 L135 45 M80 75 L142 70 M80 85 L140 95 M80 95 L132 115"
        stroke={`url(#cg-ray-${uid})`}
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* 3D Glass Prism Shape */}
      {/* Front Face */}
      <polygon
        points="80,38 108,104 52,104"
        fill={`url(#cg-prism-side1-${uid})`}
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="1.5"
      />
      {/* Side Face */}
      <polygon
        points="80,38 108,104 96,118 40,114"
        fill={`url(#cg-prism-side2-${uid})`}
        opacity="0.6"
      />
      {/* Bevel highlight */}
      <line
        x1="80"
        y1="38"
        x2="80"
        y2="114"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Color Grading Wheel Indicator */}
      <circle cx="80" cy="84" r="14" stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="none" />
      <circle cx="76" cy="82" r="3.5" fill="#f59e0b" />
    </svg>
  );
}

/**
 * 3D Isometric Education / Academic Icon
 */
export function Icon3DEducation({ className = "w-16 h-16" }: Icon3DProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D Education Icon"
    >
      <defs>
        <radialGradient id={`edu-glow-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#047857" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`edu-cap-top-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id={`edu-gold-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>

      <circle cx="70" cy="70" r="52" fill={`url(#edu-glow-${uid})`} filter="blur(12px)" />

      {/* 3D Mortarboard Rhombus Top */}
      <polygon
        points="70,30 116,48 70,66 24,48"
        fill={`url(#edu-cap-top-${uid})`}
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.5"
      />

      {/* Cap Underside */}
      <polygon points="24,48 70,66 70,74 24,56" fill="#090d16" />
      <polygon points="70,66 116,48 116,56 70,74" fill="#0f172a" />

      {/* Skull Cap Base */}
      <path
        d="M44 68 C44 86 96 86 96 68 L96 78 C96 96 44 96 44 78 Z"
        fill="#1e293b"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />

      {/* Tassel Button & String */}
      <circle cx="70" cy="48" r="3.5" fill={`url(#edu-gold-${uid})`} />
      <path
        d="M70 48 Q94 56 98 72"
        stroke={`url(#edu-gold-${uid})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="94" y="72" width="7" height="12" rx="2" fill={`url(#edu-gold-${uid})`} />

      {/* Floating Parchment Scroll */}
      <rect
        x="36"
        y="96"
        width="68"
        height="18"
        rx="9"
        fill="#f8fafc"
        stroke="#cbd5e1"
        strokeWidth="1.5"
      />
      <line x1="68" y1="96" x2="68" y2="114" stroke="#f59e0b" strokeWidth="4" />
    </svg>
  );
}

/**
 * 3D Isometric Halal Standards & Values Shield
 */
export function Icon3DHalalStandard({ className = "w-16 h-16" }: Icon3DProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="3D Halal Standard Shield Icon"
    >
      <defs>
        <radialGradient id={`hl-glow-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#047857" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`hl-shield-face-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#064e3b" />
          <stop offset="100%" stopColor="#022c22" />
        </linearGradient>
        <linearGradient id={`hl-shield-gold-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>

      <circle cx="70" cy="70" r="54" fill={`url(#hl-glow-${uid})`} filter="blur(14px)" />

      {/* 3D Shield Base */}
      <path
        d="M70 20 L110 34 C110 76 86 108 70 118 C54 108 30 76 30 34 Z"
        fill={`url(#hl-shield-face-${uid})`}
        stroke={`url(#hl-shield-gold-${uid})`}
        strokeWidth="3"
      />

      {/* Inner Inset Shield */}
      <path
        d="M70 28 L102 39 C102 72 82 98 70 107 C58 98 38 72 38 39 Z"
        fill="#022c22"
        opacity="0.8"
      />

      {/* Clean Audio Wave / Sound Energy (Halal sound design) */}
      <rect x="52" y="58" width="4" height="18" rx="2" fill="#34d399" />
      <rect x="60" y="50" width="4" height="34" rx="2" fill="#6ee7b7" />
      <rect x="68" y="42" width="4" height="50" rx="2" fill="#ffffff" />
      <rect x="76" y="48" width="4" height="38" rx="2" fill="#6ee7b7" />
      <rect x="84" y="56" width="4" height="22" rx="2" fill="#34d399" />

      {/* Pure Star Accent */}
      <circle cx="70" cy="34" r="3" fill="#fef08a" />
    </svg>
  );
}
