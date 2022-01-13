import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <div>
        <h1>Healthy Food</h1>
        <div>
          <a href="/">Healthy Recipes</a>
          <a href="/">Blog</a>
          <a href="/">Join</a>
          <a href="/" className="register">
            Register
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Header;
