import React, {useState} from "react"
import _ from "lodash"
import RivalIcon from "./rivalIcon"

import "./gameView.css"


const replayDataReducer = (accumulator, currentGame) => {
  const oldState = accumulator[accumulator.length-1];
  const newState = _.cloneDeep(accumulator[accumulator.length-1]);
  // currentGame.stockLosses
  const stockLossCounts = _.countBy(currentGame.stockLosses.toString().split(''));
  if(stockLossCounts[1]) {
    newState.team1[currentGame.p1].stocksLeft =
      oldState.team1[currentGame.p1].stocksLeft - stockLossCounts[1]
    // newState.team1[currentGame.p1].stocksTaken.concat()
  }
  if(stockLossCounts[2]) {
    newState.team2[currentGame.p2].stocksLeft =
      oldState.team2[currentGame.p2].stocksLeft - stockLossCounts[2]
  }
  accumulator.push(newState)
  return accumulator
}

const BattleReplayView = ({battleData, rosterData}) => {
  const replayData = battleData.reduce(replayDataReducer, [rosterData])
  const [replayStep, setReplayStep] = useState(0);

  // battleData.map replayData[replayStep]

  return(
    <div className="battle-replay-layout">
      <div className="battle-replay-roster--team1">
        <div className="battle-replay-roster battle-replay-roster--team1">
          Team 1
          {Object.keys(replayData[replayStep].team1).map(player => <div>

            {player}
            <RivalIcon rival={replayData[replayStep].team1[player].character} />
            {replayData[replayStep].team1[player].stocksLeft}
          </div>)}
        </div>
      </div>
      <div className="battle-replay-layout--center">
        <button onClick={() => setReplayStep(0)}>{`<<`}</button>
        <button onClick={() => setReplayStep(Math.max(replayStep-1, 0))}>{`<`}</button>
        {replayStep}
        <button onClick={() => setReplayStep(Math.min(replayStep+1, replayData.length-1))}>{`>`}</button>
        <button onClick={() => setReplayStep(replayData.length-1)}>{`>>`}</button>
      </div>
      <div className="battle-replay-roster--team2">
        Team 2
        <div className="battle-replay-roster">
          {Object.keys(replayData[replayStep].team2).map(player =>
            <div>
              {replayData[replayStep].team2[player].stocksLeft}
              <RivalIcon rival={replayData[replayStep].team2[player].character} />
              {player}
            </div>
          )}
        </div>
      </div>
    </div>)
}

export default BattleReplayView
