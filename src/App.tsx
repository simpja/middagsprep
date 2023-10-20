import styled from "styled-components";
import { Recipe } from "./components/Recipe";
import { gronnsaksbolognese } from "./recipes/gronnsaksbolognese";
import { kyllingform } from "./recipes/kyllingform";
import { MainPage } from "./components/MainPage";
import { Route, Routes } from "react-router-dom";
import { UniversalHeader } from "./components/UniversalHeader";

function App() {
  return (
    <Main>
      <UniversalHeader />
      <Routes>
        <Route path="/middagsprep/" element={<MainPage />} />
        <Route path="/" element={<MainPage />} />
        <Route
          path={`/middagsprep/${gronnsaksbolognese.name}`}
          element={<Recipe recipe={gronnsaksbolognese} />}
        />
        <Route
          path={`/middagsprep/${kyllingform.name}`}
          element={<Recipe recipe={kyllingform} />}
        />
      </Routes>
    </Main>
  );
}

const Main = styled.main`
  background-color: papayawhip;
  display: flex;
  flex-direction: column;
`;

export default App;
