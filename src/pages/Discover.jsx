import { useState } from 'react'
import ClubCard from '../components/ClubCard'
import { clubs, interests } from '../data/mock'

export default function Discover() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState([])

  const toggle = (interest) => {
    setSelected((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    )
  }

  const searchLower = search.trim().toLowerCase()
  const bySearch =
    !searchLower
      ? clubs
      : clubs.filter(
          (c) =>
            c.name?.toLowerCase().includes(searchLower) ||
            c.tagline?.toLowerCase().includes(searchLower)
        )
  const filtered =
    selected.length === 0
      ? bySearch
      : bySearch.filter((c) => c.interests?.some((i) => selected.includes(i)))

  return (
    <div className="page-discover">
      <h1 className="page-title">Discover clubs</h1>
      <p className="page-subtitle">Search and filter by interests to find clubs at your school.</p>

      <section className="section discover-search-section">
        <h2 className="section-title">Search clubs</h2>
        <input
          type="search"
          className="discover-search-input"
          placeholder="Search by club name or tagline..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search clubs"
        />
      </section>

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
        <h2 className="section-title">{search.trim() ? 'Results' : 'Recommended'}</h2>
        {filtered.length === 0 ? (
          <p className="empty-state">No clubs match your search or filters.</p>
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
