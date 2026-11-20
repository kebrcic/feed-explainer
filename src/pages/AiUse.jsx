const rows = [
  {
    label: 'TOOL',
    body: [
      'Claude, made by Anthropic, used two ways: through claude.ai (model: Claude Opus 5.5) in November 2026, and through Claude Code (model: Claude Opus 5) for the most recent passes.',
    ],
  },
  {
    label: 'WHAT CLAUDE MADE',
    body: [
      'This website and its two notes pages: the layout, colors and typefaces, the portraits of Maya and Leo, the phone screens, the clue diagrams, both charts, the feed-view switch and most of the wording.',
      'I asked Claude to rebuild my draft to follow the assignment guidelines and the feedback from my instructor and two peer reviewers, then to redesign it, and finally to turn it into a website.',
      'The current design, the React rebuild and the current wording were made with Claude Code, working from the same material and my directions about the style I wanted.',
    ],
  },
  {
    label: 'ABOUT THE PORTRAITS',
    body: [
      'Maya and Leo are drawn, not photographed. Claude wrote them as vector illustrations for this site, so they are AI-generated images in the sense that matters: no human illustrator drew them, and they are not pictures of real people.',
    ],
  },
  {
    label: 'WHAT CAME FROM ME',
    body: [
      'The research from my Project 2 work: choosing this study, picking the finding to focus on, and pulling the results out of its Table 5. The target audience, college students, and the message that predicting a click is not the same as knowing why someone clicked. My earlier draft, which Claude revised. The art direction for this version.',
    ],
  },
  {
    label: 'ACCURACY',
    body: [
      'All three percentages come from Table 5 of the study, and every part of the site reads them from a single file so they cannot drift apart. As the author, I am responsible for every claim and number here matching the source.',
    ],
  },
]

export default function AiUse() {
  return (
    <>
      <header className="band page-head">
        <div className="sheet">
          <a className="back hand pen" href="#home">
            ← back to the main page
          </a>
          <h1>How AI was used</h1>
          <p className="lede">
            This project used AI heavily. Here is exactly what it did and what came from me, so you
            can judge the work with that in mind.
          </p>
        </div>
      </header>

      <main className="band">
        <div className="sheet">
          <div className="rows">
            {rows.map((row) => (
              <div className="row" key={row.label}>
                <h3 className="mono">{row.label}</h3>
                <div>
                  {row.body.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="fine">This page was also drafted by Claude.</p>
        </div>
      </main>
    </>
  )
}
