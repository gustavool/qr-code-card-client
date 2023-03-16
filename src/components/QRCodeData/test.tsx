import React from "react";
import { defaultTheme } from "@/styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import QRCodeData from ".";

const mockUser = {
  id: "abcde12345",
  name: "Jhon",
  about: "my story",
  github: "https://www.github.com",
  linkedin: "https://www.linkedin.com",
};

React.useState = jest.fn().mockReturnValue(["", () => jest.fn()]);
React.useContext = jest.fn().mockReturnValue({ user: mockUser });

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

describe("<QRCodeData />", () => {
  it("should render QRCodeData", () => {
    render(
      <ThemeProvider theme={defaultTheme}>{/* <QRCodeData /> */}</ThemeProvider>
    );
  });
});
