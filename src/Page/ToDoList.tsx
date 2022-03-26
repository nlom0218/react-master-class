import { useState } from "react"
import { useForm } from "react-hook-form"

type FormInput = {
  todo: string
}

const ToDoList = () => {
  const { register, handleSubmit, watch } = useForm<FormInput>({
    mode: "onChange"
  })
  console.log(watch("todo"));

  const onSubmit = (data: FormInput) => {
    console.log(data);

  }
  return <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("todo")}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  </div>
}

export default ToDoList