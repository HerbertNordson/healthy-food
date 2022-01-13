import styled from "styled-components";
import services from "../../assets/images/blog_services.svg";

export const Container = styled.section`
  min-height: 110vh;
  background-image: url(${services});
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;

  @media (max-width: 1080px) {
    min-height: 90vh;
  }
  @media (max-width: 780px) {
    background: none;
  }

  & > div {
    width: 30em;
    margin-right: 10em;
    & > p {
      color: #bcbcbc;
      margin: 1.5em 0;
    }
    & > a {
      color: #fff;
      padding: 0.8em 1.5em;
      background: #badc58;
      border-radius: 8px;
      font-size: 1.2em;
      margin: 1em 0;
      display: inline-block;
      box-shadow: 3px 5px 5px 4px rgb(186 220 88 / 30%);
    }

    @media (max-width: 1080px) {
      margin-right: 2em;
      & > a {
        margin-left: 8em;
      }
    }
    @media (max-width: 780px) {
      width: 100%;
      margin: 0;
      padding: 1em;
      text-align: center;

      & > a {
        margin: 0;
      }
    }
  }
`;
