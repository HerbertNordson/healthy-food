import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding: 2em;
  margin: 0 auto;

  & > a {
    font-size: 2.4em;
    font-weight: bold;
    color: #badc58;
  }

  @media (max-width: 1080px) {
    padding: 2em 0;
  }

  @media (max-width: 780px) {
    padding: 1em;
    width: 100%;
  }
`;

export const Options = styled.div`
  & {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 30em;
    margin-right: 2em;

    & > a {
      text-transform: uppercase;
      font-size: 1.2em;
      font-weight: 600;
      color: #fff;
    }
    & > .register {
      color: #badc58;
      background: #fff;
      border-radius: 8px;
      padding: 0.8em 1.5em;
    }
  }
`;
