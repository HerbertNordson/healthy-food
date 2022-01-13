import styled from "styled-components";

export const CardBase = styled.div`
  display: flex;
  overflow: hidden;

  & > ul {
    width: 4000px;
    display: flex;
    overflow: auto;

    & > li {
      list-style: none;
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
