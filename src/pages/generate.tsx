import Button from "@/components/Button";
import InputText from "@/components/InputText";
import QRCodeLink from "@/components/QRCodeLink";
import { useRouter } from "next/router";
import { useState } from "react";

export interface IUserData {
  name: string;
  about: string;
  linkedin: string;
  github: string;
}

export default function Generate() {
  const [name, setName] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const router = useRouter();

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleLinkedinChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLinkedin(e.target.value);
  }

  function handleGithubChange(e: React.ChangeEvent<HTMLInputElement>) {
    setGithub(e.target.value);
  }

  function handleToBack() {
    console.log("chamou");
    router.push("/");
  }

  function handleToGenerate() {
    router.push(`/joao`);
  }
  return (
    <div className="flex flex-col w-3/6 mx-auto gap-3">
      <Button onClick={() => handleToBack()}>Back</Button>
      <InputText
        label="Name"
        placeholder="your name"
        onChange={handleNameChange}
      />
      <InputText
        label="Linkedin URL"
        placeholder="linkedin url"
        onChange={handleLinkedinChange}
      />
      <InputText
        label="Github URL"
        placeholder="github url"
        onChange={handleGithubChange}
      />
      <Button onClick={handleToGenerate}>Generate Image</Button>

      <QRCodeLink link="https://www.google.com.br" />
    </div>
  );
}
