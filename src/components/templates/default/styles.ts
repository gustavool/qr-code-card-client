import { breakpoints } from "./../../../styles/breakpoints";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray300};
  padding: 0 8px;

  img {
    width: 50%;
    min-width: 250px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${breakpoints.md};
  height: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.purple300};
  padding: 0 16px 30px 16px;
`;
