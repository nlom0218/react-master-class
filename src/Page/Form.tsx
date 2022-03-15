import React, { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  username: string
}

const Form = () => {
  const [username, setUsername] = useState<string>()

  const { register, handleSubmit, setValue } = useForm<Inputs>({
    mode: "onChange"
  })

  const onSubmit: SubmitHandler<Inputs> = data => {
    const { username } = data
    setUsername(username)
    setValue("username", "")
  }

  return (<div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("username")}
        placeholder="username"
        autoComplete="off"
      />
      <input type="submit" />
    </form>
    {username && <div>{username}님 안녕하세요!</div>}
  </div>)
}

export default Form