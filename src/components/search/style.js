import styled from "styled-components";

export const Srch = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  bottom: 10em;
  margin-left: 6.5em;
  padding: 0;

  & h1 {
    font-size: 3.6em;
    color: #1d164d;
    margin-bottom: 0.5em;
    letter-spacing: 2px;
  }

  & form {
    display: flex;
    width: 100%;

    & input {
      width: 80%;
      font-size: 1.2em;
      padding: 1em;
      border: 1px solid #1d164d;
      border-radius: 8px;
      margin-right: 1em;
    }
    & button {
      width: 12%;
      border: 1px solid #badc58;
      border-radius: 8px;
      background: #badc58;
    }
  }
`;
