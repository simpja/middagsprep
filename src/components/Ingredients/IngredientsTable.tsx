import styled from "styled-components";
import { IngredientType } from "../../recipes/types";

type Props = {
  ingredients: IngredientType[];
};

export const IngredientsTable = (props: Props) => {
  return (
    <>
      <StyledTable>
        <thead hidden>
          <tr>
            <th>Amount</th>
            <th>Ingredient</th>
          </tr>
        </thead>
        <tbody>
          {props.ingredients.map((ingredient) => (
            <tr key={ingredient.name}>
              <MengdeCelle>{`${ingredient.amount} ${ingredient.unit}`}</MengdeCelle>
              <td>{ingredient.name}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};

const StyledTable = styled.table`
  border-spacing: "4px";
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
`;

const MengdeCelle = styled.td`
  text-align: right;
  background-color: gray;
  color: white;
  padding: 0 10px;
  border-radius: 30px;
  width: 70px;
`;
