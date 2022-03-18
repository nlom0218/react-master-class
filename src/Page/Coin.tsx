import React, { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router"
import styled from "styled-components"

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`

const Loader = styled.span`
  text-align: center;
  display: block;
`

interface RouteState {
  state: {
    name: string
  }
}

const Coin = () => {
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState({})
  const [priceInfo, setPriceInfo] = useState({})

  const { coinId } = useParams<string>()

  // react-router-dom v6 부터 제네릭 지원하지 않음
  const { state } = useLocation() as RouteState

  useEffect(() => {
    (async () => {
      const infoData = await (await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)).json()
      const priceData = await (await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)).json()
      console.log(priceData);
      setInfo(infoData)
      setPriceInfo(priceInfo)
    })()
  }, [])

  return (<Container>
    <Header>
      <Title>{state.name}</Title>
    </Header>
    {loading ? <Loader>Loading...</Loader> : <span></span>}
  </Container>
  )
}

export default Coin