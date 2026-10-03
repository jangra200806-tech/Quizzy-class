import React from 'react';
import { StudentExpression } from '../types/game';

interface Props {
  expression: StudentExpression;
  outfitId?: string;
  className?: string;
}

export const StudentCharacter: React.FC<Props> = ({
  expression,
  outfitId = 'student_uniform',
  className = ''
}) => {
  // Outfit styling
  let shirtColor = '#3B82F6';
  let collarColor = '#FFFFFF';
  let hasBowtie = false;
  let hasCape = false;
  let hasHoodie = false;
  let hasPajamas = false;
  let hasNerdGlasses = false;

  if (outfitId === 'student_hoodie') {
    shirtColor = '#10B981';
    collarColor = '#047857';
    hasHoodie = true;
  } else if (outfitId === 'student_nerd') {
    shirtColor = '#F59E0B';
    collarColor = '#D97706';
    hasBowtie = true;
    hasNerdGlasses = true;
  } else if (outfitId === 'student_cape') {
    shirtColor = '#2563EB';
    collarColor = '#EF4444';
    hasCape = true;
  } else if (outfitId === 'student_pajamas') {
    shirtColor = '#8B5CF6';
    collarColor = '#A78BFA';
    hasPajamas = true;
  }

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 220 220"
        className="w-full h-full max-h-[160px] drop-shadow-md transition-all duration-300"
        style={{
          transform: expression === 'happy' ? 'translateY(-6px)' : expression === 'confused' ? 'rotate(-3deg)' : 'none'
        }}
      >
        <defs>
          <linearGradient id="studentSkin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FED7AA" />
            <stop offset="100%" stopColor="#FDBA74" />
          </linearGradient>
          <linearGradient id="studentHair" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="100%" stopColor="#312E81" />
          </linearGradient>
          <linearGradient id="deskWood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>
        </defs>

        {/* Hero Cape if equipped */}
        {hasCape && (
          <path
            d="M60 120 C40 160 30 200 20 210 L190 210 C180 200 170 160 150 120 Z"
            fill="#EF4444"
          />
        )}

        {/* Hair Back */}
        <ellipse cx="110" cy="72" rx="46" ry="42" fill="url(#studentHair)" />

        {/* Body / Torso */}
        <path
          d="M65 130 C60 145 52 170 50 195 L170 195 C168 170 160 145 155 130 Z"
          fill={shirtColor}
        />

        {/* Pajama Dots */}
        {hasPajamas && (
          <g fill="#DDD6FE">
            <circle cx="85" cy="155" r="4" />
            <circle cx="125" cy="155" r="4" />
            <circle cx="105" cy="175" r="4" />
            <circle cx="70" cy="180" r="4" />
            <circle cx="145" cy="180" r="4" />
          </g>
        )}

        {/* Hoodie Strings */}
        {hasHoodie && (
          <g stroke="#ECFDF5" strokeWidth="2.5" strokeLinecap="round">
            <line x1="102" y1="135" x2="98" y2="160" />
            <line x1="118" y1="135" x2="122" y2="160" />
          </g>
        )}

        {/* Shirt Collar / Bowtie */}
        <polygon points="98,125 110,140 122,125 110,130" fill={collarColor} />
        {hasBowtie && (
          <g>
            <polygon points="102,132 110,136 102,140" fill="#DC2626" />
            <polygon points="118,132 110,136 118,140" fill="#DC2626" />
            <circle cx="110" cy="136" r="3" fill="#B91C1C" />
          </g>
        )}

        {/* Head (Cute chubby cheeks) */}
        <path
          d="M72 75 C68 105 78 126 110 126 C142 126 152 105 148 75 C145 48 75 48 72 75 Z"
          fill="url(#studentSkin)"
        />

        {/* Chubby Rosy Cheeks */}
        <ellipse cx="85" cy="100" rx="9" ry="6" fill="#F43F5E" opacity="0.4" />
        <ellipse cx="135" cy="100" rx="9" ry="6" fill="#F43F5E" opacity="0.4" />

        {/* Hair Front Bangs */}
        <path
          d="M72 65 C85 45 135 45 148 65 C140 68 128 62 118 68 C108 62 92 68 85 64 Z"
          fill="url(#studentHair)"
        />
        <path d="M102 65 Q110 80 115 68" stroke="url(#studentHair)" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* EARS */}
        <circle cx="71" cy="85" r="7" fill="#FDBA74" />
        <circle cx="149" cy="85" r="7" fill="#FDBA74" />

        {/* EYES / EXPRESSIONS */}
        {expression === 'happy' ? (
          // Sparkling happy closed arcs
          <g>
            <path d="M88 88 Q98 78 104 88" stroke="#1F2937" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M116 88 Q122 78 132 88" stroke="#1F2937" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            {/* Happy stars above head */}
            <text x="50" y="55" fontSize="16">⭐</text>
            <text x="145" y="55" fontSize="16">✨</text>
          </g>
        ) : expression === 'confused' ? (
          // Swirly dizzy eyes + question mark
          <g>
            {/* Left swirl */}
            <path d="M92 84 Q98 84 98 88 Q98 92 94 92 Q90 92 90 86 Q90 80 98 80" stroke="#1F2937" strokeWidth="2" fill="none" />
            {/* Right swirl */}
            <path d="M122 84 Q128 84 128 88 Q128 92 124 92 Q120 92 120 86 Q120 80 128 80" stroke="#1F2937" strokeWidth="2" fill="none" />
            {/* Floating question mark */}
            <text x="135" y="45" fontSize="24" fill="#6366F1" fontWeight="bold">?</text>
          </g>
        ) : expression === 'sweating' ? (
          // Wide worried eyes & sweat bead
          <g>
            <ellipse cx="96" cy="86" rx="8" ry="10" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
            <ellipse cx="124" cy="86" rx="8" ry="10" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
            <circle cx="96" cy="86" r="4" fill="#1F2937" />
            <circle cx="124" cy="86" r="4" fill="#1F2937" />
            {/* Worried brows */}
            <path d="M90 74 L102 78" stroke="#312E81" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M130 74 L118 78" stroke="#312E81" strokeWidth="2.5" strokeLinecap="round" />
            {/* Big blue cartoon sweat bead */}
            <path d="M142 65 C146 72 144 78 139 78 C134 78 133 72 142 65 Z" fill="#0EA5E9" />
          </g>
        ) : expression === 'cool' ? (
          // Sunglasses & cool smirk
          <g>
            <rect x="85" y="80" width="22" height="14" rx="4" fill="#0F172A" />
            <rect x="113" y="80" width="22" height="14" rx="4" fill="#0F172A" />
            <line x1="107" y1="86" x2="113" y2="86" stroke="#0F172A" strokeWidth="2.5" />
            <line x1="88" y1="88" x2="94" y2="82" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="116" y1="88" x2="122" y2="82" stroke="#38BDF8" strokeWidth="1.5" />
          </g>
        ) : (
          // Normal attentive round eyes
          <g>
            <ellipse cx="96" cy="86" rx="7" ry="9" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
            <ellipse cx="124" cy="86" rx="7" ry="9" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
            <circle cx="96" cy="86" r="4.5" fill="#1F2937" />
            <circle cx="124" cy="86" r="4.5" fill="#1F2937" />
            <circle cx="94" cy="84" r="1.5" fill="#FFFFFF" />
            <circle cx="122" cy="84" r="1.5" fill="#FFFFFF" />
            {/* Friendly brows */}
            <path d="M90 75 Q96 72 102 75" stroke="#312E81" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M118 75 Q124 72 130 75" stroke="#312E81" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </g>
        )}

        {/* Nerd Glasses if equipped */}
        {hasNerdGlasses && expression !== 'cool' && (
          <g>
            <circle cx="96" cy="86" r="12" fill="none" stroke="#1F2937" strokeWidth="2.5" />
            <circle cx="124" cy="86" r="12" fill="none" stroke="#1F2937" strokeWidth="2.5" />
            <line x1="108" y1="86" x2="112" y2="86" stroke="#1F2937" strokeWidth="2.5" />
          </g>
        )}

        {/* NOSE */}
        <circle cx="110" cy="94" r="2.5" fill="#FB923C" />

        {/* MOUTH */}
        {expression === 'happy' ? (
          // Huge Open Grin
          <path d="M98 102 Q110 118 122 102 Z" fill="#991B1B" />
        ) : expression === 'confused' ? (
          // Wavy mouth
          <path d="M102 106 Q106 102 110 106 Q114 110 118 106" stroke="#991B1B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        ) : expression === 'sweating' ? (
          // Nervous straight line
          <path d="M102 105 L118 105" stroke="#991B1B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        ) : (
          // Normal friendly smile
          <path d="M102 102 Q110 110 118 102" stroke="#991B1B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        )}

        {/* Hands / Arms */}
        {expression === 'happy' ? (
          <g>
            {/* Raised hands celebrating */}
            <circle cx="56" cy="115" r="10" fill="#FDBA74" />
            <circle cx="164" cy="115" r="10" fill="#FDBA74" />
            {/* Holding pencil */}
            <line x1="56" y1="120" x2="48" y2="95" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
          </g>
        ) : null}

        {/* CLASSROOM DESK FOREGROUND */}
        <g id="studentDesk">
          {/* Desk surface */}
          <rect x="25" y="160" width="170" height="24" rx="4" fill="url(#deskWood)" />
          {/* Desk shadow trim */}
          <rect x="25" y="180" width="170" height="6" fill="#78350F" />
          {/* Desk wooden legs */}
          <rect x="35" y="186" width="10" height="34" fill="#451A03" />
          <rect x="175" y="186" width="10" height="34" fill="#451A03" />

          {/* Student Resting Hands on Desk */}
          {expression !== 'happy' && (
            <g>
              <ellipse cx="80" cy="164" rx="9" ry="6" fill="#FDBA74" />
              <ellipse cx="140" cy="164" rx="9" ry="6" fill="#FDBA74" />
            </g>
          )}

          {/* Notebook & Pencil on Desk */}
          <rect x="96" y="156" width="28" height="18" rx="2" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="100" y1="162" x2="120" y2="162" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="100" y1="167" x2="116" y2="167" stroke="#94A3B8" strokeWidth="1.5" />
          {/* Cute Pink Eraser */}
          <rect x="135" y="160" width="12" height="7" rx="1.5" fill="#F43F5E" />
          {/* Yellow Pencil */}
          <rect x="132" y="169" width="18" height="3" rx="1" fill="#F59E0B" transform="rotate(-15 132 169)" />
        </g>
      </svg>
    </div>
  );
};
