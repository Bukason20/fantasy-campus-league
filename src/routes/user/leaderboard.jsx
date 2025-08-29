import React from 'react'
import Card from '../../components/Card'
import { MdPeopleAlt } from 'react-icons/md'
import { GiRank1 } from 'react-icons/gi'
import { CiCalendar } from 'react-icons/ci'
import { HiTrophy } from 'react-icons/hi2'

function Leaderboard() {
   const rankDetails = [
      {title: "Total Players", no:"10", desc: "Active in League", icon: <MdPeopleAlt />},
      {title: "Your Rank", no:"#3", desc: "Out of 10 Players", icon: <GiRank1 />},
      {title: "Week 8", no:"127", desc: "Your Weekly Points", icon: <CiCalendar />},
   ]

   const leaderBoardDetails = [

   ]
  return (
    <div>
      <div className='flex gap-8'>
         {rankDetails.map((detail, id) => (
            <Card key={id} className="w-full">
               <div className='flex justify-between'>
                  <p>{detail.title}</p>
                  {detail.icon}   
               </div>
               
               <p className='text-3xl my-2'>{detail.no}</p>
               <p className='text-sm text-gray-400'>{detail.desc}</p>
            </Card>
         ))}
      </div>

      <Card className="my-4">
         <div>
            <HiTrophy /> 
            <h2>Fantasy Football Leaderboard</h2>
         </div>
         <p>Top 10 players in your campus league</p>
         <table>
            <thead>
               <th>Rank</th>
               <th>Player</th>
               <th>Team Name</th>
               <th>Department</th>
            </thead>
         </table>
         
      </Card>
    </div>
  )
}

export default Leaderboard