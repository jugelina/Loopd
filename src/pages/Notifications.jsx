import { notifications } from '../data/mock'

export default function Notifications() {
  return (
    <div className="page-notifications">
      <h1 className="page-title">Notifications</h1>
      <p className="page-subtitle">Events, RSVPs, and reminders. Unfollow a club to turn off their notifications.</p>

      <section className="section">
        <ul className="notifications-list">
          {notifications.map((n) => (
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
