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
        font-size: 1.2em;
        padding: 1em;
        border: 1px solid #1d164d;
        border-radius: 8px;
        margin-right: 1em;

        &::placeholder {
          color: #b4b4b4;
        }
      }
      & > button {
        font-size: 1.2em;
        color: #fff;
        background: #badc58;
        border-radius: 8px;
        border: 2px solid #badc58;
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
      margin-top: 15em;
      margin-left: 0;
      padding: 1em;
    }
  }
`;
