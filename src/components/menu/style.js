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

  & .menu-mob {
    display: none;
  }
  & nav {
    display: none;
  }

  @media (max-width: 1080px) {
    padding: 2em 0;
  }

  @media (max-width: 1080px) {
    padding: 1em;
    width: 100%;
    position: fixed;
    background: rgb(146, 211, 98, 0.8);
    z-index: 999;

    & > a {
      font-size: 1.6em;

      @media (max-width: 780px) {
        color: #fff;
      }
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

    & > nav {
      display: block;
      width: 100%;
      height: auto;
      position: absolute;
      top: 6.4em;
      left: 0;
      background: rgb(29, 22, 77, 0.9);

      @media (max-width: 780px) {
        top: 4.4em;
        background: #92d362;
      }

      & > ul {
        padding: 0;

        & > li {
          list-style: none;
          padding: 1em;
          text-align: center;
          font-size: 1.2em;
          border-bottom: 2px solid #fff;

          &:nth-last-child(1) {
            border-bottom: none;
          }

          & > a {
            color: #fff;
            font-weight: 600;
          }
        }
      }
    }
  }
`;

export const Options = styled.div`
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

    &:hover {
      border-bottom: 2px solid #fff;
    }
    &:nth-last-child(1):hover {
      border-bottom: none;
    }
  }

  & > .register {
    color: #badc58;
    background: #fff;
    border-radius: 8px;
    padding: 0.8em 1.5em;
  }

  @media (max-width: 1080px) {
    display: none;
  }
`;
