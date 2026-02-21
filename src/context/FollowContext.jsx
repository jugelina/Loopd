import { createContext, useContext, useState, useCallback } from 'react'

const FollowContext = createContext(null)

export function FollowProvider({ children }) {
  const [followClubIds, setFollowClubIds] = useState(new Set())

  const toggleFollow = useCallback((clubId) => {
    setFollowClubIds((prev) => {
      const next = new Set(prev)
      if (next.has(clubId)) next.delete(clubId)
      else next.add(clubId)
      return next
    })
  }, [])

  const loadPreset = useCallback((clubIds) => {
    setFollowClubIds(new Set(clubIds || []))
  }, [])

  const isFollowing = useCallback(
    (clubId) => followClubIds.has(clubId),
    [followClubIds]
  )

  return (
    <FollowContext.Provider value={{ followClubIds, toggleFollow, loadPreset, isFollowing }}>
      {children}
    </FollowContext.Provider>
  )
}

export function useFollow() {
  const ctx = useContext(FollowContext)
  if (!ctx) throw new Error('useFollow must be used within FollowProvider')
  return ctx
}
