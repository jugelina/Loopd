import { Link } from 'react-router-dom'
import StoryCarousel from '../components/StoryCarousel'
import EventCard from '../components/EventCard'
import ClubCard from '../components/ClubCard'
import { events, clubs } from '../data/mock'

export default function Home() {
  const upcomingEvents = events.slice(0, 8)
  const suggestedClubs = clubs.slice(0, 6)

  return (
    <div className="page-home">
      <section className="section">
        <h2 className="section-title">Stories</h2>
        <StoryCarousel />
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Upcoming events</h2>
          <Link to="/hot" className="link-more">Hot This Week →</Link>
        </div>
        <div className="grid-2">
          {upcomingEvents.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Recommended for you</h2>
          <Link to="/discover" className="link-more">Discover more →</Link>
        </div>
        <div className="grid-3">
          {suggestedClubs.map((c) => (
            <ClubCard key={c.id} club={c} />
          ))}
        </div>
      </section>
    </div>
  )
}
