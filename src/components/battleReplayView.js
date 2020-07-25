import React from "react"
import RivalIcon from "./rivalIcon"

import "./gameView.css"



const BattleReplayView = ({battleData, rosterData}) => {
  return(
    <div className="battle-replay-layout">
      <div className="battle-replay-roster">
        {Object.keys(rosterData.team1).map(player => <div>{player}</div>)}
      </div>
      <div className="battle-replay-roster">
        {Object.keys(rosterData.team2).map(player => <div>{player}</div>)}
      </div>
    </div>)
}

export default BattleReplayView
