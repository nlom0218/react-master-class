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
}

const ToDoList = () => {
  const { register, handleSubmit, setValue } = useForm<FormInput>({
    mode: "onChange",
    defaultValues: {
    }
  })

  const onSubmit = (data: FormInput) => {
    const { todo } = data
    console.log("Add todo", todo);
    setValue("todo", "")
  }

  return <div>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("todo", {
          required: "Todo is required",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </Form>
  </div>
}

export default ToDoList