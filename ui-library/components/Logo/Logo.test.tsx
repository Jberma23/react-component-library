import { render, screen } from "@testing-library/react";
import { Chevron } from "@ui-library/index";
import { Logo } from "./Logo";

const LogoTestProps = { title: "testTitle", titleId: "TestID" };

describe(Logo, () => {
  it("renders", () => {
    render(<Logo {...LogoTestProps} LogoComponent={Chevron} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  it("renders with title", () => {
    render(<Logo {...LogoTestProps} LogoComponent={Chevron} />);
    expect(screen.getByText("testTitle")).toBeInTheDocument();
  });
  it("renders with title and titleId", () => {
    render(<Logo {...LogoTestProps} LogoComponent={Chevron} />);
    expect(screen.getByText("testTitle")).toHaveAttribute("id", "TestID");
  });
});
