/**
 * Build a Google Calendar "Add event" URL from an event object.
 * @param {{ title: string, date?: string, time?: string, endTime?: string, location?: string, description?: string }} event
 * @returns {string} Google Calendar URL
 */
export function buildGoogleCalendarUrl(event) {
  if (!event?.title) return ''
  const start = event.date && event.time
    ? new Date(`${event.date} ${event.time}`)
    : event.date
      ? new Date(event.date)
      : new Date()
  const end = event.endTime
    ? new Date(`${event.date} ${event.endTime}`)
    : new Date(start.getTime() + 60 * 60 * 1000)
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${formatForGoogle(start)}/${formatForGoogle(end)}`,
  })
  if (event.location) params.set('location', event.location)
  if (event.description) params.set('details', event.description)
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

function formatForGoogle(d) {
  return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}
