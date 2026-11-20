import { watched } from '../data/study.js'

// Everything the feed can see, drawn as a printed screenshot: grey, square,
// typewriter type. The opposite of the handwriting around it.
export default function PhoneScreen() {
  const label =
    'Phone screenshot. Watched this week: ' +
    watched.map((v) => `${v.title}, ${v.length}`).join('. ') + '.'

  return (
    <div className="screen" role="img" aria-label={label}>
      <span className="tape screen-tape" aria-hidden="true" />
      <p className="screen-head">watched this week</p>
      <ul className="screen-list">
        {watched.map((v) => (
          <li key={v.title}>
            <span className="thumb" aria-hidden="true" />
            <span className="screen-title">
              {v.title}
              <em>{v.length}</em>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
