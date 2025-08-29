import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav'
import AuthLayout from './auth/_layout'
import SignUp from './auth/signUp'
import Error from './pages/error'
import Login from './auth/signIn'
import UserLayout from './user/_layout'
import Dashboard from './user/dashboard'
import CreateTeam from './user/createTeam'
import Leaderboard from './user/leaderboard'

function Layout() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Nav is now the root layout */}
        <Route path="/" element={<Nav />}>
          {/* Auth Routes */}
          <Route path="auth" element={<AuthLayout />}>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Route>

          {/* User Routes */}
          <Route path="u" element={<UserLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='create-team' element={<CreateTeam />} />
            {/* Add your user-specific routes here */}
            <Route path="leaderboard" element={<Leaderboard />} />
            {/* <Route path="profile" element={<Profile />} /> */}
            {/* <Route path="settings" element={<Settings />} /> */}
            {/* <Route path="league/create" element={<CreateLeague />} /> */}
            {/* <Route path="league/join" element={<JoinLeague />} /> */}
          </Route>

          {/* Catch-all for 404s */}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Layout
