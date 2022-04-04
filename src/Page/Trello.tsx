import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`

const Board = styled.div`
  background-color: ${props => props.theme.boardColor};
  transition: background-color 1s ease;
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
`

const Card = styled.div`
  background-color: ${props => props.theme.bgColor};
  transition: background-color 1s ease;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
`

const toDos = ["a", "b", "c", "d", "e", "f"]

const Trello = () => {

  const onDragEnd = () => { }

  return <DragDropContext onDragEnd={onDragEnd}>
    <Wrapper>
      <Boards>
        <Droppable droppableId="one">
          {(magic) =>
            <Board ref={magic.innerRef} {...magic.droppableProps}>
              {toDos.map((toDo, index) => <Draggable draggableId={toDo} index={index} key={index}>
                {(magic) =>
                  <Card
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                  >
                    {toDo}
                  </Card>
                }
              </Draggable>)}
              {magic.placeholder}
            </Board>
          }
        </Droppable>
      </Boards>
    </Wrapper>
  </DragDropContext>
}

export default Trello