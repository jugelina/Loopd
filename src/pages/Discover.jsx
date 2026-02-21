import { useState } from 'react'
import ClubCard from '../components/ClubCard'
import { clubs, interests } from '../data/mock'

export default function Discover() {
  const [selected, setSelected] = useState([])

  const toggle = (interest) => {
    setSelected((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    )
  }

  const filtered =
    selected.length === 0
      ? clubs
      : clubs.filter((c) => c.interests?.some((i) => selected.includes(i)))

  return (
    <div className="page-discover">
      <h1 className="page-title">Discover clubs</h1>
      <p className="page-subtitle">Filter by interests to find clubs at your school.</p>

      <section className="section">
        <h2 className="section-title">Your interests</h2>
        <div className="interests-row">
          {interests.map((i) => (
            <button
              key={i}
              type="button"
              className={`interest-chip ${selected.includes(i) ? 'active' : ''}`}
              onClick={() => toggle(i)}
            >
              {i}
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Recommended</h2>
        {filtered.length === 0 ? (
          <p className="empty-state">No clubs match your filters.</p>
        ) : (
          <div className="grid-3">
            {filtered.map((c) => (
              <ClubCard key={c.id} club={c} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
