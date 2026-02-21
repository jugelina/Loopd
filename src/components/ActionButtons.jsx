import { Link } from 'react-router-dom'
import { useFollow } from '../context/FollowContext'
import { useUser } from '../context/UserContext'
import { buildGoogleCalendarUrl } from '../utils/googleCalendar'

export default function ActionButtons({ event }) {
  const { isFollowing } = useFollow()
  const { isRsvpd, toggleRsvp } = useUser()
  const rsvpd = isRsvpd(event.id)
  const canRsvp = !event.isMemberOnly || isFollowing(event.clubId)

  const handleRSVP = () => toggleRsvp(event.id)
  const handleAddToCalendar = () => {
    const url = buildGoogleCalendarUrl(event)
    if (url) window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="action-row">
      {canRsvp ? (
        <button
          type="button"
          className={`btn ${rsvpd ? 'btn-primary' : 'btn-outline'}`}
          onClick={handleRSVP}
        >
          {rsvpd ? '✓ RSVP\'d' : 'RSVP'}
        </button>
      ) : (
        <Link to={`/club/${event.clubId}`} className="btn btn-outline">
          Follow to RSVP
        </Link>
      )}
      <button type="button" className="btn btn-ghost" onClick={handleAddToCalendar}>
        Add to Calendar
      </button>
    </div>
  )
}
