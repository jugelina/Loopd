import { useState } from 'react'
import ClubCard from '../components/ClubCard'
import { clubs } from '../data/mock'

export default function Search() {
  const [query, setQuery] = useState('')

  const searchLower = query.trim().toLowerCase()
  const results =
    !searchLower
      ? clubs
      : clubs.filter(
          (c) =>
            c.name?.toLowerCase().includes(searchLower) ||
            c.tagline?.toLowerCase().includes(searchLower) ||
            (c.interests && c.interests.some((i) => i.toLowerCase().includes(searchLower)))
        )

  return (
    <div className="page-search">
      <h1 className="page-title">Search clubs</h1>
      <p className="page-subtitle">Find clubs by name, tagline, or interest.</p>

      <section className="section search-section">
        <label htmlFor="search-clubs" className="visually-hidden">Search clubs</label>
        <input
          id="search-clubs"
          type="search"
          className="discover-search-input search-input-full"
          placeholder="Search by club name, tagline, or interest..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          aria-label="Search clubs"
        />
      </section>

      <section className="section">
        <h2 className="section-title">{query.trim() ? `Results (${results.length})` : 'All clubs'}</h2>
        {results.length === 0 ? (
          <p className="empty-state">No clubs match your search.</p>
        ) : (
          <div className="grid-3">
            {results.map((c) => (
              <ClubCard key={c.id} club={c} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
