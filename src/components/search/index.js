import { Srch } from "./style";

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
        <button type="submit"></button>
      </form>
    </Srch>
  );
};

export default Search;
