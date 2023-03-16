import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  button {
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
      margin-bottom: 16px;
    }
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: center;
  margin-bottom: 8px;
  border: none;
  background-color: transparent;
`;
