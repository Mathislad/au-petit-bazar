// Logo SVG — Au petit baz'AR
// Médaillon sobre : initiales stylisées, typographie classique

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  const fg = variant === "dark" ? "#1e1408" : "#f8f4ee";
  const stroke = variant === "dark" ? "rgba(30,20,8,0.18)" : "rgba(248,244,238,0.22)";
  const accent = "#8b2635";

  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Au petit baz'AR"
    >
      {/* Cercle extérieur */}
      <circle cx="40" cy="40" r="37" stroke={fg} strokeWidth="1.2" opacity="0.55" />
      {/* Cercle intérieur */}
      <circle cx="40" cy="40" r="30" stroke={fg} strokeWidth="0.7" opacity="0.25" />

      {/* Ornement haut — trait horizontal avec losange */}
      <line x1="26" y1="18" x2="54" y2="18" stroke={fg} strokeWidth="0.8" opacity="0.4"/>
      <rect x="38.5" y="15.5" width="3" height="3" rx="0.5" fill={accent} opacity="0.7" transform="rotate(45 40 17)"/>

      {/* Initiales "bA" stylisées */}
      <text
        x="40"
        y="46"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="700"
        fontSize="20"
        fill={fg}
        letterSpacing="-0.5"
      >
        bA
      </text>

      {/* Trait séparateur bas */}
      <line x1="30" y1="53" x2="50" y2="53" stroke={accent} strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>

      {/* Ornement bas — point accent */}
      <circle cx="40" cy="58" r="1.5" fill={accent} opacity="0.55"/>

      {/* Texte circulaire — texte descriptif petits caps */}
      <path id="topArc" d="M 12 40 A 28 28 0 0 1 68 40" fill="none" />
      <text fontFamily="'Lato', Arial, sans-serif" fontSize="5.2" fill={fg} letterSpacing="2.5" opacity="0.5">
        <textPath href="#topArc" startOffset="10%">AU PETIT BAZ&apos;AR</textPath>
      </text>
      <path id="botArc" d="M 14 42 A 28 28 0 0 0 66 42" fill="none" />
      <text fontFamily="'Lato', Arial, sans-serif" fontSize="4.8" fill={fg} letterSpacing="2" opacity="0.4">
        <textPath href="#botArc" startOffset="8%">SAINT-FRONT · HAUTE-LOIRE</textPath>
      </text>
    </svg>
  );
}
