import styled from "styled-components";
import Logo from "../assets/images/logo.png";

export const TitleWithLogo = () => {
  return (
    <TitleWithLogoStyled>
      <img src={Logo} alt="Middagsprep logo" />
      <h1>Middagsprep</h1>
    </TitleWithLogoStyled>
  );
};

const TitleWithLogoStyled = styled.div`
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
