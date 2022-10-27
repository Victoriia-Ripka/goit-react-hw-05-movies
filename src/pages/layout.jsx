import { StyledLink } from './layout.styled';

export default function Layout() {
  return (
    <header>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="movies">Movies</StyledLink>
      </nav>
    </header>
  );
}
