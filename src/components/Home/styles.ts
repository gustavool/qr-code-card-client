import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  h1 {
    margin-bottom: 8px;
  }

  button {
    margin-top: 16px;
    font-weight: bold;
  }
`;

export const TextError = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red500};
`;
