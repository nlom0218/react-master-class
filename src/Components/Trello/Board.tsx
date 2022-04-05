import { Droppable } from "react-beautiful-dnd"
import styled from "styled-components"
import DragabbleCard from "./DragabbleCard"

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

const SBoard = styled.div`
background-color: ${props => props.theme.boardColor};
transition: background-color 1s ease;
padding: 20px 10px;
padding-top: 30px;
border-radius: 5px;
min-height: 200px;
`

interface IBoardProps {
  toDos: string[]
  boardId: string
}

const Board = ({ toDos, boardId }: IBoardProps) => {

  return <div>
    <Title>{boardId}</Title>
    <Droppable droppableId={boardId}>
      {(magic) =>
        <SBoard ref={magic.innerRef} {...magic.droppableProps}>
          {toDos.map((toDo, index) => <DragabbleCard key={toDo} index={index} toDo={toDo} />)}
          {magic.placeholder}
        </SBoard>
      }
    </Droppable>
  </div>
}

export default Board