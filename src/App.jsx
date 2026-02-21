import { Routes, Route } from 'react-router-dom'
import './App.css'
import { FollowProvider } from './context/FollowContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import HotThisWeek from './pages/HotThisWeek'
import Discover from './pages/Discover'
import ClubPage from './pages/ClubPage'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'

export default function App() {
  return (
    <FollowProvider>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hot" element={<HotThisWeek />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/club/:id" element={<ClubPage />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
    </FollowProvider>
  )
}
