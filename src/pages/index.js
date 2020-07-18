import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import RivalIcon from "../components/rivalIcon"
import Image from "../components/image"

import sampleBattle from "../data/sampleBattle"
import earthWater from "../data/earth-water"
import fireAir from "../data/fire-air"

import "../components/gameView.css"

const GameView = ({gameData}) => {
  const { game, p1, p2, rival1, rival2, stage, stockLosses } = gameData;
  const stockLossArray = stockLosses.toString().split('');
  return (
    <>
      <h3>Game {game}: </h3>
      <h4>{p1} </h4>
      <h4><RivalIcon rival={rival1} /> vs <RivalIcon rival={rival2} /> </h4>
      <h4>{p2}</h4>
      <ul>
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
      </ul>
      <span>{stage}</span>
    </>
  )
}

const IndexPage = () => {
  console.log(sampleBattle)
  const [state, setState] = useState(sampleBattle);
  return (
    <Layout>
      <button onClick={() => setState(sampleBattle)}>Pokii - Aquatle REMATCH</button>
      <button onClick={() => setState(earthWater)}>Earth v Water</button>
      <button onClick={() => setState(fireAir)}>Fire v Air</button>
      <div className="game-view-container">
        {state.map(game => <GameView gameData={game}/>)}
      </div>

      {/*<Link to="/page-2/">Go to page 2</Link> <br />*/}
      {/*<Link to="/using-typescript/">Go to "Using TypeScript"</Link>*/}
    </Layout>
  )
}

export default IndexPage
