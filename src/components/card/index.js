import { CardBase } from "./style";
import image from "../../assets/images/blog_image_1.svg";
import { useRef } from "react";

const Card = () => {
  const carousel = useRef(null);

  function onHandleLeft(event) {
    event.preventDefault();
    if (carousel.current.offsetWidth < 780) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
      return;
    }
    carousel.current.scrollLeft = carousel.current.scrollLeft - 400;
  }

  function onHandleRight(event) {
    event.preventDefault();
    if (carousel.current.offsetWidth < 780) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
      return;
    }
    carousel.current.scrollLeft = carousel.current.scrollLeft + 400;
  }

  return (
    <CardBase>
      <div className="previus">
        <button onClick={onHandleLeft}> </button>
      </div>
      <ul className="carousel" ref={carousel}>
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
        <button onClick={onHandleRight}> - </button>
      </div>
    </CardBase>
  );
};

export default Card;
