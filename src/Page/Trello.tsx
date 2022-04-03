import { useForm } from "react-hook-form"
import { useRecoilState, useRecoilValue } from "recoil"
import { hourSelector, minuteState } from "../atoms"

interface IFormInput {
  minutes: number
}

const Trello = () => {
  const [minutes, setMinutes] = useRecoilState<number>(minuteState)
  const hours = useRecoilValue(hourSelector)

  const { register, handleSubmit, getValues } = useForm({
    mode: "onChange",
    defaultValues: {
      minutes,
      hours
    }
  })

  const onsubmit = (data: any) => {
    const { minutes } = data
    setMinutes(parseInt(minutes))
  }

  const onChange = () => {
    setMinutes(getValues("minutes"))
  }

  return <form onSubmit={handleSubmit(onsubmit)}>
    <input
      {...register("minutes", { onChange })
      }
      type="number"
      placeholder="Minutes"
    />
    <input
      {...register("hours")}
      type="number"
      placeholder="Hours"
    />
    <input type="submit" />
  </form>
}

export default Trello