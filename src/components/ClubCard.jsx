import { Link } from 'react-router-dom'
import FollowButton from './FollowButton'

export default function ClubCard({ club }) {
  return (
    <Link to={`/club/${club.id}`} className="card club-card">
      <div
        className="club-card-banner"
        style={{ background: club.coverColor || 'var(--red)' }}
      />
      <div className="club-card-body">
        <h3 className="club-name">{club.name}</h3>
        <p className="club-tagline">{club.tagline}</p>
        <div className="club-tags">
          {club.interests?.slice(0, 3).map((i) => (
            <span key={i} className="club-tag">
              {i}
            </span>
          ))}
        </div>
        <div className="club-meta">
          <span>{club.memberCount} members</span>
        </div>
        <div className="club-card-actions">
          <FollowButton club={club} />
        </div>
      </div>
    </Link>
  )
}
