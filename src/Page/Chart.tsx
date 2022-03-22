import { useQuery } from "react-query";
import { useOutletContext } from "react-router"
import { fetchCoinHistory } from "../api"
import ApexChart from "react-apexcharts"
import { type } from "os";

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

interface IChartProps {
  isDark: boolean;
}

const Chart = ({ isDark }: IChartProps) => {
  const { coinId } = useOutletContext<ICoinId>()

  const { isLoading, data } = useQuery<ICoinHistorical[]>(
    ["history", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000
    }
  )

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
        mode: isDark ? "dark" : "light"
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
        axisTicks: {
          show: false
        },
        type: "datetime"
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          gradientToColors: ["#0be881"],
          stops: [0, 100]
        }
      },
      colors: ["#0fbcf9"],
      tooltip: {
        y: {
          formatter: (value) => `$${value.toFixed(3)}`
        }
      }
    }} />}</div>
}

export default Chart