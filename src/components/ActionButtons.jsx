import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFollow } from '../context/FollowContext'

export default function ActionButtons({ event }) {
  const [rsvpd, setRsvpd] = useState(false)
  const { isFollowing } = useFollow()
  const canRsvp = !event.isMemberOnly || isFollowing(event.clubId)

  const handleRSVP = () => setRsvpd(!rsvpd)
  const handleAddToCalendar = () => {
    alert('Add to calendar (demo)')
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
