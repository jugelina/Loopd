import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const UserContext = createContext(null)

export const USER_PRESETS = {
  ben: {
    id: 'ben',
    name: 'Ben',
    description: 'A first year who missed the club fair and has no clue how to get involved.',
    followClubIds: [],
    rsvpEventIds: [],
    interests: ['Sports', 'Academic', 'Pre-Professional', 'Gaming', 'Affinity'],
    hasNotifications: false,
    isAdmin: false,
  },
  sarah: {
    id: 'sarah',
    name: 'Sarah',
    description: 'Very busy senior who loves to be involved. Has a pretty empty week and wants to see what\'s going on this weekend.',
    followClubIds: ['14', '28', '33'], // Premedicine Society, Bee Club, The Davidson Delilahs
    rsvpEventIds: ['e11', 'e12', 'e13', 'e18', 'e19', 'e30'], // Premed, Bee Club, Delilahs events
    interests: [],
    hasNotifications: true,
    isAdmin: false,
  },
  john: {
    id: 'john',
    name: 'John',
    description: 'Club leader for Libertas. Admin account.',
    followClubIds: ['17'], // Libertas
    rsvpEventIds: ['e9', 'e17', 'e60'], // Libertas events
    interests: [],
    hasNotifications: true,
    isAdmin: true,
    managedClubId: '17',
  },
}

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState('ben')
  const [rsvpEventIds, setRsvpEventIds] = useState(() => [...(USER_PRESETS.ben.rsvpEventIds || [])])
  const [userCreatedEvents, setUserCreatedEvents] = useState([])
  const [userCreatedPosts, setUserCreatedPosts] = useState([])
  const [userCreatedStories, setUserCreatedStories] = useState([])
  const [clubOverrides, setClubOverrides] = useState({})
  const [removedMemberIds, setRemovedMemberIds] = useState([])

  useEffect(() => {
    const preset = USER_PRESETS[currentUser]
    setRsvpEventIds([...(preset?.rsvpEventIds || [])])
  }, [currentUser])

  const toggleRsvp = useCallback((eventId) => {
    setRsvpEventIds((prev) => {
      const set = new Set(prev)
      if (set.has(eventId)) set.delete(eventId)
      else set.add(eventId)
      return [...set]
    })
  }, [])

  const isRsvpd = useCallback(
    (eventId) => rsvpEventIds.includes(eventId),
    [rsvpEventIds]
  )

  const setClubOverride = useCallback((clubId, data) => {
    setClubOverrides((prev) => ({ ...prev, [clubId]: { ...prev[clubId], ...data } }))
  }, [])

  const addUserCreatedEvent = useCallback((event) => {
    setUserCreatedEvents((prev) => [...prev, { ...event, id: `user-${Date.now()}` }])
  }, [])

  const addUserCreatedPost = useCallback((post) => {
    setUserCreatedPosts((prev) => [...prev, { ...post, id: `user-p-${Date.now()}` }])
  }, [])

  const addUserCreatedStory = useCallback((story) => {
    setUserCreatedStories((prev) => [...prev, { ...story, id: `user-s-${Date.now()}` }])
  }, [])

  const removeMember = useCallback((memberId) => {
    setRemovedMemberIds((prev) => [...prev, memberId])
  }, [])

  const value = {
    currentUser,
    setCurrentUser,
    preset: USER_PRESETS[currentUser],
    rsvpEventIds,
    toggleRsvp,
    isRsvpd,
    userCreatedEvents,
    addUserCreatedEvent,
    userCreatedPosts,
    addUserCreatedPost,
    userCreatedStories,
    addUserCreatedStory,
    clubOverrides,
    setClubOverride,
    removedMemberIds,
    removeMember,
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error('useUser must be used within UserProvider')
  return ctx
}
