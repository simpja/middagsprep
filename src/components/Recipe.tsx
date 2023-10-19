import styled from "styled-components";
import { IngredientsTable } from "./Ingredients/IngredientsTable";
import { Instructions } from "./Instructions";
import { RecipeType } from "../recipes/types";

type Props = {
  recipe: RecipeType;
};

export const Recipe = (props: Props) => {
  return (
    <>
      <StyledHeader>
        <StyledImage
          src={props.recipe.image}
          alt={`bilde av ${props.recipe.name}`}
        />
        <Title>{props.recipe.name}</Title>
        <TagArray>
          {props.recipe.tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </TagArray>
      </StyledHeader>
      <RecipeContainer>
        <Description>{props.recipe.description}</Description>
        <IngredientsTable ingredients={props.recipe.ingredients} />
        <Instructions instructions={props.recipe.instructions} />
      </RecipeContainer>
    </>
  );
};

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
