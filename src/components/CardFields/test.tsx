import React from "react";
import { defaultTheme } from "@/styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import CardFields from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

describe("<CardFields />", () => {
  it("should render CardFields", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <CardFields />
      </ThemeProvider>
    );

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/about/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/linkedin url/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/github url/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /generate image/i })
    ).toBeInTheDocument();
  });
});
