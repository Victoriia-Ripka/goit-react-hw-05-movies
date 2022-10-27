import { StyledLink, Header, Nav } from './AppBar.styled';

export default function Layout() {
  return (
    <Header>
      <Nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="movies">Movies</StyledLink>
      </Nav>
    </Header>
  );
}
