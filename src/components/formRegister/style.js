import styled from "styled-components";
import join from "../../assets/images/bloco_final_image.svg";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  height: 100vh;
  background-image: url(${join});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  text-align: center;

  @media (max-width: 780px) {
    background: none;
  }

  & > div {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    padding: 2em 7em;
    background: rgb(29, 22, 77, 0.1);

    @media (max-width: 780px) {
      padding: 1em;
      width: 100%;
      position: fixed;
      background: rgb(146, 211, 98, 0.8);
      z-index: 999;

      & > a {
        color: #fff;
        font-size: 1.6em;
      }

      & .menu-mob {
        display: block;
        background: none;
        border: 1px solid #fff;
        border-radius: 4px;

        & > span {
          width: 24px;
          height: 6px;
          display: block;
          background: #fff;
          border-radius: 8px;
          margin: 4px;
        }
      }
    }
  }

  & > form {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50vh;

    & > p {
      margin: 0.5em 0 1em;
    }

    & > input {
      margin: 0.5em auto;
    }

    & > button {
      width: 10em;
      padding: 0.8em 2em;
      margin: 1em auto 0;
    }

    @media (max-width: 780px) {
      width: 100%;
      margin: 0;
    }
  }
`;
