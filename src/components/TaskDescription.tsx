import styled from "styled-components";

export const TaskDescription = () => {
  const items = [
    "Vask, rens og finhakk løk, hvitløk, stangselleri og gulrot. Varm opp en gryte med litt olje til middels varme og tilsett grønnsakene. Fres til de blir blanke.",
    "Knus buljongterning og ha i gryten med hermetiske tomater og ketchup. La det småkoke i ca. 10 minutter.",
    "Tilbered spaghetti etter anvisning på pakken i mellomtiden.",
    "Ha til slutt kremfløte og linser i gryten med grønnsaksbolognese. Kok opp og smak til med salt og pepper.",
    "Server spaghetti med grønnsaksbolognese. Dryss over finhakket persille.",
  ];

  return (
    <OrderedList>
      {items.map((item, index) => (
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
