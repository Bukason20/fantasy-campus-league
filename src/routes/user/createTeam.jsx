import React, { useState } from "react"
import Card from "../../components/Card"
import "../../index.css"
import { players } from "./players"
import { footballPitch } from "../../assets/images"

function CreateTeam() {
  const [formationNumbers, setFormationNumbers] = useState([0, 0, 0]) // [DEF, MID, FWD]
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPosition, setSelectedPosition] = useState("All")
  const [selectedView, setSelectedView] = useState("formation view")
  const [selectedPlayers, setSelectedPlayers] = useState([])

  const footballFormations = [
    "2-3-5","3-2-5","4-2-4","4-4-2","4-3-3",
    "3-5-2","3-4-3","5-3-2","5-4-1","4-5-1","3-6-1"
  ]

  const formationSelected = formationNumbers.some(n => n > 0)

  const getPlayers = (formation) => {
    const numbers = formation.split("-").map(num => parseInt(num, 10))
    setFormationNumbers(numbers)
  }

  // ===== Team selection logic =====
  const addPlayer = (player) => {
    // no duplicates
    if (selectedPlayers.find(p => p.name === player.name)) return
    setSelectedPlayers(prev => [...prev, player])
  }

  const removePlayer = (name) => {
    setSelectedPlayers(prev => prev.filter(p => p.name !== name))
  }

  // capacity helpers
  const countByPos = (pos) => selectedPlayers.filter(p => p.position === pos).length
  const capByPos = (pos) => {
    if (pos === "GK") return 1
    if (pos === "DEF") return formationNumbers[0] || 0
    if (pos === "MID") return formationNumbers[1] || 0
    if (pos === "FWD") return formationNumbers[2] || 0
    return 0
  }
  const isFull = (pos) => countByPos(pos) >= capByPos(pos)

  // ===== Filtering =====
  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPosition = selectedPosition === "All" || player.position === selectedPosition
    return matchesSearch && matchesPosition
  })

  // ===== Pitch row renderer with placeholders =====
  const renderRow = (position, slots) => {
    if (slots <= 0) return null
    const rowPlayers = selectedPlayers.filter(p => p.position === position)

    const boxes = Array.from({ length: slots }).map((_, i) => {
      const player = rowPlayers[i]
      if (player) {
        return (
          <div
            key={`${position}-${i}`}
            className="bg-white text-black text-center p-2 rounded-md shadow-md cursor-pointer w-fit m-auto h-[50px] flex flex-col justify-center items-center"
            title="Click to remove"
            // onClick={() => removePlayer(player.name)}
          >
            {player.name}
          </div>
        )
      }
      return (
        <div
          key={`${position}-placeholder-${i}`}
          className="bg-gray-300/80 text-black text-center p-2 rounded-md shadow-inner italic w-fit m-auto h-[50px] flex flex-col justify-center items-center"
        >
          Player&apos;s Name
        </div>
      )
    })

    return (
      <div
        className="grid gap-2 justify-center"
        style={{ gridTemplateColumns: `repeat(${slots}, minmax(80px, 1fr))` }}
      >
        {boxes}
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Create Team</h1>
      <p>Build your fantasy football squad</p>

      <div className="flex flex-row gap-5 mt-4">
        {/* LEFT: Setup + Available Players */}
        <div className="w-[40%]">
          <Card>
            <h2 className="text-xl font-bold mb-2">Team Setup</h2>
            <p>Team name</p>
            <input
              type="text"
              placeholder="Enter Team Name"
              className="border w-full mb-3 mt-2 border-gray-100 outline-0 p-2 rounded-md"
            />

            <p>Formation</p>
            <select
              className="border w-full mb-3 mt-2 border-gray-100 outline-0 p-2 rounded-md"
              onChange={(e) => getPlayers(e.target.value)}
            >
              <option value="">-- Select Formation --</option>
              {footballFormations.map((formation, id) => (
                <option value={formation} key={id}>
                  {formation}
                </option>
              ))}
            </select>

            <p className="mt-4">Formation Requirements</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 flex justify-between items-center p-2 font-bold rounded-sm">
                <p>GK</p>
                <p>{countByPos("GK")}/1</p>
              </div>
              <div className="bg-gray-200 flex justify-between items-center p-2 font-bold rounded-sm">
                <p>DEF</p>
                <p>{countByPos("DEF")}/{capByPos("DEF")}</p>
              </div>
              <div className="bg-gray-300 flex justify-between items-center p-2 font-bold rounded-sm">
                <p>MID</p>
                <p>{countByPos("MID")}/{capByPos("MID")}</p>
              </div>
              <div className="bg-gray-300 flex justify-between items-center p-2 font-bold rounded-sm">
                <p>FWD</p>
                <p>{countByPos("FWD")}/{capByPos("FWD")}</p>
              </div>
            </div>
          </Card>

          <Card className="mt-4">
            <h2 className="text-xl font-bold mb-2">Available Players</h2>
            <p>Select Players to build your team</p>

            <div className="flex my-4 justify-between gap-3">
              <input
                type="text"
                placeholder="Search Players"
                className="border border-gray-300 w-[70%] p-2 rounded-md outline-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="border border-gray-300 w-[30%] p-2 rounded-md outline-0"
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
              >
                {["All", "GK", "DEF", "MID", "FWD"].map((position, id) => (
                  <option value={position} key={id}>{position}</option>
                ))}
              </select>
            </div>

            <div className="mt-4 h-[300px] overflow-y-scroll py-2">
              {filteredPlayers.length > 0 ? (
                filteredPlayers.map((player, id) => {
                  const disabled =
                    selectedPlayers.find(p => p.name === player.name) ||
                    (player.position === "GK"  && isFull("GK"))  ||
                    (player.position === "DEF" && isFull("DEF")) ||
                    (player.position === "MID" && isFull("MID")) ||
                    (player.position === "FWD" && isFull("FWD"))

                  return (
                    <div
                      key={id}
                      className="bg-gray-300 my-2 rounded-md shadow-sm p-2 flex items-center justify-between"
                    >
                      <div>
                        <div className="font-bold">{player.name}</div>
                        <div className="text-sm text-gray-700">
                          <span>{player.position}</span> · <span>{player.club}</span> · <span>{player.points} pts</span>
                        </div>
                      </div>
                      <button
                        className={`p-2 rounded-sm ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-900 text-white"}`}
                        onClick={() => addPlayer(player)}
                        disabled={disabled}
                      >
                        Add
                      </button>
                    </div>
                  )
                })
              ) : (
                <p className="text-gray-500 italic">No players found</p>
              )}
            </div>
            
          </Card>
        </div>

        {/* RIGHT: Pitch View */}
        <Card className="w-[60%] text-white relative min-h-[800px]">
          <div className="flex justify-center mb-4 gap-3">
            <button className={`p-2 rounded-md ${selectedView === "formation view" ? "bg-white text-green-700" : "bg-green-900"}`} onClick={() => setSelectedView("formation view")}>Formation View</button>
            <button className={`p-2 rounded-md ${selectedView === "list view" ? "bg-white text-green-700" : "bg-green-900"}`} onClick={() => setSelectedView("list view")}>List View</button>
            <button className={`p-2 rounded-md ${selectedView === "bench" ? "bg-white text-green-700" : "bg-green-900"}`} onClick={() => setSelectedView("bench")}>Bench</button>
          </div>

          {selectedView === "formation view" && (
            !formationSelected ? (
            <div 
              className="text-center text-3xl text-black font-bold h-[750px] flex flex-col justify-center items-center" 
              style={{
                backgroundImage: `url(${footballPitch})`,
                overflow: "hidden",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            >
              No formation selected yet
            </div>
          ) : (
            <div 
              className="flex flex-col gap-6 h-[750px]"
              style={{
                backgroundImage: `url(${footballPitch})`,
                overflow: "hidden",
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            >

              {/* DEF / MID / FWD using formation numbers with placeholders */}
              <div className="mt-[7rem]">
                {renderRow("FWD", formationNumbers[2])}
              </div>

              <div className="mt-[10rem]">
                {renderRow("MID", formationNumbers[1])}
              </div>

              <div className="mt-[8rem]">
                {renderRow("DEF", formationNumbers[0])}  
              </div>

              {/* GK: always one slot */}
              <div className="mt-[4rem]">
                {renderRow("GK", 1)}  
              </div>
            </div>
          ))}

          {selectedView === "list view" && (
            <div>
              {selectedPlayers.length > 0 ? (
                selectedPlayers.map((player, id) => (
                  <div key={id} className="bg-white text-black my-2 rounded-md p-2 shadow-md">
                    {player.name} - {player.position}
                  </div>
                ))
              ) : (
                <p className="text-gray-200 italic">No players selected</p>
              )}
            </div>
          )}

          {selectedView === "bench" && (
            <div>
              <p className="italic">Bench feature coming soon...</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}

export default CreateTeam
