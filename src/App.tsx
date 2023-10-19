import styled from "styled-components";
import { Recipe } from "./components/Recipe";
import { gronnsaksbolognese } from "./recipes/gronnsaksbolognese";

function App() {
  return (
    <Main>
      <Recipe recipe={gronnsaksbolognese} />
    </Main>
  );
}

const Main = styled.main`
  background-color: papayawhip;
  display: flex;
  flex-direction: column;
`;

export default App;
