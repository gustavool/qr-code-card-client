import Button from "@/components/Button";
import * as S from "./styles";
import TitleH1 from "@/components/TitleH1";
import CardList from "@/components/CardList";
import { UserModel } from "@/model/User";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

export interface HomeProps {
  users: UserModel[];
  setUsers: Dispatch<SetStateAction<UserModel[]>>;
}

export default function Home({ users, setUsers }: HomeProps) {
  const router = useRouter();
  const usersLimit = users.length === 10;

  function handleNameChange(e: any) {
    router.push("/generate");
  }

  return (
    <S.Wrapper>
      <TitleH1>QR CODE CARD GENERATOR</TitleH1>
      <CardList list={users} setList={setUsers} />
      <Button onClick={handleNameChange} disabled={usersLimit}>
        new QRCode Card
      </Button>
      {!!usersLimit && (
        <S.TextError>
          Limit user reached, please remove one to continue.
        </S.TextError>
      )}
    </S.Wrapper>
  );
}
