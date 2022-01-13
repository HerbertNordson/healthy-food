import { CardBase } from "./style";
import image from "../../assets/images/blog_image_1.svg";

const Card = () => {
  return (
    <CardBase>
      <div className="previus">
        <button> - </button>
      </div>
      <ul>
        <li>
          <article>
            <img src={image} alt="" />

            <div>
              <h3>Quick-start guide to nuts and seeds</h3>
              <footer>
                <div>
                  <img src="" alt="" />
                </div>
                <span>Kevin Ibrahim</span>
              </footer>
            </div>
          </article>
        </li>
        <li>
          <article>
            <img src={image} alt="" />

            <div>
              <h3>Quick-start guide to nuts and seeds</h3>
              <footer>
                <div>
                  <img src="" alt="" />
                </div>
                <span>Kevin Ibrahim</span>
              </footer>
            </div>
          </article>
        </li>
        <li>
          <article>
            <img src={image} alt="" />

            <div>
              <h3>Quick-start guide to nuts and seeds</h3>
              <footer>
                <div>
                  <img src="" alt="" />
                </div>
                <span>Kevin Ibrahim</span>
              </footer>
            </div>
          </article>
        </li>
        <li>
          <article>
            <img src={image} alt="" />

            <div>
              <h3>Quick-start guide to nuts and seeds</h3>
              <footer>
                <div>
                  <img src="" alt="" />
                </div>
                <span>Kevin Ibrahim</span>
              </footer>
            </div>
          </article>
        </li>
        <li>
          <article>
            <img src={image} alt="" />

            <div>
              <h3>Quick-start guide to nuts and seeds</h3>
              <footer>
                <div>
                  <img src="" alt="" />
                </div>
                <span>Kevin Ibrahim</span>
              </footer>
            </div>
          </article>
        </li>
        <li>
          <article>
            <img src={image} alt="" />

            <div>
              <h3>Quick-start guide to nuts and seeds</h3>
              <footer>
                <div>
                  <img src="" alt="" />
                </div>
                <span>Kevin Ibrahim</span>
              </footer>
            </div>
          </article>
        </li>
      </ul>
      <div className="next">
        <button> - </button>
      </div>
    </CardBase>
  );
};

export default Card;
