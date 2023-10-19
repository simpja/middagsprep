import styled from "styled-components";
import gronnsaksbolognese from "./gronnsaksbolognese_dallE.png";
import { IngredientsTable } from "./components/Ingredients/IngredientsTable";
import { Oppskrift } from "./components/Oppskrift";

function App() {
  return (
    <Main>
      <StyledHeader>
        <StyledImage
          src={gronnsaksbolognese}
          alt="bilde av grønnsaksbolognese"
        />
        <Title>Grønnsaksbolognese</Title>
        <TagArray>
          <Tag>Enkel</Tag>
          <Tag>25 min</Tag>
        </TagArray>
      </StyledHeader>
      <RecipeContainer>
        <Description>
          En klassiker og favoritt for mange! Her har vi laget en kjøttfri
          variant basert på mange av de samme smakene. Kjøttdeig er byttet ut
          med røde linser som er fulle av protein, kostfiber og jern.
        </Description>
        <IngredientsTable />
        <Oppskrift />
      </RecipeContainer>
    </Main>
  );
}

const Main = styled.main`
  background-color: papayawhip;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 20px 0;
`;

const StyledImage = styled.img`
  margin-bottom: 20px;
  border-radius: 50%;
  max-width: 30%;
  @media screen and (max-width: 768px) {
    max-width: 80%;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
`;

const TagArray = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled.p`
  background-color: gray;
  color: white;
  padding: 10px;
  border-radius: 30px;
`;

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 300px;
  @media screen and (max-width: 1024px) {
    margin: 0 20px;
  }
`;

const Description = styled.div`
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
`;

export default App;
