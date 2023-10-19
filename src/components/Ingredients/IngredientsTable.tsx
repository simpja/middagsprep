import styled from "styled-components";

interface Ingredient {
  mengde: string;
  navn: string;
}

const ingredients: Ingredient[] = [
  { mengde: "1 stk", navn: "løk" },
  { mengde: "1 stk", navn: "Gul løk" },
  { mengde: "2 fedd", navn: "Hvitløk" },
  { mengde: "0,5 stk", navn: "Stangselleri" },
  { mengde: "2 stk", navn: "Gulrøtter" },
  { mengde: "4 ss", navn: "Olivenolje" },
  { mengde: "2 stk", navn: "Grønnsakbuljong terninger" },
  { mengde: "400 g", navn: "Tomater hakkede" },
  { mengde: "2 ss", navn: "Ketchup" },
  { mengde: "400 g", navn: "spaghetti" },
  { mengde: "1 dl", navn: "Kremfløte" },
  { mengde: "360 g", navn: "røde linser" },
  { mengde: "1 ts", navn: "havsalt" },
  { mengde: "1 ts", navn: "kvernet pepper" },
];

export const IngredientsTable = () => {
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
          {ingredients.map((ingredient) => (
            <tr key={ingredient.navn}>
              <MengdeCelle>{ingredient.mengde}</MengdeCelle>
              <td>{ingredient.navn}</td>
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
