import { useState } from "react"
import { useForm } from "react-hook-form"

type FormInput = {
  todo: string
  day: string
}

const ToDoList = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>({
    mode: "onChange"
  })

  const onSubmit = (data: FormInput) => {
    console.log(data);

  }
  console.log(errors);

  return <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("todo", {
          required: "Password is required",
          minLength: {
            value: 5,
            message: "Your password is too short"
          }
        })}
        placeholder="Write a to do"
      />
      <input
        {...register("day", {
          required: true,
          minLength: 5
        })}
        placeholder="Write a day"
      />
      <button>Add</button>
    </form>
  </div>
}

export default ToDoList