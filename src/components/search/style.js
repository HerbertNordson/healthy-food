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
    margin-bottom: 0.5em;
    letter-spacing: 2px;
  }

  @media (max-width: 1080px) {
    margin-left: 3em;
    bottom: 8em;
    & h1 {
      font-size: 2.6em;
    }
  }

  @media (max-width: 780px) {
    display: block;
    width: 100%;
    bottom: 0;
    padding: 1em;
    margin-top: 40em;
    margin-left: 0;

    & h1 {
      font-size: 2.6em;

      & br {
        display: none;
      }
    }
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

      &::placeholder {
        color: #b4b4b4;
      }
    }
    & button {
      width: 12%;
      border: 1px solid #badc58;
      border-radius: 8px;
      background: #badc58;
    }

    @media (max-width: 1080px) {
      & input {
        margin-right: 0.5em;
      }
      & button {
        width: 15%;
      }
    }

    @media (max-width: 780px) {
      & button {
        width: 18%;
      }
    }
  }
`;
