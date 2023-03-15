import type { AppProps } from "next/app";
import "../../global.css";
import UserDataProvider from "@/context/UserDataContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserDataProvider>
      <Component {...pageProps} />
    </UserDataProvider>
  );
}
