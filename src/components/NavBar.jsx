import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        Loopd
      </NavLink>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/hot" className={({ isActive }) => isActive ? 'active' : ''}>
          Hot This Week
        </NavLink>
        <NavLink to="/discover" className={({ isActive }) => isActive ? 'active' : ''}>
          Discover
        </NavLink>
        <NavLink to="/notifications" className={({ isActive }) => isActive ? 'active' : ''}>
          Notifications
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
          Profile
        </NavLink>
      </div>
    </nav>
  )
}
