import Menu from "../menu";
import Search from "../search";
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
