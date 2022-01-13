import styled from "styled-components";

export const CopyRight = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 3em;

  & > p {
    color: #1d164d;
    font-weight: 500;
  }

  @media (max-width: 780px) {
    flex-direction: column-reverse;

    & > p {
      font-size: 1em;
      text-align: center;
    }
  }

  & > div {
    display: flex;
    justify-content: space-between;
    width: 20em;

    & > a {
      color: #9e9baf;
      font-size: 1.2em;
    }

    @media (max-width: 780px) {
      width: 100%;
      margin-bottom: 0.5em;
      & > a {
        font-size: 1em;
      }
    }
  }
`;
