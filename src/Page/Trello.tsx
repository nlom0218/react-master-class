import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useRecoilState, useRecoilValue } from "recoil"
import { hourSelector, minuteState } from "../atoms"

interface IFormInput {
  minutes: number
}

const Trello = () => {
  const [minutes, setMinutes] = useRecoilState(minuteState)
  const [hours, setHours] = useRecoilState(hourSelector)

  const { register, handleSubmit, getValues, setValue } = useForm({
    mode: "onChange",
  })

  const onChange = () => {
    setMinutes(+getValues("minutes"))
    setHours(+getValues("hours"))
  }

  useEffect(() => {
    setValue("hours", hours)
  }, [minutes])

  return <form>
    <input
      {...register("minutes", { onChange })
      }
      type="number"
      placeholder="Minutes"
    />
    <input
      {...register("hours", { onChange })}
      type="number"
      placeholder="Hours"
    />
  </form>
}

export default Trello