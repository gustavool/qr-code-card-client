import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import findUserById from "@/services/findUserById";
import { UserModel } from "@/model/User";

export default function Card() {
  const [cardData, setCardData] = useState<Omit<UserModel, "id" | "createdAt">>(
    {
      name: "",
      about: "",
      github: "",
      linkedin: "",
    }
  );
  const router = useRouter();

  console.log("router", router.query);
  const idUserCard = router.query?.card;

  useEffect(() => {
    if (!!idUserCard) {
      const fetchUser = async () => {
        const data = await findUserById(String(idUserCard));

        if (data.status !== 200) {
          router.push("/");
          return;
        }
        setCardData(data.data);
      };
      fetchUser();
      return;
    }
  }, [idUserCard]);

  return (
    <>
      {!!cardData.name && (
        <div className="flex flex-col w-3/6 mx-auto gap-3">
          <p>Hello, my name is {cardData.name}</p>
          <h2>My history</h2>
          <p>{cardData?.about}</p>

          <a href={cardData?.github}>Github</a>
          <a href={cardData?.linkedin}>Linkedin</a>
        </div>
      )}
    </>
  );
}
