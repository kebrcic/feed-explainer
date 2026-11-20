// The feed's own record of the week, printed.
export default function ClueStrip({ rows, label }) {
  return (
    <div className="strip" role="img" aria-label={label}>
      {rows.map((row) => (
        <div className="strip-row" key={row.who}>
          <span className={`strip-who mono who-${row.who.toLowerCase()}`}>{row.who}</span>
          <span className="cell" aria-hidden="true" />
          <span className="cell" aria-hidden="true" />
          <span className="cell" aria-hidden="true" />
          <span className="strip-gap mono">{row.gap}</span>
          <span className={`cell${row.guess ? ' guess' : ''}`} aria-hidden="true">
            <em className="mono">{row.next}</em>
          </span>
        </div>
      ))}
    </div>
  )
}
