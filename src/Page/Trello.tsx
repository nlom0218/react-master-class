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

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return
    // setToDos(prevToDos => {
    //   const copyToDos = [...prevToDos]
    //   copyToDos.splice(source.index, 1)
    //   copyToDos.splice(destination.index, 0, prevToDos[source.index])
    //   return copyToDos
    // })
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