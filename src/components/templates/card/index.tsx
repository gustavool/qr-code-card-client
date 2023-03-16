import * as S from "./styles";

interface CardTemplateProps {
  children: React.ReactNode;
}

export default function CardTemplate({ children }: CardTemplateProps) {
  return (
    <S.Wrapper>
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  );
}
