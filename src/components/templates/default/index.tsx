import CardImage from "../../../../public/assets/card.svg";
import * as S from "./styles";

interface DefaultTemplateProps {
  children: React.ReactNode;
}

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  return (
    <S.Wrapper>
      <S.Container>
        <img
          src={CardImage.src}
          alt="woman saying hello with a card apresentation"
        />
        {children}
      </S.Container>
    </S.Wrapper>
  );
}
