import styled from "styled-components";
import { Recipe } from "./components/Recipe";

function App() {
  return (
    <Main>
      <Recipe />
    </Main>
  );
}

const Main = styled.main`
  background-color: papayawhip;
  display: flex;
  flex-direction: column;
`;

export default App;
