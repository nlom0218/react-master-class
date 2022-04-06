import { DragDropContext, DropResult } from "react-beautiful-dnd"
import { useRecoilState } from "recoil"
import styled from "styled-components"
import { toDosState } from "../atoms"
import Board from "../Components/Trello/Board"

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);  
  column-gap: 10px;
`

const Trello = () => {

  const [toDos, setToDos] = useRecoilState(toDosState)

  const onDragEnd = (arg: DropResult) => {
    console.log(arg);
    const { destination, draggableId, source } = arg
    if (!destination) return
    if (destination?.droppableId === source.droppableId) {
      setToDos(allBoards => {
        const boardCopy = [...allBoards[source.droppableId]]
        boardCopy.splice(source.index, 1)
        boardCopy.splice(destination.index, 0, draggableId)
        return {
          ...allBoards,
          [source.droppableId]: boardCopy
        }
      })
    } else {
      setToDos(allBoards => {
        const sourceBoardCopy = [...allBoards[source.droppableId]]
        sourceBoardCopy.splice(source.index, 1)
        const destinationBoardCopy = [...allBoards[destination?.droppableId]]
        destinationBoardCopy.splice(destination.index, 0, draggableId)
        return {
          ...allBoards,
          [source.droppableId]: sourceBoardCopy,
          [destination.droppableId]: destinationBoardCopy
        }
      })
    }
  }

  return <DragDropContext onDragEnd={onDragEnd}>
    <Wrapper>
      <Boards>
        {Object.keys(toDos).map(boardId => <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />)}
      </Boards>
    </Wrapper>
  </DragDropContext >
}

export default Trello