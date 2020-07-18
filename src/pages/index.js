import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import RivalIcon from "../components/rivalIcon"
import Image from "../components/image"

import sampleBattle from "../data/sampleBattle"
import earthWater from "../data/earth-water"
import fireAir from "../data/fire-air"

import earthHeader from "../images/earth-water/earth-header.png"
import earthWaterBg from "../images/earth-water/earth-water-bg.jpg"
import waterHeader from "../images/earth-water/water-header.png"

import "../components/gameView.css"

const GameView = ({gameData}) => {
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

const IndexPage = () => {
  console.log(sampleBattle)
  const [state, setState] = useState(sampleBattle);
  const [imagesState, setImages] = useState([]);
  return (
    <Layout>
      <button onClick={() => {setState(sampleBattle); setImages([])}}>Pokii - Aquatle REMATCH</button>
      {/*<button onClick={() => {setState(earthWater); setImages([earthWaterBg, earthHeader, waterHeader])}}>Earth v Water</button>*/}
      <button onClick={() => {setState(earthWater); setImages([earthWaterBg, earthHeader, waterHeader])}}>Earth v Water</button>
      <button onClick={() => {setState(fireAir); setImages([])}}>Fire v Air</button>
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
        {state.map(game => <GameView gameData={game}/>)}
      </div>

      {/*<Link to="/page-2/">Go to page 2</Link> <br />*/}
      {/*<Link to="/using-typescript/">Go to "Using TypeScript"</Link>*/}
    </Layout>
  )
}

export default IndexPage
