import styled from "styled-components";
import { TitleWithLogo } from "./TitleWithLogo";
import { Link } from "react-router-dom";

export const UniversalHeader = () => {
  return (
    <Header>
      <StyledLink to="/middagsprep">
        <TitleWithLogo />
      </StyledLink>
    </Header>
  );
};

const Header = styled.header`
  margin: 20px auto 0 auto;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;
