import React from "react"
import Img from "gatsby-image"

import { useRivalsIcon } from "../hooks/use-rivals-icon"
import "./rivalIcon.css"


const RivalIcon = ({rival, death=false}) => {
  const {allFile} = useRivalsIcon();
  const rivalImageFind = allFile.edges
    .find(edge => edge.node.name === rival)
  const rivalImage = rivalImageFind
    ? rivalImageFind.node.childImageSharp.fixed
    : null

  return (
    <div className="icon-container">
      {death && <div className="icon-overlay">X</div>}
      {rivalImage ? <Img fixed={rivalImage} /> : <div>noImg</div>}
    </div>
  )
}

export default RivalIcon
