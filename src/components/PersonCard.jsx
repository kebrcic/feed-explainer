import MayaPortrait from './illustrations/MayaPortrait.jsx'
import LeoPortrait from './illustrations/LeoPortrait.jsx'

const portraits = { maya: MayaPortrait, leo: LeoPortrait }

export default function PersonCard({ who, person, feedView, side }) {
  const Portrait = portraits[who]

  return (
    <figure className={`person person-${side}`}>
      <div className="snap">
        {person.image ? (
          <img src={person.image} alt={person.alt} />
        ) : (
          <Portrait title={person.alt} />
        )}
      </div>
      <figcaption className={`person-name person-name-${who}`}>{person.name}</figcaption>
      <p className="person-reason">{feedView ? person.feedView : person.reason}</p>
    </figure>
  )
}
