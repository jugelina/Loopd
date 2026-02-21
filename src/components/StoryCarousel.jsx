import { useState } from 'react'
import { stories } from '../data/mock'

export default function StoryCarousel() {
  const [activeStory, setActiveStory] = useState(null)

  const openStory = (s) => setActiveStory(s)
  const closeStory = () => setActiveStory(null)

  return (
    <>
      <div className="stories-row">
        {stories.map((s) => (
          <button
            key={s.id}
            type="button"
            className="story-ring"
            onClick={() => openStory(s)}
            aria-label={`View ${s.clubName} story`}
          >
            <span className="story-avatar" style={{ background: 'var(--red)' }}>
              {s.clubName.charAt(0)}
            </span>
            <span className="story-name">{s.clubName}</span>
          </button>
        ))}
      </div>

      {activeStory && (
        <div className="story-overlay" role="dialog" aria-modal="true">
          <div className="story-modal">
            <button type="button" className="story-close" onClick={closeStory} aria-label="Close">
              ×
            </button>
            <div
              className="story-content"
              style={{ background: 'linear-gradient(135deg, var(--red) 0%, var(--red-dark) 100%)' }}
            >
              <p className="story-text">{activeStory.text}</p>
              <p className="story-from">— {activeStory.clubName}</p>
            </div>
            <div className="story-nav">
              <button type="button" onClick={closeStory} className="btn btn-primary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
