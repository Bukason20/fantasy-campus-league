import React from 'react'
import { Outlet } from 'react-router-dom'
import "../../index.css";

function UserLayout() {
  return (
    <div>
      <nav className={ 'bg-gray-800 text-white py-4 w-[100%] flex justify-between items-center px-6' }>
        <p>Campus League</p>
        {/* You can add user-specific navigation here */}
        
      </nav>

      <main className='p-8'>
        <Outlet />  
      </main>
      
    </div>
  )
}

export default UserLayout