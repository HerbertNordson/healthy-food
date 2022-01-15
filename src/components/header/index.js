import { Menu, Search } from "..";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <Menu />
      <Search />
    </Container>
  );
};

export default Header;
