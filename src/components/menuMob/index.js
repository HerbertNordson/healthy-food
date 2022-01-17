import { useRef } from "react";
import { Link } from "react-router-dom";
import { Mob } from "./style";
import { useOutSideClick } from "./useOutSideClick";

const MenuMob = () => {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useOutSideClick(dropDownRef, false);

  function onClick() {
    return setIsActive(!isActive);
  }
  return (
    <Mob>
      <button className="menu-mob" onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isActive && (
        <nav ref={dropDownRef}>
          <ul>
            <li>
              <Link to="/#">Healthy Recipes</Link>
            </li>
            <li>
              <Link to="/#">Blog</Link>
            </li>
            <li>
              <Link to="/#">Join</Link>
            </li>
            <li>
              <Link to="/register" className="register">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </Mob>
  );
};

export default MenuMob;
