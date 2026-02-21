import { Link } from 'react-router-dom'
import ActionButtons from './ActionButtons'

export default function EventCard({ event }) {
  return (
    <article className="card event-card">
      <div className="event-card-header" style={{ background: 'var(--black)' }}>
        <span className="event-club">{event.clubName}</span>
        {event.isMemberOnly && <span className="badge badge-outline">Members only</span>}
      </div>
      <div className="event-card-body">
        <h3 className="event-title">{event.title}</h3>
        <ul className="event-meta">
          <li>{event.date}</li>
          <li>{event.time}</li>
          <li>{event.location}</li>
        </ul>
        <p className="event-rsvp">{event.rsvpCount} RSVPs</p>
        <ActionButtons event={event} />
      </div>
      <div className="event-card-footer">
        <Link to={`/club/${event.clubId}`} className="event-link">
          View club →
        </Link>
      </div>
    </article>
  )
}
