import React from 'react'
import Card from '../../components/Card'

function Dashboard() {
   const overviewContents =[
      {title: 'Team Name', value: 'Thunder Hawks', description: 'Your Fantasy Team'},
      {title: 'Total Points', value: '1200', description: 'Points Scored'},
      {title: 'Rank', value: '5th', description: 'Overall Rank'},
      {title: 'Next Match', value: 'Week 10', description: 'Upcoming Matchup'}
   ]

   const notificationsContents = [
      {title: 'Lineup Deadline Approaching', desc: 'Set your lineup before Sunday 1:00 PM EST', time: '18hrs ago'},
      {title: 'Player Injury Update', desc: 'Tyreek Hill listed as questionable for Sunday', time: '2hrs ago'},
      {title: 'Trade Proposal Received', desc: 'Mike from Engineering wants to trade', time: '4hrs ago'},
   ]

   const quickActionContents = ["View my Team", "Edit Team Lineup", "View Leaderboard", "Check Schedule"]
  return (
    <div>
      <h1 className='text-3xl'>Dashboard</h1>
      <p>Welcome back! Here's your fantasy football overview.</p>
      <div className='flex gap-3 my-5'>
         {overviewContents.map((item, index) => ( 
            <Card key={index} className='flex-1'>
               <h4>{item.title}</h4>
               <h1 className='text-2xl font-bold my-0.5 text-green-700'>{item.value}</h1>
               <p className='text-gray-500 text-sm'>{item.description}</p>
            </Card>
         ))}
      </div>

      <div className='flex gap-8 my-6'>
         <Card className='w-[55%]'>
            <h1>Notifications</h1>
            <p>Stay updated with your fantasy league</p>

            <div className='mt-4'>
               {notificationsContents.map((item, index) => (
                  <Card key={index} className='border-b border-gray-200 py-2 my-4 shadow-none'>
                     <h4 className='font-semibold'>{item.title}</h4>
                     <p className='text-gray-600'>{item.desc}</p>
                     <p className='text-xs text-gray-400'>{item.time}</p>
                  </Card>
               ))}
            </div>
         </Card>

         <Card className='w-[45%]'>
            <h1>Quick Actions</h1>
            <p>manage your team efficiently</p>

            <div className='mt-4'>
               {quickActionContents.map((item, index) => (
                  <Card key={index} className='border-b border-gray-200 py-2 my-4 shadow-none'>
                     <p>{item}</p>
                  </Card>
               ))}
            </div>
         </Card>
      </div>

      <div className='my-10'>
         <h1>Campus Leaderboard</h1>
         <p>See how you rank against your classmates</p>
         <div>
            <Card>

            </Card>
         </div>
      </div>

    </div>
  )
}

export default Dashboard