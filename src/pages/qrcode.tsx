import Button from "@/components/Button";
import InputText from "@/components/InputText";
import QRCodeLink from "@/components/QRCodeLink";
import { IUserData, UserDataContext } from "@/context/UserDataContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
export default function QRCode() {
  const { user } = useContext(UserDataContext);
  const router = useRouter();
  function handleToBack() {
    router.push("/");
  }

  useEffect(() => {
    if (!user.id) {
      handleToBack();
    }
  }, []);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = `${origin}/card/${user.id}`;
  console.log("URL", URL);

  return (
    <>
      {!!user.name && (
        <div className="flex flex-col w-3/6 mx-auto gap-3 items-center">
          <Button onClick={() => handleToBack()}>Back</Button>
          <h1 className="font-bold text-5xl">{user.name}</h1>
          <h2 className="text-xl">Scan ME</h2>
          <QRCodeLink link={URL} />
        </div>
      )}
    </>
  );
}
