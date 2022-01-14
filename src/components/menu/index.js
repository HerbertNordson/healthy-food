import { useRef } from "react";
import { Link } from "react-router-dom";
import { Options, Top } from "./style";
import { useOutSideClick } from "./useOutSideClick";

const Menu = () => {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useOutSideClick(dropDownRef, false);

  function onClick() {
    return setIsActive(!isActive);
  }

  console.log(isActive);

  return (
    <Top>
      <Link to="/">Healthy Food</Link>
      <Options>
        <Link to="/">Healthy Recipes</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Join</Link>
        <Link to="/register" className="register">
          Register
        </Link>
      </Options>

      <button className="menu-mob" onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isActive && (
        <nav ref={dropDownRef}>
          <ul>
            <li>
              <a href="/">Healthy Recipes</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Join</a>
            </li>
            <li>
              <a href="/" className="register">
                Register
              </a>
            </li>
          </ul>
        </nav>
      )}
    </Top>
  );
};

export default Menu;
