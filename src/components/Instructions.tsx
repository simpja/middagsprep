import styled from "styled-components";

type Props = {
  instructions: string[];
};

export const Instructions = (props: Props) => {
  return (
    <OrderedList>
      {props.instructions.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </OrderedList>
  );
};

const OrderedList = styled.ol`
  list-style-type: decimal;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;
