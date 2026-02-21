import { createContext, useContext, useState, useCallback } from 'react'

const FollowContext = createContext(null)

export function FollowProvider({ children }) {
  const [followedIds, setFollowedIds] = useState(new Set())

  const toggleFollow = useCallback((clubId) => {
    setFollowedIds((prev) => {
      const next = new Set(prev)
      if (next.has(clubId)) next.delete(clubId)
      else next.add(clubId)
      return next
    })
  }, [])

  const isFollowing = useCallback(
    (clubId) => followedIds.has(clubId),
    [followedIds]
  )

  return (
    <FollowContext.Provider value={{ toggleFollow, isFollowing }}>
      {children}
    </FollowContext.Provider>
  )
}

export function useFollow() {
  const ctx = useContext(FollowContext)
  if (!ctx) throw new Error('useFollow must be used within FollowProvider')
  return ctx
}
