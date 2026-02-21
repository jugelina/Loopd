import { useState } from 'react'
import { useUser } from '../context/UserContext'
import { events, clubs, clubMembers } from '../data/mock'
import { buildGoogleCalendarUrl } from '../utils/googleCalendar'

const MANAGED_CLUB_ID = '17'

export default function ProfileAdmin() {
  const { preset, userCreatedEvents, addUserCreatedEvent, addUserCreatedPost, addUserCreatedStory, clubOverrides, setClubOverride, removedMemberIds, removeMember } = useUser()
  const club = clubs.find((c) => c.id === MANAGED_CLUB_ID) || {}
  const override = clubOverrides[MANAGED_CLUB_ID] || {}
  const displayName = override.name ?? club.name
  const displayTagline = override.tagline ?? club.tagline

  const [activeTab, setActiveTab] = useState('organization')
  const [savedOrg, setSavedOrg] = useState(false)
  const [postText, setPostText] = useState('')
  const [postSaved, setPostSaved] = useState(false)
  const [storyText, setStoryText] = useState('')
  const [storySaved, setStorySaved] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    endTime: '',
    location: '',
    description: '',
  })
  const [eventError, setEventError] = useState('')

  const staticClubEvents = events.filter((e) => e.clubId === MANAGED_CLUB_ID)
  const allClubEvents = [...userCreatedEvents.filter((e) => e.clubId === MANAGED_CLUB_ID), ...staticClubEvents]
  const now = new Date()
  const parseEventDate = (e) => {
    const d = new Date(e.date + ' ' + (e.time || '12:00 PM'))
    return isNaN(d.getTime()) ? null : d
  }
  const upcoming = allClubEvents
    .map((e) => ({ ...e, dateObj: parseEventDate(e) }))
    .filter((e) => e.dateObj && e.dateObj >= now)
    .sort((a, b) => a.dateObj - b.dateObj)
  const past = allClubEvents
    .map((e) => ({ ...e, dateObj: parseEventDate(e) }))
    .filter((e) => e.dateObj && e.dateObj < now)
    .sort((a, b) => b.dateObj - a.dateObj)

  const handleSaveOrganization = (e) => {
    e.preventDefault()
    const form = e.target
    setClubOverride(MANAGED_CLUB_ID, {
      name: form.name?.value?.trim() || club.name,
      tagline: form.tagline?.value?.trim() || club.tagline,
    })
    setSavedOrg(true)
    setTimeout(() => setSavedOrg(false), 2000)
  }

  const handlePostSubmit = (e) => {
    e.preventDefault()
    if (postText.trim()) {
      addUserCreatedPost({
        clubId: MANAGED_CLUB_ID,
        clubName: displayName,
        text: postText.trim(),
      })
      setPostSaved(true)
      setPostText('')
      setTimeout(() => setPostSaved(false), 2000)
    }
  }

  const handleStorySubmit = (e) => {
    e.preventDefault()
    if (storyText.trim()) {
      addUserCreatedStory({
        clubId: MANAGED_CLUB_ID,
        clubName: displayName,
        text: storyText.trim(),
      })
      setStorySaved(true)
      setStoryText('')
      setTimeout(() => setStorySaved(false), 2000)
    }
  }

  const handleCreateEvent = (e) => {
    e.preventDefault()
    setEventError('')
    const form = e.target
    const title = form.title?.value?.trim()
    const date = form.date?.value
    const time = form.time?.value || '12:00 PM'
    const endTime = form.endTime?.value || ''
    const location = form.location?.value?.trim() || ''
    const description = form.description?.value?.trim() || ''
    if (!title || !date) {
      setEventError('Title and date are required.')
      return
    }
    const dateObj = new Date(date + ' ' + time)
    if (isNaN(dateObj.getTime())) {
      setEventError('Invalid date or time.')
      return
    }
    if (dateObj < now) {
      setEventError('Event date must be in the future.')
      return
    }
    addUserCreatedEvent({
      clubId: MANAGED_CLUB_ID,
      clubName: displayName,
      title,
      date: dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      time,
      endTime,
      location,
      description,
      rsvpCount: 0,
      capacity: null,
      isMemberOnly: false,
    })
    setNewEvent({ title: '', date: '', time: '', endTime: '', location: '', description: '' })
    form.reset()
  }

  const membersForClub = clubMembers.filter((m) => m.clubId === MANAGED_CLUB_ID && !removedMemberIds.includes(m.id))

  const tabs = [
    { id: 'organization', label: 'Your Organization' },
    { id: 'members', label: 'Members' },
    { id: 'events', label: 'Your Events' },
    { id: 'stories', label: 'Stories' },
    { id: 'post', label: 'Posts' },
    { id: 'create', label: 'Create Event' },
  ]

  return (
    <div className="profile-admin">
      <p className="page-subtitle">{preset.description} — Admin view</p>

      <div className="profile-admin-tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`profile-admin-tab ${activeTab === t.id ? 'active' : ''}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {activeTab === 'members' && (
        <section className="section profile-admin-section">
          <h2 className="section-title">Club members</h2>
          {membersForClub.length === 0 ? (
            <p className="profile-empty">No members to show.</p>
          ) : (
            <ul className="profile-admin-member-list">
              {membersForClub.map((member) => (
                <li key={member.id} className="profile-admin-member-item">
                  <div>
                    <strong>{member.name}</strong>
                    <span className="profile-admin-member-meta">
                      {member.email}
                      {member.role && ` · ${member.role}`}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm btn-danger"
                    onClick={() => removeMember(member.id)}
                    aria-label={`Remove ${member.name}`}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {activeTab === 'organization' && (
        <section className="section profile-admin-section">
          <h2 className="section-title">Edit club details</h2>
          <form onSubmit={handleSaveOrganization} className="profile-admin-form">
            <label>
              <span>Club name</span>
              <input type="text" name="name" defaultValue={displayName} placeholder={club.name} />
            </label>
            <label>
              <span>Tagline</span>
              <input type="text" name="tagline" defaultValue={displayTagline} placeholder={club.tagline} />
            </label>
            <button type="submit" className="btn btn-primary">
              Save changes
            </button>
            {savedOrg && <p className="form-feedback success">Saved!</p>}
          </form>
        </section>
      )}

      {activeTab === 'events' && (
        <section className="section profile-admin-section">
          <h2 className="section-title">Upcoming events</h2>
          {upcoming.length === 0 ? (
            <p className="profile-empty">No upcoming events.</p>
          ) : (
            <ul className="profile-admin-event-list">
              {upcoming.map((ev) => (
                <li key={ev.id} className="profile-admin-event-item">
                  <div>
                    <strong>{ev.title}</strong>
                    <span className="profile-admin-event-meta">
                      {ev.date} · {ev.time}
                      {ev.endTime ? ` – ${ev.endTime}` : ''} · {ev.location}
                    </span>
                  </div>
                  <a
                    href={buildGoogleCalendarUrl(ev) || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm"
                  >
                    Add to calendar
                  </a>
                </li>
              ))}
            </ul>
          )}
          <h2 className="section-title">Past events</h2>
          {past.length === 0 ? (
            <p className="profile-empty">No past events.</p>
          ) : (
            <ul className="profile-admin-event-list past">
              {past.map((ev) => (
                <li key={ev.id} className="profile-admin-event-item">
                  <strong>{ev.title}</strong>
                  <span className="profile-admin-event-meta">
                    {ev.date} · {ev.time} · {ev.location}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {activeTab === 'stories' && (
        <section className="section profile-admin-section">
          <h2 className="section-title">Post a story</h2>
          <p className="profile-hint">Stories appear at the top of the home feed for 24 hours.</p>
          <form onSubmit={handleStorySubmit} className="profile-admin-form">
            <label>
              <span>Story text</span>
              <textarea
                value={storyText}
                onChange={(e) => setStoryText(e.target.value)}
                placeholder="What's happening with your club?"
                rows={3}
              />
            </label>
            <button type="submit" className="btn btn-primary" disabled={!storyText.trim()}>
              Post story
            </button>
            {storySaved && <p className="form-feedback success">Story posted!</p>}
          </form>
        </section>
      )}

      {activeTab === 'post' && (
        <section className="section profile-admin-section">
          <h2 className="section-title">Create a post</h2>
          <form onSubmit={handlePostSubmit} className="profile-admin-form">
            <label>
              <span>Text</span>
              <textarea
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="What's new with your club?"
                rows={4}
              />
            </label>
            <button type="submit" className="btn btn-primary" disabled={!postText.trim()}>
              Post
            </button>
            {postSaved && <p className="form-feedback success">Post published!</p>}
          </form>
        </section>
      )}

      {activeTab === 'create' && (
        <section className="section profile-admin-section">
          <h2 className="section-title">Create event</h2>
          <form onSubmit={handleCreateEvent} className="profile-admin-form">
            <label>
              <span>Title *</span>
              <input
                type="text"
                name="title"
                value={newEvent.title}
                onChange={(e) => setNewEvent((p) => ({ ...p, title: e.target.value }))}
                required
              />
            </label>
            <label>
              <span>Date *</span>
              <input
                type="date"
                name="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent((p) => ({ ...p, date: e.target.value }))}
                min={new Date().toISOString().slice(0, 10)}
                required
              />
            </label>
            <label>
              <span>Time</span>
              <input
                type="text"
                name="time"
                value={newEvent.time}
                onChange={(e) => setNewEvent((p) => ({ ...p, time: e.target.value }))}
                placeholder="7:00 PM"
              />
            </label>
            <label>
              <span>End time</span>
              <input
                type="text"
                name="endTime"
                value={newEvent.endTime}
                onChange={(e) => setNewEvent((p) => ({ ...p, endTime: e.target.value }))}
                placeholder="9:00 PM"
              />
            </label>
            <label>
              <span>Location</span>
              <input
                type="text"
                name="location"
                value={newEvent.location}
                onChange={(e) => setNewEvent((p) => ({ ...p, location: e.target.value }))}
                placeholder="E.H. Little Library"
              />
            </label>
            <label>
              <span>Description</span>
              <textarea
                name="description"
                value={newEvent.description}
                onChange={(e) => setNewEvent((p) => ({ ...p, description: e.target.value }))}
                rows={3}
              />
            </label>
            {eventError && <p className="form-feedback error">{eventError}</p>}
            <button type="submit" className="btn btn-primary">
              Add event
            </button>
          </form>
        </section>
      )}
    </div>
  )
}
