import { useQuery } from "react-query";
import { useOutletContext } from "react-router"
import { fetchCoinHistory } from "../api"

interface ICoinId {
  coinId: string
}

interface ICoinHistorical {
  time_open: string,
  time_close: string,
  open: number,
  high: number,
  low: number,
  close: number,
  volume: number,
  market_cap: number
}

const Chart = () => {
  const { coinId } = useOutletContext<ICoinId>()
  console.log(coinId);

  const { isLoading, data } = useQuery<ICoinHistorical[]>(["history", coinId], () => fetchCoinHistory(coinId))
  console.log(data);

  return <h1>Chart</h1>
}

export default Chart