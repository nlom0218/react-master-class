import { useRef } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
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

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

const Board = ({ toDos, boardId }: IBoardProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    inputRef.current?.focus();
    setTimeout(() => {
      inputRef.current?.blur();
    }, 5000);
  };

  return (
    <div>
      <Title>{boardId}</Title>
      <input placeholder="grab me" ref={inputRef} />
      <button onClick={onClick}>click me</button>
      <Droppable droppableId={boardId}>
        {(magic, info) => (
          <SBoard
            ref={magic.innerRef}
            {...magic.droppableProps}
            isDraggingOver={info.isDraggingOver}
            draggingFromThisWith={Boolean(info.draggingFromThisWith)}
          >
            {toDos.map((toDo, index) => (
              <DragabbleCard key={toDo} index={index} toDo={toDo} />
            ))}
            {magic.placeholder}
          </SBoard>
        )}
      </Droppable>
    </div>
  );
};

export default Board;
