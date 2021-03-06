import { atom, selector } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  category: Categories;
  id: number;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

interface IToDosState {
  [key: string]: INewToDo[];
}

export interface INewToDo {
  id: number;
  text: string;
}

export const toDosState = atom<IToDosState>({
  key: "toDo",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
});
