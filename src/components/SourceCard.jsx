import { study } from '../data/study.js'

// The paper itself, on the page rather than hidden in a footnote.
export default function SourceCard({ compact = false }) {
  return (
    <aside className={`source-card${compact ? ' compact' : ''}`}>
      <p className="source-kicker mono">where this number comes from</p>
      <p className="source-title">“{study.title}”</p>
      <p className="source-meta">
        {study.authorsShort} · <i>{study.journal}</i>, vol. {study.volume}, pp. {study.pages},{' '}
        {study.year} · {study.table}
      </p>
      <p className="source-links">
        <a href={study.url}>Read the study</a>
        <span aria-hidden="true"> · </span>
        <a href="#sources">What it does and doesn’t show</a>
      </p>
    </aside>
  )
}
