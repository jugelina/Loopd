import { useFollow } from '../context/FollowContext'

export default function FollowButton({ club }) {
  const { isFollowing, toggleFollow } = useFollow()
  const following = isFollowing(club.id)

  return (
    <button
      type="button"
      className={`btn ${following ? 'btn-primary' : 'btn-outline btn-follow'}`}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleFollow(club.id)
      }}
    >
      {following ? '✓ Following' : 'Follow'}
    </button>
  )
}
