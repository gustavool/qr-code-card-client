import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.white};

  h2 {
    font-weight: bold;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  svg:last-child {
    display: block;
    cursor: pointer;
    height: 100%;
    color: ${({ theme }) => theme.colors.gray700};

    &:hover {
      color: ${({ theme }) => theme.colors.red500};
    }
  }
`;

export const ListItem = styled.a`
  border-bottom: 1px solid transparent;
  padding: 4px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray700};

  span {
    margin-left: 8px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.purple700};
    border-bottom: 1px solid;
  }
`;
