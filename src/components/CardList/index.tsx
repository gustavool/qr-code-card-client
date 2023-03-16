import { UserModel } from "@/model/User";
import deleteUserById from "@/services/deleteUserById";
import { IdentificationCard, Trash } from "@phosphor-icons/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as S from "./styles";

export type CardListProps = {
  list: UserModel[];
  setList: Dispatch<SetStateAction<UserModel[]>>;
};

const CardList = ({ list, setList }: CardListProps) => {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  async function handleDeleteCardUser(id: string) {
    await deleteUserById(id);
    const cardsAvailable = list.filter((card) => card.id !== id);
    setList(cardsAvailable);
  }

  return (
    <S.Wrapper>
      <S.Content>
        <h2>TOTAL: {list.length}/10</h2>
        {!!list &&
          list.map((user) => (
            <S.List key={user.id}>
              <S.ListItem href={`${origin}/card/${user.id}`} target="_blank">
                <IdentificationCard size={32} /> <span>{user.name}</span>
              </S.ListItem>
              <Trash size={28} onClick={() => handleDeleteCardUser(user.id)} />
            </S.List>
          ))}
      </S.Content>
    </S.Wrapper>
  );
};

export default CardList;
