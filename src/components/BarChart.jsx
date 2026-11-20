import { results, study } from '../data/study.js'

const SCALE_MAX = 12.4 // a little past 11.40 so the longest bar doesn't touch the edge

export default function BarChart() {
  const label =
    'Bar chart. ' +
    results.map((r) => `${r.label}: ${r.display}`).join('. ') +
    '. Both combined is the best of the three and is circled in red.'

  return (
    <figure className="chart">
      <figcaption>
        <span className="chart-title">Share of guesses that matched the next click</span>
        <span className="chart-sub mono">
          {study.dataset} · {study.table} of the study
        </span>
      </figcaption>

      <div className="bars" role="img" aria-label={label}>
        {results.map((r) => (
          <div className={`bar-row${r.best ? ' best' : ''}`} key={r.id}>
            <span className="bar-label mono">{r.label}</span>
            <div
              className="bar-track"
              style={{ '--w': `${(r.value / SCALE_MAX) * 100}%` }}
            >
              <span className="bar" style={{ background: r.color }} />
              <span className="bar-value">{r.display}</span>
              {r.best && (
                <svg className="circle-mark" viewBox="0 0 400 70" preserveAspectRatio="none" aria-hidden="true">
                  <path
                    d="M196 4 C266 2 338 8 379 18 C396 23 398 38 382 48 C344 64 250 68 176 66 C112 64 38 60 13 48 C-2 40 1 24 20 17 C56 6 122 3 196 4 Z"
                    fill="none"
                    stroke="var(--red)"
                    strokeWidth="2.4"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="chart-note redpen">best of the three</p>

      <table className="vh">
        <caption>Share of one-article guesses that matched the reader’s next click</caption>
        <thead>
          <tr>
            <th scope="col">Method</th>
            <th scope="col">Share matched</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r.id}>
              <th scope="row">{r.label}</th>
              <td>{r.display}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  )
}
