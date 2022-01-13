import styled from "styled-components";

export const Eats = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2em 0 0;

  & article {
    display: flex;
    border-radius: 12px;
    box-shadow: 4px 4px 16px 8px rgb(0 0 0 / 5%);
    margin-bottom: 3em;
    height: 35vh;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 3em;
      justify-content: space-around;

      & > h3 {
        width: 7em;
        text-align: left;
      }

      & > a {
        padding: 0.6em 1.5em;
        background: #badc58;
        color: #fff;
        border-radius: 8px;
        font-size: 1.2em;
      }
    }
  }
`;
