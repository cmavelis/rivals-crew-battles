import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import BattleListView from "../components/battleListView"
import BattleReplayView from "../components/battleReplayView"

import sampleBattle from "../data/sampleBattle"
import earthWater from "../data/earth-water"
import fireAir from "../data/fire-air"
import earthAir from "../data/earth-air"
import fireWater from "../data/fire-water"

import earthHeader from "../images/earth-water/earth-header.png"
import earthWaterBg from "../images/earth-water/earth-water-bg.jpg"
import waterHeader from "../images/earth-water/water-header.png"

import "../components/gameView.css"

const VIEWS_ENUM = {
  LIST: 'list',
  REPLAY: 'replay',
}

const getBattleRoster = (battleData) => {
  const team1Players = [];
  const team2Players = [];
  const dataFieldsObject = {
      p1: [],
      p2: [],
      rival1: [],
      rival2: [],
  }
  const playerDirectory = {
    team1: {},
    team2: {}
  };
  battleData.forEach(game => {
    dataFieldsObject.p1.push(game.p1)
    dataFieldsObject.p2.push(game.p2)
    dataFieldsObject.rival1.push(game.rival1)
    dataFieldsObject.rival2.push(game.rival2)
    playerDirectory.team1[game.p1] = game.rival1
    playerDirectory.team2[game.p2] = game.rival2
  })

  return playerDirectory
}

const IndexPage = () => {
  console.log(sampleBattle)
  console.log(getBattleRoster(sampleBattle))
  const [battle, setBattle] = useState(sampleBattle);
  const [imagesState, setImages] = useState([]);
  const [viewState, setView] = useState(VIEWS_ENUM.LIST);
  return (
    <Layout>
      <div>
        <button onClick={() => {setBattle(sampleBattle); setImages([])}}>Pokii - Aquatle REMATCH</button>
        {/*<button onClick={() => {setBattle(earthWater); setImages([earthWaterBg, earthHeader, waterHeader])}}>Earth v Water</button>*/}
        <button onClick={() => {setBattle(earthWater); setImages([earthWaterBg, earthHeader, waterHeader])}}>Earth v Water</button>
        <button onClick={() => {setBattle(fireAir); setImages([])}}>Fire v Air</button>
        <button onClick={() => {setBattle(fireWater); setImages([])}}>Fire v Water</button>
        <button onClick={() => {setBattle(earthAir); setImages([])}}>Earth v Air</button>

      </div>
      <div>
        {Object.values(VIEWS_ENUM).map(value =>
        <button onClick={() => setView(value)}>{value}</button>
          )}
      </div>

      {viewState === VIEWS_ENUM.LIST &&
        <BattleListView battleData={battle}/>
      }
      {viewState === VIEWS_ENUM.REPLAY &&
        <BattleReplayView
          battleData={battle}
          rosterData={getBattleRoster(battle)}
        />
      }

      {/*<Link to="/page-2/">Go to page 2</Link> <br />*/}
      {/*<Link to="/using-typescript/">Go to "Using TypeScript"</Link>*/}
    </Layout>
  )
}

export default IndexPage
