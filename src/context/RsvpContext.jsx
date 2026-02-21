import { createContext, useContext, useState, useCallback } from 'react'

const RsvpContext = createContext(null)

export function RsvpProvider({ children }) {
  const [rsvpEventIds, setRsvpEventIds] = useState(() => new Set())

  const toggleRsvp = useCallback((eventId) => {
    setRsvpEventIds((prev) => {
      const next = new Set(prev)
      if (next.has(eventId)) next.delete(eventId)
      else next.add(eventId)
      return next
    })
  }, [])

  const loadPreset = useCallback((eventIds) => {
    setRsvpEventIds(new Set(eventIds || []))
  }, [])

  const value = { rsvpEventIds, toggleRsvp, loadPreset }
  return <RsvpContext.Provider value={value}>{children}</RsvpContext.Provider>
}

export function useRsvp() {
  const ctx = useContext(RsvpContext)
  if (!ctx) throw new Error('useRsvp must be used within RsvpProvider')
  return ctx
}
