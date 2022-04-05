import { Draggable } from "react-beautiful-dnd"
import styled from "styled-components"
import * as React from 'react';


const Card = styled.div`
  background-color: ${props => props.theme.bgColor};
  transition: background-color 1s ease;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
`

interface IDragbbleCardProps {
  toDo: string
  index: number
}

const DragabbleCard = ({ toDo, index }: IDragbbleCardProps) => {
  console.log(toDo, "has been rendered");

  return <Draggable draggableId={index + ""} index={index} key={index + ""}>
    {(magic) =>
      <Card
        ref={magic.innerRef}
        {...magic.draggableProps}
        {...magic.dragHandleProps}
      >
        {toDo}
      </Card>
    }
  </Draggable>
}

export default React.memo(DragabbleCard)