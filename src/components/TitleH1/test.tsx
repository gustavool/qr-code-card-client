import React from "react";
import { defaultTheme } from "@/styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import TitleH1 from ".";

describe("<TitleH1 />", () => {
  it("should render TitleH1 with label", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <TitleH1>Title test</TitleH1>
      </ThemeProvider>
    );

    expect(
      screen.getByRole("heading", { name: /title test/i })
    ).toBeInTheDocument();
  });
});
