import { useRef } from "react";
import { CardBase } from "./style";

import {
  blog_image_1,
  blog_image_2,
  blog_image_3,
  blog_image_4,
  man_1,
  man_2,
  man_3,
  woman_1,
} from "../../assets/images";

const Blogs = [
  {
    title: "Quick-start guide to nuts and seeds",
    autor: "Kevin Ibrahim",
    image: blog_image_1,
    tb: man_1,
  },
  {
    title: "Nutrition: Tips for Improving Your Health",
    autor: "Mikaela Jackson",
    image: blog_image_2,
    tb: woman_1,
  },
  {
    title: "The top 10 benefits of eating healthy",
    autor: "Bryan McGregor",
    image: blog_image_3,
    tb: man_2,
  },
  {
    title: "Cherry Cobbler on the Grill",
    autor: "Joseff Bauman",
    image: blog_image_4,
    tb: man_3,
  },
];

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
        {Blogs.map((item, key) => (
          <li>
            <article>
              <img src={item.image} alt="" />
              <div>
                <h3>{item.title}</h3>
                <footer>
                  <div>
                    <img src={item.tb} alt="" />
                  </div>
                  <span>{item.autor}</span>
                </footer>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <div className="next">
        <button onClick={onHandleRight}> - </button>
      </div>
    </CardBase>
  );
};

export default Card;
