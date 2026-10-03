import React from 'react';
import { TeacherExpression } from '../types/game';

interface Props {
  expression: TeacherExpression;
  outfitId?: string;
  className?: string;
}

export const TeacherCharacter: React.FC<Props> = ({
  expression,
  outfitId = 'teacher_blazer',
  className = ''
}) => {
  // Determine outfit color palette
  let outfitColor = '#0284C7'; // Default sky blazer
  let outfitSecondary = '#38BDF8';
  let accessory = 'glasses'; // 'glasses' | 'sunglasses' | 'goggles' | 'flower' | 'magnifier'

  if (outfitId === 'teacher_cool') {
    outfitColor = '#1D4ED8';
    outfitSecondary = '#60A5FA';
    accessory = 'sunglasses';
  } else if (outfitId === 'teacher_labcoat') {
    outfitColor = '#F8FAFC';
    outfitSecondary = '#10B981';
    accessory = 'goggles';
  } else if (outfitId === 'teacher_saree') {
    outfitColor = '#DB2777';
    outfitSecondary = '#F59E0B';
    accessory = 'flower';
  } else if (outfitId === 'teacher_detective') {
    outfitColor = '#78350F';
    outfitSecondary = '#D97706';
    accessory = 'magnifier';
  }

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 240 260"
        className="w-full h-full max-h-[200px] drop-shadow-lg transition-transform duration-300"
        style={{
          transform: expression === 'shocked' ? 'scale(1.05)' : expression === 'celebrating' ? 'translateY(-4px)' : 'none'
        }}
      >
        <defs>
          <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FED7AA" />
            <stop offset="100%" stopColor="#FDBA74" />
          </linearGradient>
          <linearGradient id="hairGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#451A03" />
            <stop offset="100%" stopColor="#270D03" />
          </linearGradient>
          <linearGradient id="blazerGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={outfitColor} />
            <stop offset="100%" stopColor={outfitSecondary} />
          </linearGradient>
          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Hair Back */}
        <path
          d="M60 90 C40 140 50 190 75 220 C85 200 80 160 85 140 Z"
          fill="url(#hairGrad)"
        />
        <path
          d="M180 90 C200 140 190 190 165 220 C155 200 160 160 155 140 Z"
          fill="url(#hairGrad)"
        />
        <ellipse cx="120" cy="85" rx="58" ry="50" fill="url(#hairGrad)" />

        {/* Neck */}
        <path d="M108 135 L108 165 L132 165 L132 135 Z" fill="#FDBA74" />

        {/* Body & Blazer / Outfit */}
        <path
          d="M80 170 C70 185 55 210 50 250 L190 250 C185 210 170 185 160 170 C145 162 95 162 80 170 Z"
          fill="url(#blazerGrad)"
          filter="url(#softShadow)"
        />

        {/* Inner Shirt / Blouse Collar */}
        <polygon points="106,165 120,195 134,165 120,172" fill="#FFFFFF" />
        <polygon points="112,175 120,195 128,175" fill={outfitSecondary} />

        {/* Blazer Lapels */}
        <polygon points="90,170 120,225 106,245 76,200" fill={outfitColor} opacity="0.9" />
        <polygon points="150,170 120,225 134,245 164,200" fill={outfitColor} opacity="0.9" />

        {/* Special Outfit Decor */}
        {outfitId === 'teacher_saree' && (
          <path d="M85 240 Q120 180 165 170" stroke="#F59E0B" strokeWidth="6" fill="none" />
        )}
        {outfitId === 'teacher_labcoat' && (
          <rect x="75" y="195" width="22" height="15" rx="3" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1.5" />
        )}

        {/* Left Arm / Teacher Pointer or Thumbs Up */}
        {expression === 'celebrating' ? (
          <g transform="translate(-10, -10)">
            {/* Raised celebration arm */}
            <path d="M60 200 C40 170 45 140 50 120" stroke="url(#blazerGrad)" strokeWidth="18" strokeLinecap="round" />
            <circle cx="50" cy="115" r="10" fill="#FDBA74" />
            <path d="M45 110 L50 95 L55 110" stroke="#FDBA74" strokeWidth="5" strokeLinecap="round" />
            {/* Stars */}
            <text x="30" y="90" fontSize="18" fill="#F59E0B">✨</text>
          </g>
        ) : expression === 'facepalm' ? (
          <g>
            {/* Hand covering forehead */}
            <path d="M165 210 C180 180 165 130 140 100" stroke="url(#blazerGrad)" strokeWidth="16" strokeLinecap="round" />
            <ellipse cx="138" cy="98" rx="12" ry="9" fill="#FDBA74" transform="rotate(-20 138 98)" />
          </g>
        ) : (
          <g>
            {/* Teacher holding wooden pointer stick */}
            <path d="M55 210 Q45 180 60 165" stroke="url(#blazerGrad)" strokeWidth="16" strokeLinecap="round" />
            <circle cx="62" cy="165" r="9" fill="#FDBA74" />
            {/* Pointer rod */}
            <line x1="62" y1="165" x2="30" y2="90" stroke="#B45309" strokeWidth="4" strokeLinecap="round" />
            <circle cx="29" cy="88" r="4" fill="#F59E0B" />
          </g>
        )}

        {/* Head Base */}
        <ellipse cx="120" cy="105" rx="42" ry="46" fill="url(#skinGrad)" filter="url(#softShadow)" />

        {/* Cute Rosy Cheeks */}
        <ellipse cx="94" cy="120" rx="9" ry="6" fill="#FB7185" opacity={expression === 'celebrating' ? '0.6' : '0.35'} />
        <ellipse cx="146" cy="120" rx="9" ry="6" fill="#FB7185" opacity={expression === 'celebrating' ? '0.6' : '0.35'} />

        {/* Hair Front Bangs & Bun */}
        <circle cx="120" cy="48" r="22" fill="url(#hairGrad)" />
        {/* Hair Clip / Flower */}
        {accessory === 'flower' ? (
          <text x="135" y="55" fontSize="20">🌸</text>
        ) : (
          <rect x="135" y="48" width="14" height="6" rx="3" fill="#EF4444" />
        )}
        <path
          d="M78 85 C95 65 145 65 162 85 C145 80 130 92 120 92 C108 92 92 80 78 85 Z"
          fill="url(#hairGrad)"
        />
        {/* Side flick hair */}
        <path d="M78 85 Q72 110 82 125" stroke="#371702" strokeWidth="6" fill="none" strokeLinecap="round" />
        <path d="M162 85 Q168 110 158 125" stroke="#371702" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* EYES & BROWS - Dynamic per Expression */}
        {expression === 'celebrating' ? (
          // Joyful closed arcs
          <g>
            <path d="M96 104 Q106 94 114 104" stroke="#1F2937" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M126 104 Q134 94 144 104" stroke="#1F2937" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M96 93 Q106 85 114 90" stroke="#451A03" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M126 90 Q134 85 144 93" stroke="#451A03" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
        ) : expression === 'shocked' ? (
          // Giant wide cartoon eyes & raised brows
          <g>
            <ellipse cx="104" cy="102" rx="14" ry="16" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2.5" />
            <ellipse cx="136" cy="102" rx="14" ry="16" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2.5" />
            <circle cx="104" cy="102" r="5" fill="#1F2937" />
            <circle cx="136" cy="102" r="5" fill="#1F2937" />
            <circle cx="102" cy="99" r="2" fill="#FFFFFF" />
            <circle cx="134" cy="99" r="2" fill="#FFFFFF" />
            {/* Ultra high brows */}
            <path d="M92 84 Q104 76 116 84" stroke="#451A03" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M124 84 Q136 76 148 84" stroke="#451A03" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            {/* Big sweat drop */}
            <path d="M156 80 C162 90 158 98 152 98 C146 98 144 90 156 80 Z" fill="#38BDF8" />
          </g>
        ) : expression === 'thinking' ? (
          // One brow raised, eyes looking up
          <g>
            <ellipse cx="104" cy="104" rx="11" ry="12" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
            <ellipse cx="136" cy="104" rx="11" ry="12" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
            <circle cx="106" cy="99" r="5" fill="#1F2937" />
            <circle cx="138" cy="99" r="5" fill="#1F2937" />
            <path d="M95 90 Q105 82 115 88" stroke="#451A03" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M125 94 Q135 96 145 92" stroke="#451A03" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
        ) : (
          // Normal Idle Friendly Eyes
          <g>
            <ellipse cx="104" cy="104" rx="11" ry="12" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
            <ellipse cx="136" cy="104" rx="11" ry="12" fill="#FFFFFF" stroke="#1F2937" strokeWidth="2" />
            <circle cx="105" cy="104" r="5.5" fill="#1F2937" />
            <circle cx="137" cy="104" r="5.5" fill="#1F2937" />
            <circle cx="103" cy="101" r="2" fill="#FFFFFF" />
            <circle cx="135" cy="101" r="2" fill="#FFFFFF" />
            <path d="M95 92 Q105 88 115 92" stroke="#451A03" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M125 92 Q135 88 145 92" stroke="#451A03" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
        )}

        {/* GLASSES / ACCESSORIES */}
        {accessory === 'sunglasses' ? (
          <g>
            {/* Cool Wayfarer Shades */}
            <rect x="90" y="94" width="26" height="18" rx="4" fill="#0F172A" />
            <rect x="124" y="94" width="26" height="18" rx="4" fill="#0F172A" />
            <line x1="116" y1="100" x2="124" y2="100" stroke="#0F172A" strokeWidth="3" />
            {/* Lens reflections */}
            <line x1="94" y1="108" x2="102" y2="97" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1="128" y1="108" x2="136" y2="97" stroke="#38BDF8" strokeWidth="1.5" />
          </g>
        ) : accessory === 'glasses' ? (
          <g>
            {/* Red Chic Teacher Glasses */}
            <rect x="91" y="95" width="25" height="18" rx="7" fill="none" stroke="#DC2626" strokeWidth="2.5" />
            <rect x="124" y="95" width="25" height="18" rx="7" fill="none" stroke="#DC2626" strokeWidth="2.5" />
            <line x1="116" y1="102" x2="124" y2="102" stroke="#DC2626" strokeWidth="2.5" />
            <line x1="84" y1="100" x2="91" y2="102" stroke="#DC2626" strokeWidth="2" />
            <line x1="149" y1="102" x2="156" y2="100" stroke="#DC2626" strokeWidth="2" />
          </g>
        ) : null}

        {/* Cute Small Nose */}
        <path d="M118 114 Q120 119 123 118" stroke="#F97316" strokeWidth="2.2" fill="none" strokeLinecap="round" />

        {/* MOUTH - Dynamic per Expression */}
        {expression === 'celebrating' ? (
          // Huge Open Smile with teeth
          <g>
            <path d="M106 124 Q120 144 134 124 Z" fill="#991B1B" />
            <path d="M110 125 Q120 131 130 125" stroke="#FFFFFF" strokeWidth="3" fill="none" />
            <path d="M112 135 Q120 144 128 135" fill="#FB7185" />
          </g>
        ) : expression === 'shocked' ? (
          // Big O mouth
          <ellipse cx="120" cy="130" rx="8" ry="12" fill="#7F1D1D" stroke="#991B1B" strokeWidth="1.5" />
        ) : expression === 'thinking' ? (
          // Quirky side smile
          <path d="M112 126 Q122 124 130 129" stroke="#991B1B" strokeWidth="3" fill="none" strokeLinecap="round" />
        ) : expression === 'facepalm' ? (
          // Straight displeased mouth
          <path d="M110 128 L130 128" stroke="#991B1B" strokeWidth="3" fill="none" strokeLinecap="round" />
        ) : (
          // Standard Sweet Smile
          <path d="M110 124 Q120 134 130 124" stroke="#991B1B" strokeWidth="3" fill="none" strokeLinecap="round" />
        )}
      </svg>
    </div>
  );
};
