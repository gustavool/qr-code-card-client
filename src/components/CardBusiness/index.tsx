import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import findUserById from "@/services/findUserById";
import { UserModel } from "@/model/User";
import TitleH1 from "@/components/TitleH1";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import * as S from "./styles";

export default function CardBusiness() {
  const [cardData, setCardData] = useState<Omit<UserModel, "id" | "createdAt">>(
    {
      name: "",
      about: "",
      github: "",
      linkedin: "",
    }
  );
  const router = useRouter();

  const idUserCard = router.query?.card;

  useEffect(() => {
    if (!!idUserCard) {
      const fetchUser = async () => {
        const data = await findUserById(String(idUserCard));

        if (data.status !== 200) {
          router.push("/");
          return;
        }
        setCardData(data.data);
      };
      fetchUser();
      return;
    }
  }, [idUserCard]);

  return (
    <>
      {!!cardData.name && (
        <S.Wrapper>
          <S.Content>
            <TitleH1>Informations</TitleH1>
            <S.Info>
              <p>
                Hello, my name is: <strong>{cardData.name}.</strong>
              </p>
              <p>
                About me: <strong>{cardData?.about}</strong>
              </p>
              <p>
                More information about me in my skills below in my Github and
                Linkedin:
              </p>
            </S.Info>
            <S.ButtonGroup>
              <S.ButtonLink
                type="github"
                href={cardData?.github}
                target="_blank"
              >
                <GithubLogo size={24} /> <span>Github</span>
              </S.ButtonLink>
              <S.ButtonLink
                type="linkedin"
                href={cardData?.linkedin}
                target="_blank"
              >
                <LinkedinLogo size={24} /> <span>Linkedin</span>
              </S.ButtonLink>
            </S.ButtonGroup>
          </S.Content>
        </S.Wrapper>
      )}
    </>
  );
}
