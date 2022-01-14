import styled from "styled-components";

export const ReadBlog = styled.section`
  width: 100%;
  text-align: center;
  padding: 2em 0;

  & > h2 {
    margin: 0.5em 0;
  }

  & > p {
    width: 30em;
    margin: auto;
  }

  @media (max-width: 780px) {
    & > p {
      width: auto;
    }
  }
`;
