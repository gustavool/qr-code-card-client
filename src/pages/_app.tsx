import "../../global.css";
import type { AppProps } from "next/app";
import DataContext from "@/context/DataContext";
import { useState } from "react";
import { IUserData } from "./generate";

export default function App({ Component, pageProps }: AppProps) {
  const [data, setData] = useState<IUserData>({
    name: "",
    about: "",
    linkedin: "",
    github: "",
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      <Component {...pageProps} />
    </DataContext.Provider>
  );
}
