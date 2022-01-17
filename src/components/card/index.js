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
    alt_image: "Quick-start guide to nuts and seeds",
    alt_author: "Author Kevin Ibrahim",
  },
  {
    title: "Nutrition: Tips for Improving Your Health",
    autor: "Mikaela Jackson",
    image: blog_image_2,
    tb: woman_1,
    alt_image: "Nutrition: Tips for Improving Your Health",
    alt_author: "Authora Mikaela Jackson",
  },
  {
    title: "The top 10 benefits of eating healthy",
    autor: "Bryan McGregor",
    image: blog_image_3,
    tb: man_2,
    alt_image: "The top 10 benefits of eating healthy",
    alt_author: "Authora Bryan McGregor",
  },
  {
    title: "Cherry Cobbler on the Grill",
    autor: "Joseff Bauman",
    image: blog_image_4,
    tb: man_3,
    alt_image: "Cherry Cobbler on the Grill",
    alt_author: "Authora Joseff Bauman",
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
              <img src={item.image} alt={item.alt_image} />
              <div>
                <h3>{item.title}</h3>
                <footer>
                  <div>
                    <img src={item.tb} alt={item.alt_author} />
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
