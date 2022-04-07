import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import * as React from "react";

interface ICardProp {
  isDragging: boolean;
}

const Card = styled.div<ICardProp>`
  background-color: ${(props) =>
    props.isDragging ? "#74b9ff" : props.theme.bgColor};
  transition: background-color 1s ease;
  box-shadow: ${(props) =>
    props.isDragging ? "0px 3px 5px rgba(0,0,0,0.5)" : "none"};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

interface IDragbbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}

const DragabbleCard = ({ toDoId, toDoText, index }: IDragbbleCardProps) => {
  return (
    <Draggable draggableId={toDoId + ""} index={index} key={index + ""}>
      {(magic, info) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
          isDragging={info.isDragging}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DragabbleCard);
