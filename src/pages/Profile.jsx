import { useState } from 'react'

export default function Profile() {
  const [accountType, setAccountType] = useState('student') // 'student' | 'admin'

  return (
    <div className="page-profile">
      <h1 className="page-title">Profile</h1>
      <p className="page-subtitle">Switch between student and club leader views.</p>

      <section className="section">
        <h2 className="section-title">Account type</h2>
        <div className="account-switcher">
          <button
            type="button"
            className={`account-tab ${accountType === 'student' ? 'active' : ''}`}
            onClick={() => setAccountType('student')}
          >
            Student
          </button>
          <button
            type="button"
            className={`account-tab ${accountType === 'admin' ? 'active' : ''}`}
            onClick={() => setAccountType('admin')}
          >
            Club leader / Admin
          </button>
        </div>
        <p className="account-hint">
          {accountType === 'student'
            ? 'You’re viewing as a student. Discover clubs, RSVP to events, and get notifications.'
            : 'You’re viewing as a club leader. Manage your org, post events, and see attendance.'}
        </p>
      </section>

    </div>
  )
}
