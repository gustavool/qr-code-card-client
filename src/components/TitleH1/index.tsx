import * as S from "./styles";

export type TitleH1Props = {
  children: React.ReactNode;
};

const TitleH1 = ({ children }: TitleH1Props) => (
  <S.Wrapper>{children}</S.Wrapper>
);

export default TitleH1;
