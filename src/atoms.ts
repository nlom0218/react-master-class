import { atom, useSetRecoilState } from "recoil";

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
