import { bestOutOf100 } from '../data/study.js'

const dots = Array.from({ length: 100 }, (_, i) => i < bestOutOf100.hits)

export default function DotGrid() {
  return (
    <div className="waffle">
      <p className="score hand">
        {bestOutOf100.hits} right,
        <br />
        {bestOutOf100.misses} missed
      </p>
      <div
        className="dots"
        role="img"
        aria-label={`A grid of 100 dots with ${bestOutOf100.hits} filled in: out of every 100 guesses the best method made, about ${bestOutOf100.hits} matched the reader's next click and ${bestOutOf100.misses} did not.`}
      >
        {dots.map((hit, i) => (
          <span key={i} className={hit ? 'dot hit' : 'dot'} />
        ))}
      </div>
      <p className="dots-note hand redpen">↑ the other {bestOutOf100.misses} are misses</p>
      <p className="dots-cap mono">the best of the three, per 100 guesses</p>
    </div>
  )
}
