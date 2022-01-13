import { Options, Top } from "./style";

const Menu = () => {
  return (
    <Top>
      <a href="/">Healthy Food</a>
      <Options>
        <a href="/">Healthy Recipes</a>
        <a href="/">Blog</a>
        <a href="/">Join</a>
        <a href="/" className="register">
          Register
        </a>
      </Options>
    </Top>
  );
};

export default Menu;
