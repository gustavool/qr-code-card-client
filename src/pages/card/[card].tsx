import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import findUserById from "@/services/findUserById";
import { UserModel } from "@/model/User";
import CardTemplate from "@/components/templates/card";
import TitleH1 from "@/components/TitleH1";
import Button from "@/components/Button";
import CardBusiness from "@/components/CardBusiness";

export default function Card() {
  return (
    <CardTemplate>
      <CardBusiness />
    </CardTemplate>
  );
}
