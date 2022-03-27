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

export const categoryState = atom({
  key: "category",
  default: "TO_DO"
})

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: []
})

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState)
    const category = get(categoryState)
    return toDos.filter(toDo => toDo.category === category)
  }
})