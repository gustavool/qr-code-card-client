import { useRouter } from "next/router";
import Button from "@/components/Button";

export default function Home() {
  const router = useRouter();

  function handleNameChange(e: any) {
    router.push("/generate");
  }

  return (
    <div className="flex flex-col w-3/6 mx-auto gap-3">
      <h1>WELCOME TO QR CODE CARD GENERATOR</h1>
      <Button onClick={handleNameChange}>Generate CARD</Button>
    </div>
  );
}
