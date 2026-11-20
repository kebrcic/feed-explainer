import { study } from '../data/study.js'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="sheet">
        <ul className="footnav">
          <li>
            <a href="#sources">Where the numbers come from</a>
          </li>
          <li>
            <a href="#ai-use">How AI was used</a>
          </li>
        </ul>
        <p>
          <b>Source:</b> {study.authorsShort}, {study.journal}, {study.year}, {study.table}.{' '}
          <a href={study.url}>Read the study</a>. The results come from one news website, and they
          are not a test of any social media or video app.
        </p>
        <p>
          <b>Images:</b> the portraits, phone screens and charts were made with AI (Claude). Maya,
          Leo and the video titles are invented. Made by Kevin for ENGW 3302.
        </p>
      </div>
    </footer>
  )
}
