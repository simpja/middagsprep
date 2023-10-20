import styled from "styled-components";
import { Recipe } from "./components/Recipe";
import { gronnsaksbolognese } from "./recipes/gronnsaksbolognese";
import { kyllingform } from "./recipes/kyllingform";
import { MainPage } from "./components/MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: `/${gronnsaksbolognese.name}`,
    element: <Recipe recipe={gronnsaksbolognese} />,
  },
  {
    path: "/kyllingform",
    element: <Recipe recipe={kyllingform} />,
  },
]);

function App() {
  return (
    <Main>
      <RouterProvider router={router} />
    </Main>
  );
}

const Main = styled.main`
  background-color: papayawhip;
  display: flex;
  flex-direction: column;
`;

export default App;
