import { useRef } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { INewToDo, toDosState } from "../../atoms";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
  width: 300px;
  padding: 20px 10px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
  min-height: 300px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface ISBoradProps {
  isDraggingOver: boolean;
  draggingFromThisWith: boolean;
}

const SBoard = styled.div<ISBoradProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.draggingFromThisWith
      ? "#b3bec3"
      : props.theme.boardColor};
  transition: ${(props) =>
    props.isDraggingOver
      ? "background-color 0.3s ease-in-out"
      : "background-color 1s ease"};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
`;

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

interface IBoardProps {
  toDos: INewToDo[];
  boardId: string;
}

interface IFrom {
  toDo: string;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
  const setToDos = useSetRecoilState(toDosState);
  const { register, setValue, handleSubmit } = useForm<IFrom>({
    mode: "onChange",
  });
  const onValid = ({ toDo }: IFrom) => {
    const newToDo = {
      id: Date.now(),
      text: toDo,
    };
    setToDos((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [...allBoards[boardId], newToDo],
      };
    });
    setValue("toDo", "");
  };

  return (
    <div>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder={`Add task on ${boardId}`}
          {...register("toDo", { required: true })}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(magic, info) => (
          <SBoard
            ref={magic.innerRef}
            {...magic.droppableProps}
            isDraggingOver={info.isDraggingOver}
            draggingFromThisWith={Boolean(info.draggingFromThisWith)}
          >
            {toDos.map((toDo, index) => (
              <DragabbleCard
                key={toDo.id + ""}
                index={index}
                toDoId={toDo.id}
                toDoText={toDo.text}
              />
            ))}
            {magic.placeholder}
          </SBoard>
        )}
      </Droppable>
    </div>
  );
};

export default Board;
