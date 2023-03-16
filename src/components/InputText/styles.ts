import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 36px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;

  & + div {
    margin-top: 8px;
  }

  label {
    background-color: ${({ theme }) => theme.colors.gray300};
    border-radius: 4px;
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  input {
    padding: 4px;
    display: flex;
    align-items: center;
    height: 100%;
    width: 70%;
    border-radius: 4px;
    border: none;
  }
`;
