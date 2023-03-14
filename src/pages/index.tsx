import Button from "@/components/Button";
import InputText from "@/components/InputText";
import QRCodeLink from "@/components/QRCodeLink";
import { useState } from "react";
import QRCode from "react-qr-code";

export default function Home() {
  const [name, setName] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleLinkedinChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLinkedin(e.target.value);
  }

  function handleGithubChange(e: React.ChangeEvent<HTMLInputElement>) {
    setGithub(e.target.value);
  }
  return (
    <div className="flex flex-col w-3/6 mx-auto gap-3">
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
      <Button>Generate Image</Button>

      <QRCodeLink link="https://www.google.com.br" />
    </div>
  );
}
