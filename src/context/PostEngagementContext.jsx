import { createContext, useContext, useState, useCallback } from 'react'
import { useUser } from './UserContext'

const PostEngagementContext = createContext(null)

export function PostEngagementProvider({ children }) {
  const { preset } = useUser()
  const [likedPostIds, setLikedPostIds] = useState(() => new Set())
  const [commentsByPostId, setCommentsByPostId] = useState({})

  const toggleLike = useCallback((postId) => {
    setLikedPostIds((prev) => {
      const next = new Set(prev)
      if (next.has(postId)) next.delete(postId)
      else next.add(postId)
      return next
    })
  }, [])

  const addComment = useCallback(
    (postId, text) => {
      if (!text?.trim()) return
      const comment = {
        id: `comment-${Date.now()}`,
        author: preset?.name ?? 'You',
        text: text.trim(),
        time: 'Just now',
      }
      setCommentsByPostId((prev) => ({
        ...prev,
        [postId]: [...(prev[postId] || []), comment],
      }))
    },
    [preset?.name]
  )

  const value = {
    likedPostIds,
    toggleLike,
    commentsByPostId,
    addComment,
  }
  return (
    <PostEngagementContext.Provider value={value}>
      {children}
    </PostEngagementContext.Provider>
  )
}

export function usePostEngagement() {
  const ctx = useContext(PostEngagementContext)
  if (!ctx) throw new Error('usePostEngagement must be used within PostEngagementProvider')
  return ctx
}
