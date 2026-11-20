// Flat vector portrait, drawn for this project. Documented on the AI-use page.
export default function LeoPortrait({ title }) {
  return (
    <svg
      viewBox="0 0 200 230"
      role={title ? 'img' : 'presentation'}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : 'true'}
      className="portrait"
    >
      <rect width="200" height="230" fill="var(--leo-soft)" />
      <circle cx="100" cy="96" r="74" fill="#fff" opacity="0.45" />

      <g stroke="#2e2620" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round">
        {/* shoulders */}
        <path d="M14 230 C18 182 54 158 100 158 C146 158 182 182 186 230 Z" fill="var(--leo)" />
        <path d="M84 160 L100 184 L116 160" fill="#f7f0e1" />
        {/* neck */}
        <path d="M86 134 L86 160 Q100 168 114 160 L114 134 Z" fill="#d79a66" />
        {/* ears */}
        <circle cx="58" cy="104" r="9" fill="#e7b182" />
        <circle cx="142" cy="104" r="9" fill="#e7b182" />
        {/* face */}
        <ellipse cx="100" cy="100" rx="42" ry="47" fill="#edbb8a" />
        {/* curly hair */}
        <path d="M59 96 C52 60 74 38 100 38 C126 38 148 60 141 96 C136 76 124 66 100 66 C76 66 64 76 59 96 Z" fill="#5e3a21" />
        <g fill="#5e3a21" stroke="none">
          <circle cx="66" cy="74" r="14" />
          <circle cx="82" cy="56" r="15" />
          <circle cx="102" cy="48" r="16" />
          <circle cx="122" cy="55" r="15" />
          <circle cx="137" cy="73" r="14" />
        </g>
        {/* glasses */}
        <circle cx="84" cy="106" r="15" fill="#fff" fillOpacity="0.5" strokeWidth="3" />
        <circle cx="118" cy="106" r="15" fill="#fff" fillOpacity="0.5" strokeWidth="3" />
        <path d="M99 104 L103 104" strokeWidth="3" />
        <path d="M69 102 L58 99 M133 102 L144 99" strokeWidth="2.4" />
        <ellipse cx="84" cy="106" rx="3.8" ry="4.4" fill="#2a1e18" stroke="none" />
        <ellipse cx="118" cy="106" rx="3.8" ry="4.4" fill="#2a1e18" stroke="none" />
        <path d="M100 112 C96 119 99 123 103 123" fill="none" strokeWidth="2.2" />
        <path d="M89 131 Q101 139 114 130" fill="none" strokeWidth="2.8" />
        {/* arm and the printed invitation */}
        <path d="M34 230 C34 200 42 184 54 176" fill="none" strokeWidth="2.6" />
        <g transform="rotate(-9 56 196)">
          <rect x="18" y="178" width="76" height="46" fill="#f8f4e8" strokeWidth="2.4" />
          <path d="M26 190 H86 M26 200 H74" stroke="#9b958a" strokeWidth="2" />
          <text
            x="56"
            y="216"
            textAnchor="middle"
            fontFamily="'Courier Prime', monospace"
            fontSize="11"
            fill="#46443f"
            stroke="none"
          >
            SAT 7PM
          </text>
        </g>
      </g>
    </svg>
  )
}
