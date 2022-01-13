import styled from "styled-components";
import illustration from "../../assets/images/Illustration.svg";

export const Container = styled.header`
  background-image: url(${illustration});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 110vh;

  @media (max-width: 1080px) {
    min-height: 90vh;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    padding: 2em;

    & > h1 {
      color: #badc58;
    }

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 30em;
      margin-right: 2em;

      & > a {
        text-transform: uppercase;
        text-decoration: none;
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
  }
`;
