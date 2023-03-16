import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Content = styled.div`
  width: 100%;
  background: rgb(227, 227, 227);
  background: radial-gradient(
    circle,
    rgba(227, 227, 227, 1) 0%,
    rgba(177, 180, 177, 1) 100%
  );
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
`;

export const Info = styled.div`
  padding: 16px;
  line-height: 30px;

  p,
  h2 {
    text-align: center;
  }
`;

export const ButtonLink = styled.a<{ type: "github" | "linkedin" }>`
  width: 100%;
  max-width: 128px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: ${({ theme }) => theme.colors.gray300};
  padding: 4px;
  text-decoration: none;
  background-color: ${({ theme, type }) =>
    type === "github" ? theme.colors.neutral500 : theme.colors.indigo600};

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
`;
