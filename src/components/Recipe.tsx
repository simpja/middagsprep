import styled from "styled-components";
import { IngredientsTable } from "./Ingredients/IngredientsTable";
import { Instructions } from "./Instructions";
import { RecipeType } from "../recipes/types";
import { ContentsContainer, MainContainer, Tag, TagArray } from "./MainPage";

type Props = {
  recipe: RecipeType;
};

export const Recipe = (props: Props) => {
  return (
    <MainContainer>
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
      <ContentsContainer>
        <Description>{props.recipe.description}</Description>
        <IngredientsTable ingredients={props.recipe.ingredients} />
        <Instructions instructions={props.recipe.instructions} />
      </ContentsContainer>
    </MainContainer>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 20px 0;
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

const Description = styled.div`
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
`;
