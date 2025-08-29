import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import styles from '../assets/styles/components/nav.module.css';

function Nav() {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState("")

  const sideNavMenu = {
    mainMenu: [
      { name: "Dashboard", path: "/u" },
      { name: "Create Team", path: "/u/create-team" },
      { name: "Leaderboard", path: "/u/leaderboard" },
      { name: "Notifications", path: "/u/league/create" },
    ],
    leagueManagement: [
      { name: "My Leagues", path: "/u/my_leagues" },
      { name: "Schedules", path: "/u/schedules" },
      { name: "Settings", path: "/u/settings" }
    ]
  }

  // Track active tab when location changes
  useEffect(() => {
    setActiveTab(location.pathname)
  }, [location.pathname])

  // If user is in auth routes
  if (location.pathname.includes("/auth")) {
    return (
      <div>
        <h1>Auth Navigation</h1>

        <Outlet />
      </div>
    )
  }

  // If user is in user dashboard routes
  if (location.pathname.includes("/u")) {
    return (
      <div className={styles.container}>
        {/* Sidebar */}
        <div className={styles.sideNav}>
          <h1>Campus League</h1>
          <p>Fantasy League</p>
          <input type="search" placeholder="Search" />

          <div>
            <p>Main Menu</p>
            {sideNavMenu.mainMenu.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`${styles.tabItem} ${activeTab === item.path ? styles.active : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </div> 

          <div>
            <p>League Management</p>
            {sideNavMenu.leagueManagement.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`${styles.tabItem} ${activeTab === item.path ? styles.active : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </div> 
        </div>
        
        {/* Main content */}
        <main className={styles.mainContent}>
          <Outlet />  
        </main>
      </div>
    )
  }

  // fallback if neither condition matches
  return (
    <div>
      <h1>Default Navigation</h1>
    </div>
  )
}

export default Nav
