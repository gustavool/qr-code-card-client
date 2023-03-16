import { defaultTheme } from "@/styles/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Button from ".";

describe("<Button />", () => {
  it("should render default button", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Button>Button teste</Button>
      </ThemeProvider>
    );

    expect(screen.getByRole("button")).toHaveTextContent(/button teste/i);
  });

  it("should render disabled button", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Button disabled>Button teste</Button>
      </ThemeProvider>
    );

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/button teste/i);
    expect(button).toHaveStyle({
      backgroundColor: "#d1d5db",
      cursor: "not-allowed",
      color: "#585858",
    });
  });
});
