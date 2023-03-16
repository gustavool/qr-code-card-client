import type { AppProps } from "next/app";
import UserDataProvider from "@/context/UserDataContext";
import GlobalStyles from "@/styles/globalStyles";
import { defaultTheme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserDataProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserDataProvider>
  );
}
