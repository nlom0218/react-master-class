import { useForm } from "react-hook-form"
import { useRecoilValue, useSetRecoilState } from "recoil"
import styled from "styled-components"
import { Categories, categoryState, IToDo, toDoState } from "../../atoms"

const Form = styled.form`
display: grid;
width: 320px;
row-gap: 10px;
`

interface FormInput {
  todo: string
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState)
  const category = useRecoilValue<Categories>(categoryState)

  const { register, handleSubmit, setValue } = useForm<FormInput>({
    mode: "onChange",
    defaultValues: {
    }
  })

  const onSubmit = (data: FormInput) => {
    const { todo } = data
    setToDos(prev => [{ text: todo, category, id: Date.now() }, ...prev])
    setValue("todo", "")
  }
  return <Form onSubmit={handleSubmit(onSubmit)}>
    <input
      {...register("todo", {
        required: "Todo is required",
      })}
      placeholder="Write a to do"
    />
    <button>Add</button>
  </Form>
}

export default CreateToDo