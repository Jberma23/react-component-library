import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Headline } from "./index";

describe(Headline, () => {
  it("renders children", () => {
    render(<Headline level={1}>Test</Headline>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("defaults to an h3 tag when no 'as' property is set", () => {
    render(<Headline level={0}>Test</Headline>);
    expect(screen.getByText("Test").tagName).toBe("H3");
  });

  it("applies the 'as' property as the underlying element", () => {
    render(
      <Headline level={0} as="h1">
        Test
      </Headline>
    );

    expect(screen.getByText("Test").tagName).toBe("H1");
  });
});
