import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRecoilState} from "recoil"
import styled from "styled-components"
import { toDoState } from "../atoms"

const Form = styled.form`
  display: grid;
  width: 320px;
  row-gap: 10px;
`

interface FormInput {
  todo: string
}

const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState)

  const { register, handleSubmit, setValue } = useForm<FormInput>({
    mode: "onChange",
    defaultValues: {
    }
  })

  const onSubmit = (data: FormInput) => {
    const { todo } = data
    setToDos(prev => [{text: todo, category: "TO_DO", id: Date.now()}, ...prev])
    setValue("todo", "")
  }

  console.log(toDos);
  

  return <div>
    <h1>To Dos</h1>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("todo", {
          required: "Todo is required",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </Form>
    <ul>
        {toDos.map(toDo => <li key={toDo.id}>
          {toDo.text}</li>)}
    </ul>
  </div>
}

export default ToDoList