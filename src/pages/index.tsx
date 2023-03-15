import { useRouter } from "next/router";
import Button from "@/components/Button";
import { IUserData } from "@/context/UserDataContext";
import { useEffect, useState } from "react";
import findAllUsers from "@/services/findAllUsers";
import { UserModel } from "@/model/User";

export default function Home() {
  const [users, setUsers] = useState<UserModel[]>();
  const router = useRouter();

  function handleNameChange(e: any) {
    router.push("/generate");
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await findAllUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col w-3/6 mx-auto gap-3">
      <h1>WELCOME TO QR CODE CARD GENERATOR</h1>

      {!!users && users.map((item) => <p key={item.name}>{item.name}</p>)}
      <Button onClick={handleNameChange}>Generate CARD</Button>
    </div>
  );
}
