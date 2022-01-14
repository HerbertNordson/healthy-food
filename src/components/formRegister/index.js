import { Container } from "./style";
import Menu from "../menu";

const FormReg = () => {
  function onHandlerSubmit(ev) {
    ev.preventDefault();
  }

  return (
    <Container>
      <Menu />
      <form onSubmit={onHandlerSubmit}>
        <h2>Register</h2>
        <p>
          welcome to the registration section! <br />
          Enter the data to complete the operation.
        </p>
        <input type="text" placeholder="Name" value="Herbert" />
        <input type="data" placeholder="Birth Date" />
        <input type="text" placeholder="CEP" />
        <button type="submit">Register</button>
      </form>
    </Container>
  );
};

export default FormReg;
