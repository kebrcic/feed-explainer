export default function FeedSwitch({ on, onToggle }) {
  return (
    <button className="switch" type="button" aria-pressed={on} onClick={onToggle}>
      <span className="switch-box" aria-hidden="true">
        <svg viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path
            d="M3.5 3 C9 2.2 17 2.6 23 3.4 C23.4 9 23.2 17 22.6 22.7 C16 23.4 9 23.2 3.2 22.5 C2.6 17 2.7 9 3.5 3 Z"
            strokeLinejoin="round"
          />
          {on && (
            <path
              d="M6 13.5 C9 16 10.5 18.6 11.6 20.8 C14 14.6 17.6 8.4 21.6 4.2"
              stroke="var(--pen)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          )}
        </svg>
      </span>
      <span className="switch-label">
        {on ? 'Show me the reasons again' : 'Show me the feed’s view'}
      </span>
    </button>
  )
}
