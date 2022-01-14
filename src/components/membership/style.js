import styled from "styled-components";
import join from "../../assets/images/bloco_final_image.svg";

export const Member = styled.section`
  min-height: 110vh;
  background-image: url(${join});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;

  @media (max-width: 1080px) {
    min-height: 90vh;
  }

  @media (max-width: 780px) {
    background-position: top;
    min-height: 80vh;
  }

  & > div {
    width: 40%;
    margin-left: 8em;

    & > h2 {
      margin-bottom: 0.5em;
    }

    & > form {
      display: flex;
      width: 100%;
      & > input {
        width: 65%;
      }
      & > button {
        box-shadow: 3px 5px 5px 4px rgb(186 220 88 / 30%);
        padding: 0.8em 2em;
      }
    }

    @media (max-width: 1080px) {
      width: 55%;
      margin-left: 2em;
    }

    @media (max-width: 780px) {
      width: 100%;
      margin-top: 20em;
      margin-left: 0;
      padding: 1em;
    }
  }
`;
