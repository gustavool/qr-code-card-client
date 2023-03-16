import React from "react";
import { defaultTheme } from "@/styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import CardBusiness from ".";

React.useState = jest.fn().mockReturnValue([
  {
    name: "Jhon",
    about: "my story",
    github: "https://www.github.com",
    linkedin: "https://www.linkedin.com",
  },
  {},
]);

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

describe("<CardBusiness />", () => {
  it("should render CardBusiness", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <CardBusiness />
      </ThemeProvider>
    );
    expect(screen.getByRole("heading")).toHaveTextContent(/information/i);
    expect(screen.getAllByRole("link")[0]).toHaveAttribute(
      "href",
      "https://www.github.com"
    );
    expect(screen.getAllByRole("link")[1]).toHaveAttribute(
      "href",
      "https://www.linkedin.com"
    );
    expect(screen.getByText("Jhon")).toBeInTheDocument();
    expect(screen.getByText("my story")).toBeInTheDocument();
  });
});
