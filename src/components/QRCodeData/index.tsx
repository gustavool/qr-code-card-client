import { useContext, useEffect, useState } from "react";
import Button from "@/components/Button";
import { UserDataContext } from "@/context/UserDataContext";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import TitleH1 from "../TitleH1";
import LinkQRCode from "qrcode";
import * as S from "./styles";
import QRCodeBox from "../QRCodeBox";

export default function QRCodeData() {
  const [linkQRCode, setLinkQRCode] = useState("");
  const { user } = useContext(UserDataContext);
  const router = useRouter();

  function handleToBack() {
    router.push("/");
  }

  function handleGenerateLink(link: string) {
    LinkQRCode.toDataURL(
      link,
      {
        width: 400,
        margin: 3,
      },
      function (error, url) {
        setLinkQRCode(url);
      }
    );
  }

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const urlCard = `${origin}/card/${user.id}`;

  useEffect(() => {
    if (!user.id) {
      handleToBack();
    }

    handleGenerateLink(urlCard);
  }, [user.id]);

  return (
    <>
      {!!user.name && (
        <S.Wrapper>
          <S.BackButton onClick={() => handleToBack()}>
            <BiArrowBack size={24} /> <span>back</span>
          </S.BackButton>
          <S.Container>
            <TitleH1>{user.name}</TitleH1>
            <h2>Scan ME</h2>
            <QRCodeBox link={urlCard} />
            {!!linkQRCode && (
              <Button>
                <a href={linkQRCode} download={`qrcode-${user.name}.png`}>
                  Download QRCODE image
                </a>
              </Button>
            )}
          </S.Container>
        </S.Wrapper>
      )}
    </>
  );
}
