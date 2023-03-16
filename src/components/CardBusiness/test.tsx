import { defaultTheme } from "@/styles/theme";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import CardBusiness from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

describe("<CardBusiness />", () => {
  it("should render default button", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <CardBusiness />
      </ThemeProvider>
    );
  });
});
