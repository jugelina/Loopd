import { useUser } from '../context/UserContext'
import { useFollow } from '../context/FollowContext'
import { notifications } from '../data/mock'

export default function Notifications() {
  const { preset } = useUser()
  const { followClubIds } = useFollow()
  const showNotifications = preset?.hasNotifications !== false
  const followSet = new Set(followClubIds || [])
  const list = showNotifications
    ? notifications.filter((n) => n.clubId && followSet.has(String(n.clubId)))
    : []

  return (
    <div className="page-notifications">
      <h1 className="page-title">Notifications</h1>
      <p className="page-subtitle">Events, RSVPs, and reminders. Unfollow a club to turn off their notifications.</p>

      <section className="section">
        {!showNotifications && (
          <p className="profile-hint">No notifications for this persona.</p>
        )}
        <ul className="notifications-list">
          {list.map((n) => (
            <li
              key={n.id}
              className={`notification-item ${!n.read ? 'unread' : ''}`}
            >
              <span className="notification-dot" />
              <div className="notification-content">
                <p className="notification-text">{n.text}</p>
                <span className="notification-time">{n.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
