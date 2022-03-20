import React, { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { Outlet, useLocation, useMatch, useParams } from "react-router"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { fetchCoinInfo, fetchCoinTickers } from "../api"
import { Helmet } from "react-helmet-async";

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

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.cardBgColor};
  padding: 10px 20px;
  border-radius: 10px;
`

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.textColor};
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`

const Description = styled.div`
  margin: 20px 0px;
`

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`

const Tab = styled.div<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${props => props.theme.cardBgColor};
  border-radius: 10px;
  color: ${props => props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    padding: 7px 0px;
    display: block;
  }
`

interface RouteState {
  state: {
    name: string
  }
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string
      ath_price: number
      market_cap: number
      market_cap_change_24h: number
      percent_change_1h: number
      percent_change_1y: number
      percent_change_6h: number
      percent_change_7d: number
      percent_change_12h: number
      percent_change_15m: number
      percent_change_24h: number
      percent_change_30d: number
      percent_change_30m: number
      percent_from_price_ath: number
      price: number
      volume_24h: number
      volume_24h_change_24h: number
    }
  };
}

const Coin = () => {
  const { coinId } = useParams<string>()

  // useQuery의 첫번째 인재 key는 고유한 값으로 해야한다.
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>([
    "info", coinId],
    () => fetchCoinInfo(coinId),
  )
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000
    }
  )

  const loading = infoLoading || tickersLoading

  // react-router-dom v6 부터 제네릭 지원하지 않음
  const { state } = useLocation() as RouteState

  const priceMatch = useMatch("/:coinId/price")
  const chartMatch = useMatch("/:coinId/chart")

  return (<Container>
    <Helmet>
      <title>{state?.name ? state.name : loading ? "Loading..." : infoData?.name}</title>
    </Helmet>
    <Header>
      <Title>{state?.name ? state.name : loading ? "Loading..." : infoData?.name}</Title>
    </Header>
    {loading ? <Loader>Loading...</Loader> : <React.Fragment>
      <Overview>
        <OverviewItem>
          <span>Rank:</span>
          <span>{infoData?.rank}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Symbol:</span>
          <span>{infoData?.symbol}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Price:</span>
          <span>{tickersData?.quotes.USD.price}</span>
        </OverviewItem>
      </Overview>
      <Description>{infoData?.description}</Description>
      <Overview>
        <OverviewItem>
          <span>Total Suply:</span>
          <span>{tickersData?.total_supply}</span>
        </OverviewItem>
        <OverviewItem>
          <span>Max Suply:</span>
          <span>{tickersData?.max_supply}</span>
        </OverviewItem>
      </Overview>
      <Tabs>
        <Tab isActive={chartMatch !== null}><Link to={`chart`}>Chart</Link></Tab>
        <Tab isActive={priceMatch !== null}><Link to={`price`}>Price</Link></Tab>
      </Tabs>
      <Outlet context={{ coinId }} />
    </React.Fragment>}
  </Container>
  )
}

export default Coin