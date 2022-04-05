import { Droppable } from "react-beautiful-dnd"
import styled from "styled-components"
import DragabbleCard from "./DragabbleCard"

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

  return <Droppable droppableId={boardId}>
    {(magic) =>
      <SBoard ref={magic.innerRef} {...magic.droppableProps}>
        {toDos.map((toDo, index) => <DragabbleCard key={index + ""} index={index} toDo={toDo} />)}
        {magic.placeholder}
      </SBoard>
    }
  </Droppable>
}

export default Board