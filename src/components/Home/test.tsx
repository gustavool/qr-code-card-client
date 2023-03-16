import React from "react";
import { defaultTheme } from "@/styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import CardList from ".";
import { UserModel } from "@/model/User";
import Home from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

const usersMock = [
  {
    id: "1",
    name: "Jhon",
    about: "my story",
    github: "https://www.github.com",
    linkedin: "https://www.linkedin.com",
  },
  {
    id: "2",
    name: "Maria",
    about: "my story",
    github: "https://www.github.com",
    linkedin: "https://www.linkedin.com",
  },
] as UserModel[];

describe("<Home />", () => {
  it("should render Home", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Home users={usersMock} setUsers={jest.fn()} />
      </ThemeProvider>
    );

    expect(
      screen.getByRole("heading", { name: /qr code card generator/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /new qrcode card/i })
    ).toBeInTheDocument();
  });
});
