import styled from "styled-components";

export const Wrapper = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.purple700};
  border: none;
  color: ${({ theme }) => theme.colors.gray300};
  font-weight: bold;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.gray300};
    color: ${({ theme }) => theme.colors.gray700};
  }
`;
