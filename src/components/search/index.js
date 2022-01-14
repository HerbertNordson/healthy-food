import { Srch } from "./style";

import lupa from "../../assets/images/lupa-de-detetive.svg";

const Search = () => {
  function onHandlerSubmit(event) {
    event.preventDefault();
  }

  return (
    <Srch>
      <h1>
        Ready for <br /> Trying a new <br />
        recipe?
      </h1>
      <form onSubmit={onHandlerSubmit}>
        <input type="text" placeholder="Search healthy recipes" />
        <button type="submit">
          <img src={lupa} alt="" />
        </button>
      </form>
    </Srch>
  );
};

export default Search;
