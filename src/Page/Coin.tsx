import React from "react"
import { useParams } from "react-router"

const Coin = () => {
  const { coinId } = useParams()
  console.log(coinId);

  return (<div>Coin: {coinId}</div>)
}

export default Coin