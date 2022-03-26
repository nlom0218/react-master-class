import { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"

const Form = styled.form`
  display: grid;
  width: 320px;
  row-gap: 10px;
`

interface FormInput {
  todo: string
  day: string
  password: string
  password1: string
  extraError?: string
}

const ToDoList = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm<FormInput>({
    mode: "onChange",
    defaultValues: {
      todo: "@naver.com",
      day: new Date() + ""
    }
  })

  const onSubmit = (data: FormInput) => {
    if (data.password !== data.password1) {
      setError("password1", { message: "Passowrd are not the same" }, { shouldFocus: true })
    }
  }
  console.log(errors);

  return <div>
    <Form onSubmit={handleSubmit(onSubmit)}>
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
          },
          validate: (value) => value.includes("nico")
            ? "no nico allowed" : true
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
      <span>{errors?.extraError?.message}</span>
    </Form>
  </div>
}

export default ToDoList