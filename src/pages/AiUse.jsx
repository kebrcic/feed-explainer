const rows = [
  {
    label: "TOOL",
    body: ["Claude, made by Anthropic."],
  },
  {
    label: "WHAT CLAUDE MADE",
    body: [
      "The portraits of Maya and Leo, the phone screens, the clue diagrams, the feed-view switch and some design details, such as the highlight on the title.",
    ],
  },
  {
    label: "ABOUT THE PORTRAITS",
    body: [
      "Maya and Leo are drawn. Claude wrote them as vector illustrations for this site, so they are AI-generated images.",
    ],
  },
];

export default function AiUse() {
  return (
    <>
      <header className="band page-head">
        <div className="sheet">
          <a className="back pen" href="#home">
            ← back to the main page
          </a>
          <h1>How AI was used</h1>
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
        </div>
      </main>
    </>
  );
}
