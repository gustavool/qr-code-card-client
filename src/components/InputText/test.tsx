import React from "react";
import { defaultTheme } from "@/styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import InputText from ".";

describe("<InputText />", () => {
  it("should render InputText with label", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <InputText label="label test" placeholder="input test" />
      </ThemeProvider>
    );

    expect(screen.getByLabelText(/label test/i)).toBeInTheDocument();
  });

  it("should render InputText without label", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <InputText placeholder="input test" />
      </ThemeProvider>
    );

    expect(screen.queryByText(/label test/i)).not.toBeInTheDocument();
  });
});
