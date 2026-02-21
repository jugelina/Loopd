import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { useFollow } from '../context/FollowContext'
import { USER_PRESETS } from '../context/UserContext'
import ProfileAdmin from '../components/ProfileAdmin'
import { clubs, events } from '../data/mock'

export default function Profile() {
  const { currentUser, setCurrentUser, preset, rsvpEventIds } = useUser()
  const { loadPreset, followClubIds } = useFollow()
  const followList = Array.from(followClubIds || [])
  const rsvpList = rsvpEventIds || []
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const p = USER_PRESETS[currentUser]
    loadPreset(p?.followClubIds ?? [])
  }, [currentUser, loadPreset])

  const handleSwitchPersona = (id) => {
    setCurrentUser(id)
    const p = USER_PRESETS[id]
    if (p?.followClubIds) loadPreset(p.followClubIds)
    else loadPreset([])
  }

  return (
    <div className="page-profile">
      <h1 className="page-title">Profile</h1>
      <p className="page-subtitle">Switch between personas to see different student and club leader views.</p>

      <section className="section">
        <h2 className="section-title">Persona</h2>
        <div className="account-switcher persona-switcher">
          {(Object.keys(USER_PRESETS)).map((id) => (
            <button
              key={id}
              type="button"
              className={`account-tab ${currentUser === id ? 'active' : ''}`}
              onClick={() => handleSwitchPersona(id)}
            >
              {USER_PRESETS[id].name}
            </button>
          ))}
        </div>
        {mounted && preset && (
          <div className="profile-persona-info">
            <p className="profile-persona-name">{preset.name}</p>
            <p className="profile-persona-desc">{preset.description}</p>
          </div>
        )}
      </section>

      <section className="section profile-my-clubs">
        <h2 className="section-title">
          My clubs
          <span className="profile-count-badge">{followList.length}</span>
        </h2>
        {followList.length > 0 ? (
          <div className="profile-club-grid">
            {followList.map((clubId) => {
              const club = clubs.find((c) => c.id === clubId)
              if (!club) return null
              return (
                <Link key={club.id} to={`/club/${club.id}`} className="profile-club-card">
                  <span className="profile-club-card-avatar" style={{ background: club.coverColor || 'var(--red)' }}>
                    {club.name.charAt(0)}
                  </span>
                  <div className="profile-club-card-body">
                    <strong className="profile-club-card-name">{club.name}</strong>
                    <span className="profile-club-card-tagline">{club.tagline}</span>
                    <span className="profile-club-card-meta">{club.memberCount} members · {club.eventsThisWeek} this week</span>
                  </div>
                  <span className="profile-club-card-arrow" aria-hidden>→</span>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="profile-empty-card">
            <p className="profile-empty-state">Not following any clubs yet.</p>
            <p><Link to="/discover" className="btn btn-outline btn-sm">Discover clubs</Link> or <Link to="/search" className="btn btn-outline btn-sm">Search</Link> to get started.</p>
          </div>
        )}
      </section>

      <section className="section profile-my-rsvps">
        <h2 className="section-title">
          My RSVPs
          <span className="profile-count-badge">{rsvpList.length}</span>
        </h2>
        {rsvpList.length > 0 ? (
          <div className="profile-rsvp-grid">
            {rsvpList
              .map((eventId) => events.find((e) => e.id === eventId))
              .filter(Boolean)
              .map((ev) => (
                <Link key={ev.id} to={`/club/${ev.clubId}`} className="profile-rsvp-card">
                  <div className="profile-rsvp-card-header">
                    <span className="profile-rsvp-card-club">{ev.clubName}</span>
                    <span className="profile-rsvp-card-date">{ev.date}</span>
                  </div>
                  <h3 className="profile-rsvp-card-title">{ev.title}</h3>
                  <p className="profile-rsvp-card-meta">{ev.time} · {ev.location}</p>
                  <span className="profile-rsvp-card-arrow" aria-hidden>→</span>
                </Link>
              ))}
          </div>
            ) : (
          <div className="profile-empty-card">
            <p className="profile-empty-state">No events RSVP’d yet. </p>
            <p><Link to="/" className="btn btn-outline btn-sm">Home</Link> or <Link to="/hot" className="btn btn-outline btn-sm">Hot This Week</Link> to find events.</p>
          </div>
        )}
      </section>

      {preset?.isAdmin && <ProfileAdmin />}
    </div>
  )
}
