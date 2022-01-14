import styled from "styled-components";

export const CardBase = styled.div`
  display: flex;
  overflow: hidden;

  & > .previus,
  & > .next {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    opacity: 0.9;
    transition: all ease 0.5s;
    z-index: 99;
    width: 10em;
    height: 30em;
    margin-top: 3em;
    overflow: hidden;

    & > button {
      width: 5em;
      height: 5em;
      border-radius: 3em;
      border: none;
      background: #fff;
    }

    @media (max-width: 780px) {
      width: 4em;
    }
  }
  & > .previus {
    left: 2em;
    opacity: 0;

    &:hover {
      opacity: 1;
      background: linear-gradient(
        -270deg,
        rgba(255, 255, 255, 1) 14%,
        rgba(255, 255, 255, 0.036852240896358524) 100%
      );
    }

    & > button::before {
      content: "←";
      position: relative;
      font-size: 2em;
      color: #badc58;
    }

    @media (max-width: 780px) {
      left: 0;
      opacity: 1;
    }
  }

  & > .next {
    right: 0;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 1) 14%,
      rgba(255, 255, 255, 0.036852240896358524) 100%
    );

    &:hover {
      opacity: 1;
    }

    & > button::before {
      content: "→";
      position: relative;
      font-size: 2em;
      color: #badc58;
    }
  }

  & > ul {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin-left: 5%;
    padding: 0;

    @media (max-width: 780px) {
      margin: 0;
    }

    &::-webkit-scrollbar {
      display: none;
    }

    & > li {
      list-style: none;

      &:nth-last-child(1) {
        margin-right: 6em;
      }

      @media (max-width: 780px) {
        width: 100vw;
        overflow: hidden;
        flex: none;

        &:nth-last-child(1) {
          margin-right: 0;
        }
      }
    }
  }

  & article {
    border-radius: 12px;
    box-shadow: 4px 4px 16px 8px rgb(0 0 0 / 5%);
    margin: 3em 1em;
    height: auto;
    width: 24em;

    & > img {
      width: 100%;
    }

    @media (max-width: 780px) {
      margin: 3em 0;
      width: 26em;
    }

    & > div {
      padding: 2em;

      & > h3 {
        text-align: left;
      }

      & > footer {
        display: flex;
        align-items: center;
        margin-top: 1em;

        & > div {
          width: 4em;
          height: 4em;
          border: 1px solid;
          border-radius: 2em;
          margin-right: 1em;

          & > img {
            width: 100%;
          }
        }
      }
    }
  }
`;
