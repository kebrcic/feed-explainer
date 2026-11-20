import MayaPortrait from './illustrations/MayaPortrait.jsx'
import LeoPortrait from './illustrations/LeoPortrait.jsx'

const faces = { Maya: MayaPortrait, Leo: LeoPortrait }

// The feed's own record of the week, printed. The people stay in colour
// beside it, so the pattern being analysed is visibly theirs.
export default function ClueStrip({ rows, label }) {
  return (
    <div className="strip" role="img" aria-label={label}>
      {rows.map((row) => {
        const Face = faces[row.who]
        const key = row.who.toLowerCase()
        return (
          <div className="strip-row" key={row.who}>
            <span className={`strip-face face-${key}`} aria-hidden="true">
              <Face />
            </span>
            <span className={`strip-who mono who-${key}`}>{row.who}</span>
            <span className="cell" aria-hidden="true" />
            <span className="cell" aria-hidden="true" />
            <span className="cell" aria-hidden="true" />
            <span className="strip-gap mono">{row.gap}</span>
            <span className={`cell${row.guess ? ' guess' : ''}`} aria-hidden="true">
              <em className="mono">{row.next}</em>
            </span>
          </div>
        )
      })}
    </div>
  )
}
