import { render, screen } from "@testing-library/react";
import { ButtonLink } from "@ui-library/index";

describe(ButtonLink, () => {
  it("renders children", () => {
    render(<ButtonLink>Im a link</ButtonLink>);
    expect(screen.getByText("Im a link")).toBeInTheDocument();
  });

  it("renders as a link", () => {
    render(<ButtonLink href="/apples">Im a link</ButtonLink>);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
