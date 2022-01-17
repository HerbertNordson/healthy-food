import { Link } from "react-router-dom";
import MenuMob from "../menuMob";
import { Options, Top } from "./style";

const Menu = () => {
  return (
    <Top>
      <Link to="/">Healthy Food</Link>
      <Options>
        <Link to="/#">Healthy Recipes</Link>
        <Link to="/#">Blog</Link>
        <Link to="/#">Join</Link>
        <Link to="/register" className="register">
          Register
        </Link>
      </Options>

      <MenuMob />
    </Top>
  );
};

export default Menu;
