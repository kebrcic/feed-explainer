import { study, results } from "../data/study.js";

export default function Sources() {
  return (
    <>
      <header className="band page-head">
        <div className="sheet">
          <a className="back pen" href="#home">
            ← back to the main page
          </a>
          <h1>Where the numbers come from</h1>
          <p className="lede">For anyone who wants to check the main page, or doesn’t quite trust it yet.</p>
        </div>
      </header>

      <main className="band">
        <div className="sheet">
          <div className="cols">
            <div>
              <h3>The study</h3>
              <p>
                Four researchers published it in {study.year} in the {study.journal}, which is peer reviewed, so other
                experts checked the work before it was published. They used reading records from three news websites.
                The main page uses one of them, an {study.dataset}.
              </p>
            </div>
            <div>
              <h3>What they measured</h3>
              <p>
                For each click, a method guessed the one article the reader would open next, and the guess only counted
                if it matched. “Clues from this visit” and “clues across visits” are plain names for what the study
                calls intra-session and inter-session information. “Both combined” weighs the two equally.
              </p>
            </div>
            <div>
              <h3>How to read the chart</h3>
              <p>
                {results[2].display} works out to about 11 right guesses per 100. A news site holds a lot of articles,
                so landing one guess is genuinely hard, and the study doesn’t claim the methods are bad. Even the best
                one was predicting what people would click, not learning why.
              </p>
            </div>
            <div>
              <h3>What it can’t tell us</h3>
              <p>
                Whether readers liked the suggestions, why anyone clicked, or how any social media or video app works.
                It only checked guesses against the next click, on news websites.
              </p>
            </div>
          </div>

          <div className="cite">
            <p>
              <b>Full citation:</b> {study.authorsFull}, “{study.title},” {study.journal}, vol. {study.volume}, pp.{" "}
              {study.pages}, {study.year}. Chart values from {study.table}.
            </p>
            <p>
              Read it at <a href={study.url}>doi.org/{study.doi}</a>.
            </p>
          </div>

          <div className="cite">
            <p>
              <b>About the images:</b> the portraits of Maya and Leo, the phone screens, and the clue diagrams were made
              with AI (Claude) for this site. Maya, Leo and every video title are invented. There charts were made using
              HTML, and CSS. no photos of real people. <a href="#ai-use">See how AI was used</a>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
