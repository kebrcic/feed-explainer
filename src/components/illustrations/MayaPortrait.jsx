// Flat vector portrait, drawn for this project. Documented on the AI-use page.
export default function MayaPortrait({ title }) {
  return (
    <svg
      viewBox="0 0 200 230"
      role={title ? 'img' : 'presentation'}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : 'true'}
      className="portrait"
    >
      <rect width="200" height="230" fill="var(--maya-soft)" />
      <circle cx="100" cy="96" r="74" fill="#fff" opacity="0.45" />

      <g stroke="#2e2620" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round">
        {/* shoulders */}
        <path d="M14 230 C18 182 54 158 100 158 C146 158 182 182 186 230 Z" fill="#f7f0e1" />
        {/* apron */}
        <path d="M62 230 L62 180 Q100 170 138 180 L138 230 Z" fill="#e8b33a" />
        <path d="M80 176 L80 150 Q100 144 120 150 L120 176" fill="#e8b33a" />
        <path d="M80 152 L66 176 M120 152 L134 176" fill="none" />
        <path d="M78 196 L122 196 L122 216 L78 216 Z" fill="none" stroke="#b9842a" strokeWidth="2" />
        {/* neck */}
        <path d="M86 134 L86 160 Q100 168 114 160 L114 134 Z" fill="#a96a42" />
        {/* ears */}
        <circle cx="58" cy="104" r="9" fill="#b9784e" />
        <circle cx="142" cy="104" r="9" fill="#b9784e" />
        {/* face */}
        <ellipse cx="100" cy="100" rx="42" ry="47" fill="#c1824f" />
        {/* hair */}
        <path d="M58 100 C54 58 74 42 100 42 C126 42 146 58 142 100 C138 82 128 72 112 69 C98 78 78 80 66 84 C62 88 59 94 58 100 Z" fill="#2a1e18" />
        <path d="M100 42 C108 28 126 26 132 34 C138 42 132 50 124 50" fill="#2a1e18" />
        {/* bandana */}
        <path d="M57 86 C62 72 78 64 100 64 C122 64 139 72 144 86 C134 78 118 74 100 74 C82 74 67 78 57 86 Z" fill="var(--maya)" />
        {/* brows, eyes, mouth */}
        <path d="M76 95 Q86 90 95 95" fill="none" strokeWidth="2.8" />
        <path d="M105 95 Q114 90 124 95" fill="none" strokeWidth="2.8" />
        <ellipse cx="85" cy="106" rx="4" ry="4.6" fill="#2a1e18" stroke="none" />
        <ellipse cx="115" cy="106" rx="4" ry="4.6" fill="#2a1e18" stroke="none" />
        <path d="M100 108 C96 116 99 120 103 120" fill="none" strokeWidth="2.2" />
        <path d="M88 128 Q100 138 113 127" fill="none" strokeWidth="2.8" />
        <circle cx="72" cy="120" r="7" fill="#d88a60" stroke="none" opacity="0.5" />
        <circle cx="128" cy="120" r="7" fill="#d88a60" stroke="none" opacity="0.5" />
        {/* arm and wooden spoon */}
        <path d="M168 230 C166 198 158 182 146 174" fill="none" strokeWidth="2.6" />
        <path d="M152 176 L170 128" fill="none" stroke="#9c6b3c" strokeWidth="7" />
        <ellipse cx="173" cy="118" rx="10" ry="14" fill="#b07c45" transform="rotate(14 173 118)" />
      </g>
    </svg>
  )
}
