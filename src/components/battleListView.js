import React from "react"
import RivalIcon from "./rivalIcon"

import "./gameView.css"

const GameListView = ({gameData}) => {
  const { game, p1, p2, rival1, rival2, stage, stockLosses } = gameData;
  const stockLossArray = stockLosses.toString().split('');
  return (
    <>
      <h4>Game {game}: </h4>
      <h4 className="game-view__left-column">{p1} </h4>
      <h4 className="game-view__versus-icons">
        <RivalIcon rival={rival1} />
        <span>vs</span>
        <RivalIcon rival={rival2} />
      </h4>
      <h4>{p2}</h4>
      <div>
        {
          stockLossArray.map(loss => {
            switch(loss) {
              case "1":
                return <RivalIcon rival={rival1} death />
              default:
                return <RivalIcon rival={rival2} death />
            }

          })
        }
      </div>
      <h4>{stage}</h4>
    </>
  )
}

const BattleListView = ({battleData}) => (
  <div className="game-view-container">
    {/*{imagesState.length > 0 && <React.Fragment className="game-view__header-row">*/}
    {/*  <span></span>*/}
    {/*  <img src={imagesState[1]} alt="team1" className="game-view__left-column"/>*/}
    {/*  <span>VS</span>*/}
    {/*  <img src={imagesState[2]} alt="team2"/>*/}
    {/*  <span>Stocks</span>*/}
    {/*  <span>Stage</span>*/}
    {/*  </React.Fragment>*/}
    {/*}*/}
    {battleData.map(game => <GameListView gameData={game}/>)}
  </div>
)

export default BattleListView
