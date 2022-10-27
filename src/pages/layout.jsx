import { StyledLink } from "./layout.styled"

export default function Layout() {
    return <>
    <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav>
    </>
}