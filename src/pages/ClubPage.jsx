import { useParams, Link } from 'react-router-dom'
import EventCard from '../components/EventCard'
import FollowButton from '../components/FollowButton'
import { clubs, events, posts } from '../data/mock'

export default function ClubPage() {
  const { id } = useParams()
  const club = clubs.find((c) => c.id === id)
  const clubEvents = events.filter((e) => e.clubId === id)
  const clubPosts = posts.filter((p) => p.clubId === id)

  if (!club) {
    return (
      <div className="page-club">
        <p>Club not found.</p>
        <Link to="/discover">Discover clubs</Link>
      </div>
    )
  }

  return (
    <div className="page-club">
      <div
        className="club-hero"
        style={{ background: club.coverColor || 'var(--red)' }}
      >
        <div className="club-hero-inner">
          <h1 className="club-hero-name">{club.name}</h1>
          <p className="club-hero-tagline">{club.tagline}</p>
          <div className="club-hero-meta">
            <span>{club.memberCount} members</span>
          </div>
          <div className="club-hero-actions">
            <FollowButton club={club} />
          </div>
        </div>
      </div>

      <section className="section">
        <h2 className="section-title">Events</h2>
        {clubEvents.length ? (
          <div className="grid-2">
            {clubEvents.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        ) : (
          <p className="empty-state">No upcoming events.</p>
        )}
      </section>

      <section className="section">
        <h2 className="section-title">Posts & highlights</h2>
        {clubPosts.length ? (
          <div className="posts-list">
            {clubPosts.map((p) => (
              <article key={p.id} className="card post-card">
                <div className="post-card-header">
                  <strong>{p.clubName}</strong>
                </div>
                <div className="post-card-body">
                  {p.imagePlaceholder && (
                    <div className="post-image-placeholder" style={{ background: 'var(--gray-200)' }} />
                  )}
                  <p>{p.text}</p>
                </div>
                <div className="post-card-footer">
                  <span>❤️ {p.likes}</span>
                  <span>💬 {p.comments}</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-state">No posts yet.</p>
        )}
      </section>
    </div>
  )
}
