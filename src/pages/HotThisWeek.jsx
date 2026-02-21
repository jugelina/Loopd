import EventCard from '../components/EventCard'
import { events } from '../data/mock'

export default function HotThisWeek() {
  const weekEvents = [...events].sort((a, b) => b.rsvpCount - a.rsvpCount)

  return (
    <div className="page-hot">
      <h1 className="page-title">Hot This Week</h1>
      <p className="page-subtitle">One week at a time. Most popular events right now.</p>

      <section className="section">
        <div className="grid-2">
          {weekEvents.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </section>
    </div>
  )
}
