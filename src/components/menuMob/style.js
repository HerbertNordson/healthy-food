import styled from "styled-components";

export const Mob = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: block;

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
      top: 4.4em;
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
            display: block;
            color: #fff;
            font-weight: 600;
          }
        }
      }
    }
  }
`;
