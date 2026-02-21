import { useState, useEffect, useCallback, useRef } from 'react'
import { stories as mockStories } from '../data/mock'
import { clubs } from '../data/mock'
import { useUser } from '../context/UserContext'

const STORY_DURATION_MS = 5000

export default function StoryCarousel() {
  const { userCreatedStories } = useUser()
  const allStories = [...userCreatedStories, ...mockStories]

  const [viewingIndex, setViewingIndex] = useState(null)
  const [progress, setProgress] = useState(0)

  const viewingStory = viewingIndex != null ? allStories[viewingIndex] : null

  const goNext = useCallback(() => {
    setViewingIndex((i) => {
      if (i == null) return null
      if (i < allStories.length - 1) return i + 1
      return null
    })
    setProgress(0)
  }, [allStories.length])

  const goNextRef = useRef(goNext)
  goNextRef.current = goNext

  const goPrev = useCallback(() => {
    if (viewingIndex == null) return
    if (viewingIndex > 0) {
      setViewingIndex((i) => i - 1)
      setProgress(0)
    }
  }, [viewingIndex])

  useEffect(() => {
    if (viewingStory == null) return
    const start = Date.now()
    const frame = () => {
      const elapsed = Date.now() - start
      const p = Math.min(elapsed / STORY_DURATION_MS, 1)
      setProgress(p)
      if (p >= 1) {
        goNextRef.current()
        return
      }
      rafId = requestAnimationFrame(frame)
    }
    let rafId = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(rafId)
  }, [viewingStory, viewingIndex])

  const openStory = (index) => {
    setViewingIndex(index)
    setProgress(0)
  }

  const closeStory = () => setViewingIndex(null)

  const getClubColor = (clubId) => {
    const club = clubs.find((c) => c.id === clubId)
    return club?.coverColor || 'var(--red)'
  }

  if (allStories.length === 0) return null

  return (
    <>
      <div className="stories-row stories-instagram">
        {allStories.map((s, index) => (
          <button
            key={s.id}
            type="button"
            className="story-ring"
            onClick={() => openStory(index)}
            aria-label={`View ${s.clubName} story`}
          >
            <span
              className="story-avatar story-avatar-ring"
              style={{ background: getClubColor(s.clubId) }}
            >
              {s.clubName.charAt(0)}
            </span>
            <span className="story-name">{s.clubName}</span>
          </button>
        ))}
      </div>

      {viewingStory && (
        <div
          className="story-overlay story-overlay-fullscreen"
          role="dialog"
          aria-modal="true"
          aria-label={`Story from ${viewingStory.clubName}`}
        >
          <div className="story-progress-track">
            <div
              className="story-progress-fill"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <button
            type="button"
            className="story-close"
            onClick={closeStory}
            aria-label="Close"
          >
            ×
          </button>

          <div
            className="story-viewer-content"
            style={{
              background: `linear-gradient(135deg, ${getClubColor(viewingStory.clubId)} 0%, var(--red-dark) 100%)`,
            }}
          >
            <p className="story-text">{viewingStory.text}</p>
            <p className="story-from">— {viewingStory.clubName}</p>
          </div>

          <div className="story-tap-zones">
            <button
              type="button"
              className="story-tap-left"
              onClick={goPrev}
              aria-label="Previous story"
            />
            <button
              type="button"
              className="story-tap-right"
              onClick={goNext}
              aria-label="Next story"
            />
          </div>
        </div>
      )}
    </>
  )
}
