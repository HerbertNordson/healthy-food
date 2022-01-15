import { Link } from "react-router-dom";
import { Eats } from "./style";
import { comida_1, comida_2, comida_3, comida_4 } from "../../assets/images";

const EatContent = [
  {
    name: "Broccoli Salad with Bacon",
    image: comida_1,
  },
  {
    name: "Classic Beef Burgers",
    image: comida_2,
  },
  {
    name: "Classic Potato Salad",
    image: comida_3,
  },
  {
    name: "Cherry Cobbler on the Grill",
    image: comida_4,
  },
];

const Eat = () => {
  return (
    <Eats>
      {EatContent.map((item, index) => (
        <article>
          <img src={item.image} alt="" />
          <div>
            <h3>{item.name}</h3>
            <Link to="/">See Recipe</Link>
          </div>
        </article>
      ))}
    </Eats>
  );
};

export default Eat;
