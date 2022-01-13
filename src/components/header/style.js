import styled from "styled-components";
import illustration from "../../assets/images/Illustration.svg";

export const Container = styled.header`
  background-image: url(${illustration});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 110vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1080px) {
    min-height: 90vh;
  }

  @media (max-width: 780px) {
    min-height: 100vh;
    background-position: top;
    background-size: initial;
  }
`;
