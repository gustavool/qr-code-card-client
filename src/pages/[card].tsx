import { useRouter } from "next/router";
import Button from "@/components/Button";

export default function Card() {
  const router = useRouter();

  function handleNameChange(e: any) {
    router.push("/generate");
  }

  return (
    <div className="flex flex-col w-3/6 mx-auto gap-3">
      <p>Hello, my name is Joao</p>
      <h2>My history</h2>

      <Button>Github</Button>
      <Button>Linkedin</Button>
    </div>
  );
}
