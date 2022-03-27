import { atom, selector } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
})

export interface IToDo {
  text: string
  category: "DONE" | "DOING" | "TO_DO"
  id: number
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: []
})

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState)
    return [
      toDos.filter(toDo => toDo.category === "TO_DO"),
      toDos.filter(toDo => toDo.category === "DOING"),
      toDos.filter(toDo => toDo.category === "DONE"),
    ]
  }
})