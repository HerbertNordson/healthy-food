import { Link } from "react-router-dom";
import eat from "../../assets/images/comida_1.svg";
import { Eats } from "./style";

const Eat = () => {
  return (
    <Eats>
      <article>
        <img src={eat} alt="" />
        <div>
          <h3>Broccoli Salad with Bacon</h3>
          <Link to="/">See Recipe</Link>
        </div>
      </article>
      <article>
        <img src={eat} alt="" />
        <div>
          <h3>Broccoli Salad with Bacon</h3>
          <Link to="/">See Recipe</Link>
        </div>
      </article>
      <article>
        <img src={eat} alt="" />
        <div>
          <h3>Broccoli Salad with Bacon</h3>
          <a href="/">See Recipe</a>
        </div>
      </article>
      <article>
        <img src={eat} alt="" />
        <div>
          <h3>Broccoli Salad with Bacon</h3>
          <a href="/">See Recipe</a>
        </div>
      </article>
    </Eats>
  );
};

export default Eat;
