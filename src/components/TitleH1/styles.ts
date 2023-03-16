import styled from "styled-components";

export const Wrapper = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  position: relative;

  &:after {
    position: absolute;
    content: "";
    height: 4px;
    background-color: ${({ theme }) => theme.colors.purple700};
    width: 50%;
    left: 25%;
    bottom: 1px;
  }
`;
