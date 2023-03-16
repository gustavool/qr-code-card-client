import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { UserDataContext } from "@/context/UserDataContext";
import saveUser from "@/services/saveUser";
import { ArrowLeft } from "@phosphor-icons/react";
import * as S from "./styles";

export type CardDataType = {
  name: string;
  about: string;
  linkedin: string;
  github: string;
};

export default function CardFields() {
  const { setUser } = useContext(UserDataContext);
  const router = useRouter();
  const [cardData, setCardData] = useState<CardDataType>({
    name: "",
    about: "",
    github: "",
    linkedin: "",
  });

  const hasEmptyFields = [
    cardData.name,
    cardData.about,
    cardData.github,
    cardData.linkedin,
  ].includes("");

  function handleToBack() {
    router.push("/");
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCardData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleToGenerate() {
    const userFormData = {
      name: cardData.name,
      about: cardData.about,
      github: cardData.github,
      linkedin: cardData.linkedin,
    };
    const newUserData = await saveUser(userFormData);
    setUser({ ...userFormData, id: newUserData.id });
    router.push(`/qrcode`);
  }

  return (
    <S.Wrapper>
      <S.BackButton onClick={() => handleToBack()}>
        <ArrowLeft size={32} /> <span>back</span>
      </S.BackButton>
      <InputText
        label="Name"
        name="name"
        placeholder="your name"
        onChange={handleInputChange}
      />
      <InputText
        label="About"
        name="about"
        placeholder="about"
        onChange={handleInputChange}
      />
      <InputText
        label="Linkedin URL"
        name="linkedin"
        placeholder="linkedin url"
        onChange={handleInputChange}
      />
      <InputText
        label="Github URL"
        name="github"
        placeholder="github url"
        onChange={handleInputChange}
      />
      <Button onClick={handleToGenerate} disabled={hasEmptyFields}>
        Generate Image
      </Button>
    </S.Wrapper>
  );
}
