import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  button:last-child {
    font-weight: bold;
    margin-top: 24px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};

  h2 {
    font-weight: bold;
    margin: 16px 0;
  }

  button a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 8px;
  border: none;
  background-color: transparent;
`;
