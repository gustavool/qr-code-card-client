import React from "react";
import { defaultTheme } from "@/styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import CardList from ".";
import { UserModel } from "@/model/User";

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

describe("<CardList />", () => {
  it("should render CardList", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <CardList list={usersMock} setList={jest.fn()} />
      </ThemeProvider>
    );

    expect(
      screen.getByRole("heading", { name: /total:/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/jhon/i)).toBeInTheDocument();
    expect(screen.getByText(/maria/i)).toBeInTheDocument();
  });
});
