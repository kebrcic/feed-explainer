// Every reference to the paper on this site reads from this file, so the
// citation and the three numbers can only ever say one thing.
// Source: Table 5 of the study below.

export const study = {
  authorsFull: 'P. Symeonidis, D. Chaltsev, C. Berbague and M. Zanker',
  authorsShort: 'Symeonidis, Chaltsev, Berbague and Zanker',
  title:
    'Sequence-aware news recommendations by combining intra- with inter-session user information',
  journal: 'Information Retrieval Journal',
  volume: '25',
  pages: '461–480',
  year: '2022',
  table: 'Table 5',
  doi: '10.1007/s10791-022-09415-w',
  url: 'https://doi.org/10.1007/s10791-022-09415-w',
  dataset: 'Italian-language news site',
}

// Share of one-article guesses that matched the reader's next click.
// Percentages are stored as display strings so they can never be reformatted.
export const results = [
  {
    id: 'intra',
    label: 'Clues from this visit',
    display: '6.54%',
    value: 6.54,
    color: 'var(--maya)',
  },
  {
    id: 'inter',
    label: 'Clues across visits',
    display: '1.28%',
    value: 1.28,
    color: 'var(--leo)',
  },
  {
    id: 'both',
    label: 'Both combined',
    display: '11.40%',
    value: 11.4,
    color: 'var(--amber)',
    best: true,
  },
]

export const bestOutOf100 = { hits: 11, misses: 89 }

export const watched = [
  { title: 'Knife skills for beginners', length: '9 min' },
  { title: 'One-pan lemon chicken', length: '12 min' },
  { title: 'Fluffy rice, every time', length: '6 min' },
]

export const people = {
  maya: {
    name: 'Maya',
    reason: 'Learning to cook. Wants new recipes every week.',
    feedView: 'watched 3 cooking videos.',
    // Drop a file in public/images/ and put its path here to use a picture
    // instead of the drawn portrait.
    image: null,
    alt: 'Illustrated portrait of Maya, wearing a bandana and an apron and holding a wooden spoon',
  },
  leo: {
    name: 'Leo',
    reason: 'Just needs one good dish for Saturday’s dinner party.',
    feedView: 'watched 3 cooking videos.',
    image: null,
    alt: 'Illustrated portrait of Leo, wearing glasses and holding a printed dinner party invitation',
  },
}
