import InputText from "@/components/InputText";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  return (
    <>
      <h1 className="text-3xl  underline border-l-red-50 bg-red-700">
        Hello world!
      </h1>
      <InputText
        label="name"
        placeholder="your name"
        onChange={handleNameChange}
      />
      <InputText label="name" placeholder="your name" />
      <InputText label="name" placeholder="your name" />
    </>
  );
}
