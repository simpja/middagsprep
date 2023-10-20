import styled from "styled-components";
import FrontImage from "../assets/images/frontImage.png";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { gronnsaksbolognese } from "../recipes/gronnsaksbolognese";
import { kyllingform } from "../recipes/kyllingform";

const recipeList = [gronnsaksbolognese, kyllingform];

export const MainPage = () => {
  return (
    <MainContainer>
      <StyledHeader>
        <StyledImage src={FrontImage} alt={`bilde av preppa mat`} />
        <TitleWithLogo>
          <img src={Logo} alt="Middagsprep logo" />
          <h1>Middagsprep</h1>
        </TitleWithLogo>
        <h2>sida som hjelper deg å lette tidspresset om ettermiddan'</h2>
        <TagArray>
          <Tag>Preppa mat</Tag>
          <Tag>Enkelt</Tag>
          <Tag>Digg</Tag>
        </TagArray>
      </StyledHeader>
      <RecipeList>
        <SubHeader>Oppskrifter</SubHeader>
        {recipeList.map((recipe) => (
          <RecipeLink to={recipe.name} key={recipe.id}>
            <LinkImage src={recipe.image} alt={`bilde av ${recipe.name}`} />
            <p>{recipe.name}</p>
          </RecipeLink>
        ))}
      </RecipeList>
      <RecipeContainer>
        <Description>
          <SubHeader>Hva er Middagsprep?</SubHeader>
          Middagsprep hjelper deg med oppskrifter som kan gjøres helt eller
          delvis i forveien av middagstida.
          <ol>
            <li>Retter som lett kan fryses ned i sin helhet </li>
            <li>
              Retter der hoveddelen av retten kan fryses ned, men man for
              eksempel koker pasta til
            </li>
            <li>
              Retter som kan preppes dagen i forveien, stå i kjøleskap over
              natta, og fullføres dagen etter
            </li>
          </ol>
          <SubHeader>Hvorfor Middagsprep?</SubHeader>
          Tidsklemma er kjip, og man får ikke mer enn 24 timer på et døgn. Men
          denne klemma har ikke jevnt fordelt trykk utover hele dagen. Tanken
          med Middagsprep er å avlaste en av de trangeste delene av hverdagen
          ved å flytte noen oppgaver til mindre trange deler av dagen.
        </Description>
      </RecipeContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: papayawhip;
  margin: 0 auto;
  width: 60%;
  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

const StyledHeader = styled.header`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  margin-bottom: 20px;
  border-radius: 50%;
  max-width: 50%;
  @media screen and (max-width: 768px) {
    max-width: 80%;
  }
`;

const TitleWithLogo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin: 0 0 0 10px;
  }

  img {
    border-radius: 50%;
    height: 2em;
  }
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
`;

const Description = styled.div`
  margin-bottom: 40px;
`;

const SubHeader = styled.h2`
  text-align: left;
`;

const RecipeList = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: papayawhip;

  h2 {
    text-align: left;
    margin: 0;
  }
`;

const RecipeLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  background-color: #d57d1f;
  padding: 20px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: peachpuff;
  }

  p {
    margin-left: 20px;
    font-size: 1.2rem;
  }
`;

const LinkImage = styled.img`
  border-radius: 50%;
  max-width: 10%;
`;
