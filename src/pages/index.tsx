import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import findAllUsers from "@/services/findAllUsers";
import { UserModel } from "@/model/User";
import DefaultTemplate from "@/components/templates/default";
import Home from "@/components/Home";

export default function Index() {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await findAllUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <DefaultTemplate>
      <Home users={users} setUsers={setUsers} />
    </DefaultTemplate>
  );
}
