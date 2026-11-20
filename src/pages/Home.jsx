import { useState } from "react";
import FeedSwitch from "../components/FeedSwitch.jsx";
import PersonCard from "../components/PersonCard.jsx";
import PhoneScreen from "../components/PhoneScreen.jsx";
import ClueStrip from "../components/ClueStrip.jsx";
import BarChart from "../components/BarChart.jsx";
import DotGrid from "../components/DotGrid.jsx";
import SourceCard from "../components/SourceCard.jsx";
import MayaPortrait from "../components/illustrations/MayaPortrait.jsx";
import LeoPortrait from "../components/illustrations/LeoPortrait.jsx";
import { people, study } from "../data/study.js";

export default function Home() {
  const [feedView, setFeedView] = useState(false);

  return (
    <>
      <header className="band hero">
        <div className="sheet">
          <h1>
            Does your feed know <span className="hl">why</span> you clicked?
          </h1>
          <p className="lede hero-lede">
            Maya and Leo watched the same three cooking videos this week. They wanted two completely different things
            out of them, and their feeds have no way to tell.
          </p>

          <FeedSwitch on={feedView} onToggle={() => setFeedView((v) => !v)} />

          <div className={`duo${feedView ? " feed-view" : ""}`}>
            <div className="duo-col">
              <PersonCard who="maya" person={people.maya} feedView={feedView} side="left" />
              <PhoneScreen />
            </div>

            <div className="duo-note" aria-hidden="true">
              <span className="margin-note">same 3 videos!!</span>
              <svg viewBox="0 0 24 56" width="22" height="52" className="duo-arrow">
                <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M12 2 V50" />
                  <path d="M5 43 L12 52 L19 43" />
                </g>
              </svg>
            </div>

            <div className="duo-col">
              <PersonCard who="leo" person={people.leo} feedView={feedView} side="right" />
              <PhoneScreen />
            </div>
          </div>

          <p className="hero-cap" aria-live="polite">
            {feedView
              ? "This is the whole file: two identical histories, and no reason behind either one."
              : "The two screens match. What is written under their names is the part your feed never gets to see."}
          </p>
        </div>
      </header>

      <section className="band">
        <div className="sheet">
          <h2>Would more history help it tell them apart?</h2>
          <p>Feeds work from two kinds of clues. Here is what each one picks up on Maia and Leo.</p>

          <div className="clue">
            <div className="clue-text">
              <span className="clue-tag mono">clue type 1</span>
              <h3>What you watch in one sitting</h3>
              <p>
                Both of them opened the same videos in the same order, so this clue hands the feed one history and it
                makes one guess for both of them.
              </p>
              <p className="verdict">same history → same guess</p>
            </div>
            <ClueStrip
              label="Maya and Leo each watched the same three videos, and the feed guesses meal prep next for both of them."
              rows={[
                { who: "Maya", gap: "next?", next: "meal prep", guess: true },
                { who: "Leo", gap: "next?", next: "meal prep", guess: true },
              ]}
            />
          </div>

          <div className="clue flip">
            <div className="clue-text">
              <span className="clue-tag mono">clue type 2</span>
              <h3>What you come back for later</h3>
              <p>
                A week on, Maya looks up bread and Leo doesn’t. Their feeds finally split, but only after Saturday has
                come and gone, and even then the feed sees what they did, never why they did it.
              </p>
              <p className="verdict">different now, still no “why”</p>
            </div>
            <ClueStrip
              label="A week later, Maya watches a bread video and Leo watches basketball highlights."
              rows={[
                { who: "Maya", gap: "a week later", next: "bread" },
                { who: "Leo", gap: "a week later", next: "basketball" },
              ]}
            />
          </div>

          <p className="disclaim">Maya and Leo are made up characters to show the idea.</p>
        </div>
      </section>

      <section className="band results">
        <div className="sheet">
          <h2>So how often do those clues guess right?</h2>
          <p className="lede">
            A peer-reviewed study from {study.year} tried both kinds of clues, and the two together, on the reading
            records of an {study.dataset}. For every click, each method made one guess at the next article the reader
            would open.
          </p>

          <div className="results-grid">
            <BarChart />
            <DotGrid />
          </div>

          <SourceCard />
        </div>
      </section>

      <section className="band takeaway">
        <div className="sheet">
          <h2>A good guess isn’t the same as knowing why</h2>
          <p className="lede">
            The study checked one thing: did the guess match the next click. It never asked anyone why they clicked.
            Your feed has to guess that part too, and it never finds out when it gets it wrong.
          </p>

          <div className="sunday">
            <div className="note note-maya">
              <span className="note-face">
                <MayaPortrait />
              </span>
              <span className="day">Sunday</span>
              <p>Maya is picking out next week’s recipes. Her feed got her right.</p>
            </div>
            <div className="note note-leo">
              <span className="note-face">
                <LeoPortrait />
              </span>
              <span className="day">Sunday</span>
              <p>Leo’s party is over. His feed is still all recipes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band why">
        <div className="sheet">
          <h3>Why this matters for you</h3>
          <p>Your feed can’t tell a phase from a passion. All of these look the same from the outside:</p>
          <ul className="phases">
            <li>three videos for one exam</li>
            <li>shopping for someone else’s gift</li>
            <li>a week of breakup songs</li>
          </ul>
          <p>
            So when something was only a phase, it helps to say so out loud. Many apps have a{" "}
            <span className="hl">“Not interested”</span> option tucked into the menu on a post, and it tells your feed
            something your clicks can’t.
          </p>
          <p className="ni-note">Worth the two seconds.</p>
        </div>
      </section>
    </>
  );
}
