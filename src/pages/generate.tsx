import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { UserDataContext } from "@/context/UserDataContext";
import saveUser from "@/services/saveUser";

export type CardDataType = {
  name: string;
  about: string;
  linkedin: string;
  github: string;
};

export default function Generate() {
  const { setUser } = useContext(UserDataContext);
  const router = useRouter();
  const [cardData, setCardData] = useState<CardDataType>({
    name: "",
    about: "",
    github: "",
    linkedin: "",
  });

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
    <div className="flex flex-col w-3/6 mx-auto gap-3">
      <Button onClick={() => handleToBack()}>Back</Button>
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
      <Button onClick={handleToGenerate}>Generate Image</Button>
    </div>
  );
}
