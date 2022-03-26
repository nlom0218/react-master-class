import { useState } from "react"
import { useForm } from "react-hook-form"

interface FormInput {
  todo: string
  day: string
  password: string
  password1: string
}

const ToDoList = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInput>({
    mode: "onChange",
    defaultValues: {
      todo: "오늘 할 일을 적어보세요!",
      day: new Date() + ""
    }
  })

  const onSubmit = (data: FormInput) => {
    console.log(data);

  }
  console.log(errors);

  return <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("todo", {
          required: "Todo is required",
          minLength: {
            value: 5,
            message: "Your todo is too short"
          },
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            message: "Only naver.com emails allowed"
          }
        })}
        placeholder="Write a to do"
      />
      <span>{errors?.todo?.message}</span>
      <input
        {...register("day", {
          required: "Day is required",
          minLength: {
            value: 5,
            message: "Your day is too short"
          }
        })}
        placeholder="Write a day"
      />
      <span>{errors?.day?.message}</span>
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 5,
            message: "Your Password is too short"
          }
        })}
        placeholder="Write a Password"
      />
      <span>{errors?.password?.message}</span>
      <input
        {...register("password1", {
          required: "Password1 is required",
          minLength: {
            value: 5,
            message: "Your Password1 is too short"
          }
        })}
        placeholder="Write a Password1"
      />
      <span>{errors?.password1?.message}</span>
      <button>Add</button>
    </form>
  </div>
}

export default ToDoList