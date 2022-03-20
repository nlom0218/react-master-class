import { useQuery } from "react-query";
import { useOutletContext } from "react-router"
import { fetchCoinHistory } from "../api"
import ApexChart from "react-apexcharts"

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

  return <div>{isLoading ? "Loading chart..." : <ApexChart
    type="line"
    series={[
      {
        name: "Pirce",
        data: data?.map(price => price.close) ?? []
      }
    ]}
    options={{
      theme: {
        mode: "dark"
      },
      chart: {
        height: 300,
        width: 500,
        background: "transparent"
      },
      stroke: {
        curve: "smooth",
        width: 4
      },
      grid: {
        show: false
      },
      xaxis: {
        labels: {
          show: false
        },
        categories: data?.map(price => price.time_close) ?? [],
        axisBorder: {
          show: false
        },
      },
      yaxis: {
        labels: {
          show: false
        }
      }
    }} />}</div>
}

export default Chart